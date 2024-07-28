import { Dispatch, useEffect, useRef, useState } from "react";
import CustomModal from "./modal";

/** Styling */
import styles from "./Camera.module.scss";

const videoContainer: React.CSSProperties = {
  position: "relative",
};
const outputContainer: React.CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
};

/** MediaPipe */
import {
  GestureRecognizer,
  FilesetResolver,
  DrawingUtils,
} from "@mediapipe/tasks-vision";

/** Constants */
const ENABLE_TEXT = "Open webcam";
const DISABLE_TEXT = "Close webcam";

const MIN_CONFIDENCE_SCORE = 0.7;

export interface HandGesture {
  /** Type of gesture. One of the following: "None", "Closed_Fist", "Open_Palm", "Pointing_Up", "Thumb_Down", "Thumb_Up", "Victory", "ILoveYou" */
  category: string;
  /** Prediction confidence score */
  score: number;
  /** Left/right hand */
  handedness: string;
}

/**
 * Camera widget properties
 */
interface CameraProps {
  /** Canvas dimensions */
  canvasWidth: number;
  canvasHeight: number;
  /** Number of hands to detect at max */
  numHands: number;
  /** Background color for styling trigger button */
  btnBackgroundColor: string;
  /** Text color for styling trigger button and output text */
  textColor: string;
  /** Result object (if any) */
  resultSetter: Dispatch<HandGesture>;
  /** List of available options to predict for */
  availableOptions: string[];
}

/**
 * Camera widget for rendering prediction results from MediaPipe
 * @returns
 */
const Camera = ({
  canvasWidth,
  canvasHeight,
  numHands = 1,
  btnBackgroundColor,
  textColor,
  resultSetter,
  availableOptions,
}: CameraProps) => {
  let gestureRecognizer = useRef<GestureRecognizer>(null);

  /** Flags */
  let [webcamRunning, webcamSetter] = useState(false);
  let [lastVideoTime, lastVideoTimeSetter] = useState(-1);
  let results: any = undefined;

  /** HTML Elements */
  const video = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const outputCategory = useRef<HTMLSpanElement>(null);
  const outputScore = useRef<HTMLSpanElement>(null);
  const outputHandedness = useRef<HTMLSpanElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const localStream = useRef<MediaStream>(null);
  const { hand_connectors, joint } = styles;

  /** Trigger button */
  let [btnContent, btnContentSetter] = useState(ENABLE_TEXT);
  const triggerBtn = useRef<HTMLButtonElement>(null);

  /** Warnings */
  let [showModalNotLoaded, setModalNotLoaded] = useState(false);
  let [showModalWebcamDenied, setModalWebcamDenied] = useState(false);

  /**
   * Prepare hand gesture detection model for prediction
   * @param numHands maximum number of hands to detect
   */
  const createGestureRecognizer = async (numHands: number) => {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.12/wasm"
    );

    gestureRecognizer.current = await GestureRecognizer.createFromOptions(
      vision,
      {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
          delegate: "CPU",
        },
        runningMode: "VIDEO",
        numHands: numHands,
      }
    );
  };

  /**
   * Check if web camera access is allowed
   * @returns true if access is allowed, false otherwise
   */
  const isUserCameraAllowed = () => {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  };

  useEffect(() => {
    // If user allows access
    if (isUserCameraAllowed()) {
      // Set up gesture recognizer model
      createGestureRecognizer(numHands);
      triggerBtn.current.addEventListener("click", togglePrediction);
    }

    return () => stopPrediction();
  }, []);

  /**
   * Stop model and disable prediction
   */
  const stopPrediction = () => {
    if (canvas.current != null && video.current != null) {
      canvas.current
        .getContext("2d")
        .clearRect(0, 0, canvasWidth, canvasHeight);
      video.current.pause();
      video.current.src = "";
      video.current.srcObject = null;
      outputCategory.current.innerHTML = "";
      outputScore.current.innerHTML = "";
      outputHandedness.current.innerHTML = "";

      videoContainerRef.current.style.opacity,
      textWrapperRef.current.style.opacity = '0';
    }

    if (localStream.current) {
      localStream.current.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  /**
   * Trigger prediction
   */
  const togglePrediction = () => {
    if (!gestureRecognizer) {
      setModalNotLoaded(true);
      return;
    }

    if (webcamRunning) {
      webcamSetter(false);
      btnContentSetter(ENABLE_TEXT);
    } else {
      webcamSetter(true);
      videoContainerRef.current.style.opacity = '1'
      // Start video prediction
      startVideo();
    }
  };

  /**
   * Start media prediction via webcam
   */
  const startVideo = () => {
    // Activate the webcam stream
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.current.srcObject = stream;
        localStream.current = stream;
        btnContentSetter(DISABLE_TEXT);
      })
      .catch(() => {
        setModalWebcamDenied(true);
      });
  };

  const setText = (results: any) => {
    textWrapperRef.current.style.opacity = '1';

      outputCategory.current.innerHTML = `Type: ${results.gestures[0][0].categoryName.replace(
        "_",
        " "
      )}`;
      outputScore.current.innerHTML = `Confidence: ${(results.gestures[0][0].score * 100).toFixed(2)}%`;
      outputHandedness.current.innerHTML = `Handedness: ${results.handedness[0][0].displayName}`;
  }

  const predict = () => {
    const videoEl = video.current;
    const canvasEl = canvas.current;
    let nowInMs = Date.now();

    if (canvasEl == null || videoEl == null) {
      return;
    }

    const canvasCtx = canvasEl.getContext("2d");

    if (!videoEl.videoHeight || !videoEl.videoWidth) {
      btnContentSetter(ENABLE_TEXT);
      stopPrediction();
      return;
    }
    // As the video progresses, update results
    if (videoEl.currentTime !== lastVideoTime) {
      results = gestureRecognizer.current.recognizeForVideo(videoEl, nowInMs);
      lastVideoTimeSetter(videoEl.currentTime);
    }

    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    const drawingUtils = new DrawingUtils(canvasCtx);
    canvas.current.style.height = `${canvasHeight}px`;
    video.current.style.height = `${canvasHeight}px`;
    canvas.current.style.width = `${canvasWidth}px`;
    video.current.style.width = `${canvasWidth}px`;

    /** If hand landmarks are included, draw it on the canvas */
    if (results && results.landmarks) {
      for (const landmark of results.landmarks) {
        /** Draw the connectors */
        drawingUtils.drawConnectors(
          landmark,
          GestureRecognizer.HAND_CONNECTIONS,
          {
            color: hand_connectors,
            lineWidth: 0.5,
          }
        );

        /** Draw the joints */
        drawingUtils.drawLandmarks(landmark, {
          color: joint,
          radius: 1,
        });
      }
    }

    canvasCtx.restore();

    if (
      results &&
      results.gestures.length > 0 &&
      results.gestures[0][0].score > MIN_CONFIDENCE_SCORE
    ) {
      if (availableOptions.includes(results.gestures[0][0].categoryName)) {
        const resultObj = {
          category: results.gestures[0][0].categoryName,
          score: results.gestures[0][0].score * 100,
          handedness: results.handedness[0][0].displayName,
        };
        setText(results);
        resultSetter(resultObj);
        return;
      }

      setText(results);

    } else {
        textWrapperRef.current.style.opacity = '0';
    }

    requestAnimationFrame(() => {
      if (webcamRunning) {
        predict();
      }
    });
  };

  return (
    <>
      <section
        className={
          styles.videoSection + ` ${gestureRecognizer ? "" : styles.invisible}`
        }
      >
        <button
          ref={triggerBtn}
          style={{
            backgroundColor: btnBackgroundColor,
            color: textColor,
            border: `1px solid ${textColor}`,
          }}
        >
          <span>{btnContent.toUpperCase()}</span>
        </button>

        <div
          className={styles.videoWrapper}
          style={{
            width: `calc(${canvasWidth}+1rem)`
          }}
          ref={videoContainerRef}
        >
          
          <div
            style={{
              ...videoContainer,
              width: canvasWidth,
              height: canvasHeight,
            }}
          >
            <video
              ref={video}
              onLoadedData={predict}
              autoPlay
              playsInline
            ></video>
            <canvas
              ref={canvas}
              className="outputCanvas"
              style={outputContainer}
            ></canvas>
          </div>

          <div
            className={styles.textWrapper}
            style={{ maxWidth: canvasWidth }}
            ref={textWrapperRef}
          >
            <span
              ref={outputCategory}
              className={styles.output}
              style={{
                color: textColor,
                border: `1px solid ${textColor}`
              }}
            ></span>
            <span ref={outputScore} className={styles.output} style={{
                color: textColor,
                border: `1px solid ${textColor}`
              }}></span>
            <span
              ref={outputHandedness}
              className={styles.output}
              style={{
                color: textColor,
                border: `1px solid ${textColor}`
              }}
            ></span>
          </div>
        </div>

        <CustomModal
          title="Warning"
          body="Computer vision model is not loaded yet."
          btnText=""
          show={showModalNotLoaded}
          onHide={() => setModalNotLoaded(false)}
        ></CustomModal>

        <CustomModal
          title="Camera access disabled"
          body="Please allow webcam access to continue."
          btnText=""
          show={showModalWebcamDenied}
          onHide={() => setModalWebcamDenied(false)}
        ></CustomModal>
      </section>
    </>
  );
};

export default Camera;

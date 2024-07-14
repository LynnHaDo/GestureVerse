import { useEffect, useRef, useState } from "react";
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
}: CameraProps) => {
  let gestureRecognizer = useRef<GestureRecognizer>(null);

  /** Flags */
  let [webcamRunning, webcamSetter] = useState(false);
  let [lastVideoTime, lastVideoTimeSetter] = useState(-1);
  let results: any = undefined;

  /** HTML Elements */
  const video = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const outputText = useRef<HTMLParagraphElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  
  /** Trigger button */
  let [btnContent, btnContentSetter] = useState("Enable prediction");
  const triggerBtn = useRef<HTMLButtonElement>(null);

  /** Warnings */
  let [showModalNotLoaded,setModalNotLoaded] = useState(false);
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

    //return () => stopPrediction();
  }, []);

  /**
   * Stop model and disable prediction
   */
  const stopPrediction = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      stream.getTracks().forEach((track) => {
        console.log("running");
        track.stop();
      });
      //gestureRecognizer.current.close();
      videoContainerRef.current.style.display = "none";
    });
  };

  /**
   * Trigger prediction
   */
  const togglePrediction = () => {
    if (!gestureRecognizer) {
      setModalNotLoaded(true);
      return;
    }

    // Change display text based on whether the webcam is running or not
    webcamSetter(!webcamRunning);
    btnContentSetter(webcamRunning? "Disable prediction" : "Enable prediction");

    // Start video prediction
    startVideo();
  };

  /**
   * Start media prediction via webcam
   */
  const startVideo = () => {
    // Activate the webcam stream
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.current.srcObject = stream;
    }).catch(() => {
        setModalWebcamDenied(true);
        webcamSetter(false);
        btnContentSetter("Enable prediction");
    });
  };

  const predict = () => {
    const videoEl = video.current;
    const canvasEl = canvas.current;
    let nowInMs = Date.now();
    const canvasCtx = canvasEl.getContext("2d");
    if (!videoEl.videoHeight || !videoEl.videoWidth) {
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
            color: "rgb(103, 169, 215)",
            lineWidth: 2,
          }
        );

        /** Draw the joints */
        drawingUtils.drawLandmarks(landmark, {
          color: "rgb(241, 229, 192)",
          lineWidth: 1,
        });
      }
    }

    canvasCtx.restore();

    if (results && results.gestures.length > 0) {
      outputText.current.style.display = "block";
      outputText.current.style.width = `${canvasWidth}px`;

      const categoryName = results.gestures[0][0].categoryName;
      const categoryScore = results.gestures[0][0].score * 100;
      const handedness = results.handedness[0][0].displayName;
      outputText.current.innerText = `Type: ${categoryName}\n
                                                    Confidence: ${categoryScore}%\n
                                                    Handedness: ${handedness}`;
    } else {
      outputText.current.style.display = "none";
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
        <div className={styles.videoView}>
          <button
            ref={triggerBtn}
            style={{ backgroundColor: btnBackgroundColor, color: textColor }}
          >
            <span>{btnContent}</span>
          </button>
          <div style={videoContainer} ref={videoContainerRef}>
            <video
              width={canvasWidth}
              height={canvasHeight}
              ref={video}
              onLoadedData={predict}
              autoPlay
              playsInline
            ></video>
            <canvas
              ref={canvas}
              className="outputCanvas"
              width={canvasWidth}
              height={canvasHeight}
              style={outputContainer}
            ></canvas>
            <p ref={outputText} className="output" color={textColor}></p>
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

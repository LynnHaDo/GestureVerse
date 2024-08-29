import { Dispatch, useEffect, useRef, useState } from "react";
import CustomModal from "./modal";

/** Styling */
import styles from "./Camera.module.scss";
import colors from "public/themeColors.module.scss";

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
import { optionItemProps } from "./constants/options";

/** Constants */
const ENABLE_TEXT = "Open webcam";
const DISABLE_TEXT = "Close webcam";

const MIN_CONFIDENCE_SCORE = 0.6;

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
  /** The gesture recognizer engine to use */
  gestureRecognizer: GestureRecognizer;
  /** Video/canvas width */
  canvasWidth: number;
  /** Video/canvas height */
  canvasHeight: number;
  /** Result object (if any) */
  resultSetter?: Dispatch<HandGesture>;
  /** List of available gesture options to predict for */
  availableOptions?: optionItemProps[];
}

/**
 * Camera widget for rendering prediction results from MediaPipe
 * @returns camera wrapper
 */
const Camera = ({
  gestureRecognizer,
  canvasWidth,
  canvasHeight,
  resultSetter,
  availableOptions,
}: CameraProps): JSX.Element => {
  /** Flags */
  let [webcamRunning, webcamSetter] = useState(false);
  let [showModalWebcamAccess, setModalWebcamAccess] = useState(false);
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

  const pauseIcon = useRef<SVGSVGElement>(null);
  const playIcon = useRef<SVGSVGElement>(null);

  const { hand_connectors, joint } = styles;

  /**
   * Check if web camera access is allowed
   * @returns true if access is allowed, false otherwise
   */
  const isUserCameraAllowed = () => {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  };

  useEffect(() => {
    if (!resultSetter && !availableOptions) {
      webcamSetter(false);
      pauseIcon.current.style.display = "block";
      playIcon.current.style.display = "none";
      return;
    }

    // If user allows access
    if (isUserCameraAllowed()) {
      togglePrediction();
    }

    return () => stopPrediction();
  }, [gestureRecognizer]);

  /**
   * Stop model and disable prediction
   */
  const stopPrediction = () => {
    if (canvas.current != null && video.current != null) {
      canvas.current
        .getContext("2d")
        .clearRect(0, 0, canvasWidth, canvasHeight);
      pauseIcon.current.style.display = "block";
      video.current.pause();

      outputCategory.current.innerHTML = "";
      outputScore.current.innerHTML = "";
      outputHandedness.current.innerHTML = "";

      textWrapperRef.current.style.opacity = "0";
      textWrapperRef.current.style.visibility = "hidden";
    }

    if (localStream.current) {
      localStream.current.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  /**
   * Toggle prediction state
   */
  const togglePrediction = () => {
    webcamSetter(true);
    playIcon.current.style.display = "block";
    pauseIcon.current.style.display = "none";
    // Start video prediction
    startVideo();
  };

  /**
   * Start media prediction via webcam.
   * Display error message if webcam is not enabled
   */
  const startVideo = () => {
    // Activate the webcam stream
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        playIcon.current.style.display = "none";
        video.current.srcObject = stream;
        localStream.current = stream;
      })
      .catch(() => {
        setModalWebcamAccess(true);
      });
  };

  /**
   * Display the prediction result underneath the video
   * @param results result object obtained from the model (not null)
   */
  const setText = (results: any) => {
    textWrapperRef.current.style.opacity = "1";
    textWrapperRef.current.style.visibility = "visible";

    outputCategory.current.innerHTML = `Type: ${results.gestures[0][0].categoryName.replace(
      "_",
      " "
    )}`;
    outputScore.current.innerHTML = `Confidence: ${(
      results.gestures[0][0].score * 100
    ).toFixed(2)}%`;
    outputHandedness.current.innerHTML = `Hand: ${results.handedness[0][0].displayName}`;
  };

  const predict = () => {
    const videoEl = video.current;
    const canvasEl = canvas.current;
    let nowInMs = Date.now();

    if (canvasEl == null || videoEl == null) {
      return;
    }

    const canvasCtx = canvasEl.getContext("2d");

    if (!videoEl.videoHeight || !videoEl.videoWidth || !gestureRecognizer) {
      //stopPrediction();
      return;
    }

    // As the video progresses, update results
    if (videoEl.currentTime !== lastVideoTime) {
      results = gestureRecognizer.recognizeForVideo(videoEl, nowInMs);
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
      let itemList: optionItemProps[] = availableOptions.filter(
        (o) =>
          (o.action == null || o.action === results.gestures[0][0].categoryName) &&
          (o.handedness == null || o.handedness === results.handedness[0][0].displayName) 
      );

      if (itemList.length > 0) {
        const resultObj = {
          category: results.gestures[0][0].categoryName,
          score: results.gestures[0][0].score * 100,
          handedness: results.handedness[0][0].displayName,
        };

        if (canvas.current != null) {
          canvas.current
            .getContext("2d")
            .clearRect(0, 0, canvasWidth, canvasHeight);
        }

        setText(results);
        resultSetter(resultObj);
        return;
      }

      setText(results);
    } else {
      textWrapperRef.current.style.opacity = "0";
      textWrapperRef.current.style.visibility = "hidden";
    }

    requestAnimationFrame(() => {
      if (webcamRunning) predict();
    });
  };

  return (
    <>
      <section
        className={
          styles.videoSection + ` ${gestureRecognizer ? "" : styles.invisible}`
        }
      >
        <div
          className={styles.videoWrapper}
          style={{
            width: `calc(${canvasWidth}+1rem)`,
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
            <div className={styles.iconWrapper}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#fafafa"
                ref={playIcon}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z"
                    fill="#fafafa"
                  ></path>{" "}
                </g>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#fafafa"
                ref={pauseIcon}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.07612 8.61732C8 8.80109 8 9.03406 8 9.5V14.5C8 14.9659 8 15.1989 8.07612 15.3827C8.17761 15.6277 8.37229 15.8224 8.61732 15.9239C8.80109 16 9.03406 16 9.5 16C9.96594 16 10.1989 16 10.3827 15.9239C10.6277 15.8224 10.8224 15.6277 10.9239 15.3827C11 15.1989 11 14.9659 11 14.5V9.5C11 9.03406 11 8.80109 10.9239 8.61732C10.8224 8.37229 10.6277 8.17761 10.3827 8.07612C10.1989 8 9.96594 8 9.5 8C9.03406 8 8.80109 8 8.61732 8.07612C8.37229 8.17761 8.17761 8.37229 8.07612 8.61732ZM13.0761 8.61732C13 8.80109 13 9.03406 13 9.5V14.5C13 14.9659 13 15.1989 13.0761 15.3827C13.1776 15.6277 13.3723 15.8224 13.6173 15.9239C13.8011 16 14.0341 16 14.5 16C14.9659 16 15.1989 16 15.3827 15.9239C15.6277 15.8224 15.8224 15.6277 15.9239 15.3827C16 15.1989 16 14.9659 16 14.5V9.5C16 9.03406 16 8.80109 15.9239 8.61732C15.8224 8.37229 15.6277 8.17761 15.3827 8.07612C15.1989 8 14.9659 8 14.5 8C14.0341 8 13.8011 8 13.6173 8.07612C13.3723 8.17761 13.1776 8.37229 13.0761 8.61732Z"
                    fill="#fafafa"
                  ></path>{" "}
                </g>
              </svg>
            </div>

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
                color: `${colors.dark}`,
              }}
            ></span>
            <span
              ref={outputScore}
              className={styles.output}
              style={{
                color: `${colors.dark}`,
              }}
            ></span>
            <span
              ref={outputHandedness}
              className={styles.output}
              style={{
                color: `${colors.dark}`,
              }}
            ></span>
          </div>
        </div>
        <CustomModal
          title="Warning"
          body="Camera access denied. Make sure to enable to continue."
          btnText=""
          show={showModalWebcamAccess}
          onHide={() => setModalWebcamAccess(false)}
        />
      </section>
    </>
  );
};

export default Camera;

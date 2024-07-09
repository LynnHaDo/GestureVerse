import * as React from 'react'

import { useSelector } from 'react-redux'

import { RootState } from 'core/types'

import styles from 'public/stories/index/styles/Camera.module.scss'

const videoContainer: React.CSSProperties = {
    position: "relative"
}

const outputContainer: React.CSSProperties = {
    position: "absolute", 
    left: 0, 
    top: 0
}

import {
    GestureRecognizer,
    FilesetResolver,
    DrawingUtils,
} from '@mediapipe/tasks-vision';

let gestureRecognizer: GestureRecognizer;

const Camera = (): JSX.Element => {
    let [btnContent, btnContentSetter] = React.useState("Enable prediction");
    

    const createGestureRecognizer = async () => {
        const vision = await FilesetResolver.forVisionTasks(
            // path/to/wasm/root
            'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm'
          );
        
        gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
            baseOptions: {
              modelAssetPath:
                'https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task',
              delegate: 'CPU',
            },
            runningMode: 'VIDEO',
            numHands: 2, // detect at max 2 hands
        });
    }

    return (
        <>
            <section id="demo" className={styles.videoSection + styles.invisible}>
                <div id="liveView" className={styles.videoView}>
                    <button id="enableButton">
                        <span></span>
                        <span>{btnContent}</span>
                    </button>
                    <div style = {videoContainer}>
                        <video id="webcam" autoPlay playsInline></video>
                        <canvas
                            className="outputCanvas"
                            id="outputCanvas"
                            width="640" height="360" 
                            style = {outputContainer}
                        ></canvas>
                        <p id="output" className="output"></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Camera;
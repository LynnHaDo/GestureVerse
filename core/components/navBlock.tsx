/**
 * A special case of a Choice that provides navigation between chapters.
 *
 * Use a full Choice component if you want the name of the link to change
 * after clicking.
 */
import React, { useContext, useEffect, useState } from "react";

import { Camera } from "core/components";
import { Tag, Next, NextType } from "core/types";
import {
  ChapterContext,
  createGestureRecognizer,
  GestureRecognizerContext,
  reloadScreen,
} from "core/components/chapter";

import { useDispatch } from "react-redux";

import { HandGesture } from "./camera";
import { makeChoice } from "core/features/choice";

import styles from "./ChoiceBlock.module.scss";

import CustomModal from "./modal";
import { optionItem } from "./constants/options";

export interface NavBlockProps {
  /** The displayed text for the link */
  text: string;
  /** The chapter name or section */
  next: NextType;
  /** Whether to continue to display the hyperlink or not */
  persist?: boolean;
  /** Tag to be supplied if the text string is non-unique */
  tag?: Tag;
  /** Class name to based to the widget */
  instructionClassName?: string;
  /** Color of the hyperlinks */
  textColor?: string;
  /** Handler for clicking event */
  handler?: Function;
}

export const NavBlock = ({
  text = "More...",
  next = Next.Section,
  tag = undefined,
  instructionClassName = "",
  textColor = "",
  handler = undefined,
}: NavBlockProps): JSX.Element => {
  /** Decision-making-related states/handlers */
  const dispatch = useDispatch<any>();
  const [result, resultSetter] = useState<HandGesture>(null); // save the state of the tag

  const { filename } = React.useContext(ChapterContext);

  /** Warnings */
  let [showModalNotLoaded, setModalNotLoaded] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  const { gestureRecognizer, gestureRecognizerSetter } = useContext(
    GestureRecognizerContext
  );

  // Generic handler that a widget-specific handler will call once the player has made their choice
  let genericHandler = (): void => {
    dispatch(makeChoice(tag, text, next, filename));
  };

  let handlerFunct: Function =
    handler == null || handler == undefined ? genericHandler : handler;

  const [width, setWidth] = useState(window.innerWidth);
  const [canvasWidth, setCanvasWidth] = useState(230);
  const [canvasHeight, setCanvasHeight] = useState(130);

  useEffect(() => {
    /** Code referenced from https://www.dhiwise.com/post/react-get-screen-width-everything-you-need-to-know */
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (width < 500) {
      setCanvasWidth(canvasWidth * 0.5);
      setCanvasHeight(canvasHeight * 0.5);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    reloadScreen();
    createGestureRecognizer(gestureRecognizerSetter);
    setModelLoaded(true);
  }, [modelLoaded]);

  useEffect(() => {
    if (!result) {
      return;
    }

    if (result.category === "Pointing_Up" && result.handedness === "Left") {
      setTimeout(() => window.location.replace(window.location.origin), 4000);
    } else if (
      result.category === "Pointing_Up" &&
      result.handedness === "Right"
    ) {
      window.scrollBy(0, -300);
      setTimeout(() => setModelLoaded(false), 2000);
    } else if (
      result.category === "Closed_Fist" &&
      result.handedness == "Left"
    ) {
      window.scrollBy(0, 300);
      setTimeout(() => setModelLoaded(false), 2000);
    } else {
      setTimeout(handlerFunct, 4000);
    }
  }, [result]);

  return (
    <>
      {text && text != "" && <span>{text}</span>}
      <Camera
        gestureRecognizer={gestureRecognizer}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        resultSetter={resultSetter}
        availableOptions={[
          optionItem("Thumb_Up"),
          optionItem("Pointing_Up", "Left"),
          optionItem("Pointing_Up", "Right"),
          optionItem("Closed_Fist", "Left"),
        ]}
      />
      <div className={`${styles.instruction} ${instructionClassName}`}>
        <p>Put your thumb up 👍 (any) to continue</p>
        <p>Note: Keep the gesture for at least 5 seconds.</p>
      </div>
      <CustomModal
        title="Warning"
        body="Wait for the detection model to load."
        btnText=""
        show={showModalNotLoaded}
        onHide={() => setModalNotLoaded(false)}
      />
    </>
  );
};

export default NavBlock;

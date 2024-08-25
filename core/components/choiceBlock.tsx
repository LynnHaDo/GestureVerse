/** Components and constants */
import { C, Camera } from "core/components";
import { HandGesture } from "core/components/camera";
import { Gestures, Handedness } from "./constants/gesture";

/** Hooks */
import { useState, useEffect, useRef, useContext } from "react";
import { useDispatch } from "react-redux";
import { optionItemProps, Options, Variables } from "./constants/options";

/** Utils */
import { makeChoice } from "core/features/choice";
import {
  createGestureRecognizer,
  GestureRecognizerContext,
  reloadScreen,
} from "./chapter";

/** Styling */
import styles from "./ChoiceBlock.module.scss";
import { InlineListEN } from "./widgets/inline-list";
import { updateVariable } from "core/features/variable-manager";
import CustomModal from "./modal";
import React from "react";

export interface ChoiceBlockProps {
  /** Tag of the choice (used for the Choice component) */
  tag?: string;
  predictionType?: "gesture" | "handedness";
  /** List of available options */
  options?: { [key: string]: optionItemProps };
  widget?: (props: any) => JSX.Element;
  /** Whether the choice block has the purpose of navigating to a different chapter or setting a variable */
  purpose?: "navigation" | "variableSetter";
  className?: string;
  /** Whether to display the options after resolved */
  persist?: boolean;
  /** Classname of instruction */
  instructionClassName?: string;
}

/**
 * Represents a gesture-based choice component
 * @param tag tag of the choice
 * @param btnBackgroundColor background color of button used to trigger webcam
 * @param btnTextColor text color of button used to trigger webcam
 * @returns a choice block with camera
 */
const ChoiceBlock = ({
  tag = null,
  predictionType = null,
  options = null,
  widget = InlineListEN,
  purpose = "navigation",
  className = "",
  persist = false,
  instructionClassName = "",
}: ChoiceBlockProps): JSX.Element => {
  if (purpose == "variableSetter") {
    options = Variables[tag];
  }

  options = options ? options : Options[tag];

  if (!options) {
    return null;
  }

  const { gestureRecognizer, gestureRecognizerSetter } = useContext(
    GestureRecognizerContext
  );

  const optionKeys: string[] = Object.keys(options);
  const optionValues: Array<optionItemProps> = Object.values(options);

  const decision = useRef<HTMLParagraphElement>(null);

  /** Decision-making-related states/handlers */
  const dispatch = useDispatch<any>();
  const [result, resultSetter] = useState<HandGesture>(null); // save the state of the tag

  /** Warnings */
  let [showModalNotLoaded, setModalNotLoaded] = useState(false);

  let availableOptions =
    predictionType == "gesture"
      ? optionValues.filter((val) => !val.disabled).map((i) => i.action)
      : optionValues.filter((val) => !val.disabled).map((i) => i.handedness);

  useEffect(() => {
    if (result && result.category != "Pointing_Up") {
      // Get the answer
      let answer =
        predictionType == "gesture"
          ? optionKeys.find((k) => options[k].action == result.category)
          : optionKeys.find((k) => options[k].handedness == result.handedness);

      let answerText = options[answer].description;
      decision.current.textContent = `You chose ${answerText}.`;

      if (purpose == "navigation") {
        setTimeout(() => {
          dispatch(
            makeChoice(
              tag,
              answer,
              answer.toLowerCase().replaceAll(" ", ""),
              answer.toLowerCase().replaceAll(" ", "")
            )
          );
        }, 4000);
      }

      setTimeout(() => {
        dispatch(updateVariable(tag, answer));
        return null;
      }, 4000);
    } else if (result && result.category === "Pointing_Up") {
      setTimeout(() => window.location.replace(window.location.origin), 4000);
    }
  }, [result]);

  return (
    options && (
      <>
        <Camera
          gestureRecognizer={gestureRecognizer}
          canvasWidth={230}
          canvasHeight={130}
          resultSetter={resultSetter}
          availableOptions={[...availableOptions, "Pointing_Up"]}
        />
        {
          <C
            options={[optionKeys]}
            tag={tag}
            widget={widget}
            optionList={optionValues}
            type="string"
            className={`choiceContent ${className}`}
            persist={persist}
          />
        }

        <div className={`${styles.instruction} ${instructionClassName}`}>
          {optionKeys.map((key: string) => {
            return (
              <p
                key={key}
                className={options[key].disabled ? `${styles.crossOut}` : ""}
              >
                {predictionType == "gesture" ? (
                  <>
                    {Gestures[options[key].action]} for{" "}
                    <span className={styles.underline}>
                      {options[key].description}
                    </span>
                    .
                  </>
                ) : (
                  <>
                    {Handedness[options[key].handedness]} for{" "}
                    <span className={styles.underline}>
                      {options[key].description}
                    </span>
                    .
                  </>
                )}
              </p>
            );
          })}
          <p>Note: Keep the gesture for at least 5 seconds.</p>
          {<p ref={decision}></p>}
        </div>

        <CustomModal
          title="Warning"
          body="Wait for the detection model to load."
          btnText=""
          show={showModalNotLoaded}
          onHide={() => setModalNotLoaded(false)}
        />
      </>
    )
  );
};

export default ChoiceBlock;

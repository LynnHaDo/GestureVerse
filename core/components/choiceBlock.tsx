/** Components and constants */
import { C, Camera } from "core/components";
import { HandGesture } from "core/components/camera";
import { Gestures } from "core/components/constants/gesture";

/** Hooks */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useInventory from "core/hooks/use-inventory";
import { Options } from "./constants/options";

/** Utils */
import { makeChoice } from "core/features/choice";

/** Styling */
import styles from "./ChoiceBlock.module.scss";

export interface ChoiceBlockProps {
  /** Tag of the choice (used for the Choice component) */
  tag: string;
  /** Maximum number of hands detected */
  maxNumHands?: number;
  /** Background color of button used to trigger webcam */
  btnBackgroundColor?: string;
  /** Text color of button used to trigger webcam */
  btnTextColor?: string;
}

/**
 * Represents a gesture-based choice component
 * @param tag tag of the choice
 * @param btnBackgroundColor background color of button used to trigger webcam
 * @param btnTextColor text color of button used to trigger webcam
 * @returns a choice block with camera
 */
const ChoiceBlock = ({
  tag,
  maxNumHands = 1,
  btnBackgroundColor = "rgb(34, 33, 31)",
  btnTextColor = "rgb(250, 250, 250)",
}: ChoiceBlockProps): JSX.Element => {
  const options = Options[tag];
  const dispatch = useDispatch<any>();
  const [decision] = useInventory([tag]);
  const [result, resultSetter] = useState<HandGesture>(null); // save the state of the tag

  useEffect(() => {
    if (result) {
      // Get the description based on the category of the result
      let description = Gestures[result.category];
      // Get the answer
      let answer = Object.keys(Options[tag]).find(
        (k) => Options[tag][k] == description
      );
      dispatch(makeChoice(tag, answer, answer, answer))
    }
  }, [result]);

  return (
    options && (
      <>
        <p>
            <C options={[Object.keys(options)]} tag={tag} />
        </p>

        <div className={styles.instruction}>
          {Object.keys(options).map((key: any) => {
            return (
              <p key={key}>
                {options[key]} for <span className={styles.underline}>{key}</span>.
              </p>
            );
          })}
          <p>Note: Keep the posture for at least 5 seconds.</p>
        </div>

        {decision == undefined || decision == null ? (
          ""
        ) : (
          <p>You chose {decision}.</p>
        )}
        
        <Camera
          canvasWidth={300}
          canvasHeight={170}
          btnBackgroundColor={btnBackgroundColor}
          textColor={btnTextColor}
          numHands={maxNumHands}
          resultSetter={resultSetter}
        />
      </>
    )
  );
};

export default ChoiceBlock;

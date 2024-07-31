/** Components and constants */
import { C, Camera, Nav, R } from "core/components";
import { HandGesture } from "core/components/camera";
import { Gestures } from "./constants/gesture";

/** Hooks */
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import useInventory from "core/hooks/use-inventory";
import { useAppSelector } from "core/types";
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
  /** Additional config params for the list of options */
  extraConfig?: Record<string, unknown>;
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
  extraConfig = null,
}: ChoiceBlockProps): JSX.Element => {
  const options = Options[tag];
  const decision = useRef<HTMLParagraphElement>(null);

  /** Decision-making-related states/handlers */
  const dispatch = useDispatch<any>();
  const [result, resultSetter] = useState<HandGesture>(null); // save the state of the tag
  const [inventory] = useInventory([tag]);

  useEffect(() => {
    if (result) {
      // Get the answer
      let answer = Object.keys(options).find(
        (k) => options[k] == result.category
      );

      decision.current.textContent = `You chose ${answer}.`;

      setTimeout(() => {
        dispatch(
          makeChoice(
            tag,
            answer,
            answer.toLowerCase().replaceAll(" ", ""),
            answer.toLowerCase().replaceAll(" ", "")
          )
        );
      }, 5000);
    }
  }, [result]);

  return (
    options && (
      <>
        {inventory == null || inventory == undefined ? (
          <>
            <p>
              {extraConfig == null ? (
                <C options={[Object.keys(options)]} tag={tag} />
              ) : (
                <C
                  options={[Object.keys(options)]}
                  tag={tag}
                  extra={extraConfig}
                />
              )}
            </p>
            <div className={styles.instruction}>
              {Object.keys(options).map((key: string) => {
                return (
                  <p key={key}>
                    {Gestures[options[key]]} for{" "}
                    <span className={styles.underline}>{key}</span>.
                  </p>
                );
              })}
              <p>Note: Keep the posture for at least 5 seconds.</p>
              {<p ref={decision}></p>}
            </div>

            <Camera
              canvasWidth={230}
              canvasHeight={130}
              btnBackgroundColor={btnBackgroundColor}
              textColor={btnTextColor}
              numHands={maxNumHands}
              resultSetter={resultSetter}
              availableOptions={Object.values(options)}
            />
          </>
        ) : (
          <>
            {Object.keys(options).filter(k => k != inventory).map(k => {
                return <Nav text={k} next={k} tag={`returnFrom${tag}`}/>
            })}
          </>
        )}
      </>
    )
  );
};

export default ChoiceBlock;

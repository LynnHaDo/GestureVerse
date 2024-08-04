/** Components and constants */
import { C, Camera } from "core/components";
import { HandGesture } from "core/components/camera";
import { Gestures } from "./constants/gesture";

/** Hooks */
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { optionItemProps, Options } from "./constants/options";

/** Utils */
import { makeChoice } from "core/features/choice";

/** Styling */
import styles from "./ChoiceBlock.module.scss";
import { InlineListEN } from "./widgets/inline-list";

export interface ChoiceBlockProps {
  /** Tag of the choice (used for the Choice component) */
  tag: string;
  /** List of available options */
  options?: { [key: string]: optionItemProps; };
  /** Maximum number of hands detected */
  maxNumHands?: number;
  /** Background color of button used to trigger webcam */
  btnBackgroundColor?: string;
  /** Text color of button used to trigger webcam */
  btnTextColor?: string;
  widget?: (props: any) => JSX.Element;
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
  options = Options[tag],
  maxNumHands = 1,
  btnBackgroundColor = "rgb(34, 33, 31)",
  btnTextColor = "rgb(250, 250, 250)",
  widget = InlineListEN
}: ChoiceBlockProps): JSX.Element => {
  if (options == null || options == undefined) {
    return;
  }
  const optionKeys: string[] = Object.keys(options);
  const optionValues: Array<optionItemProps> = Object.values(options);

  const decision = useRef<HTMLParagraphElement>(null);

  /** Decision-making-related states/handlers */
  const dispatch = useDispatch<any>();
  const [result, resultSetter] = useState<HandGesture>(null); // save the state of the tag

  useEffect(() => {
    if (result) {
      // Get the answer
      let answer = optionKeys.find((k) => options[k].action == result.category);

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
      }, 4000);
    }
  }, [result]);

  return (
    options && (
      <>
        {widget == null ? (
          <C
            options={[optionKeys]}
            tag={tag}
            optionList={optionValues}
            type="string"
          />
        ) : (
          <C
            options={[optionKeys]}
            tag={tag}
            widget={widget}
            optionList={optionValues}
            type="string"
          />
        )}

        <div className={styles.instruction}>
          {optionKeys.map((key: string) => {
            return (
              <p key={key}>
                {Gestures[options[key].action]} for{" "}
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
          availableOptions={optionValues.map((i) => i.action)}
        />
      </>
    )
  );
};

export default ChoiceBlock;

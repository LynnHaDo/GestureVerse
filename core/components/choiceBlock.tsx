/** Components and constants */
import { C, Camera, Nav, R } from "core/components";
import { HandGesture } from "core/components/camera";
import { Gestures } from "./constants/gesture";

/** Hooks */
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import useInventory from "core/hooks/use-inventory";
import { optionItemProps, Options } from "./constants/options";

/** Utils */
import { makeChoice } from "core/features/choice";

/** Styling */
import styles from "./ChoiceBlock.module.scss";
import { InlineListEN } from "./widgets/inline-list";

export interface ChoiceBlockProps {
  /** Tag of the choice (used for the Choice component) */
  tag: string;
  /** Maximum number of hands detected */
  maxNumHands?: number;
  /** Background color of button used to trigger webcam */
  btnBackgroundColor?: string;
  /** Text color of button used to trigger webcam */
  btnTextColor?: string;
  widget?: (props: any) => JSX.Element;
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
  widget = InlineListEN,
  extraConfig = null,
}: ChoiceBlockProps): JSX.Element => {
  const options = Options[tag];
  const optionKeys: string[] = Object.keys(options);
  const optionValues: Array<optionItemProps> = Object.values(options);

  const decision = useRef<HTMLParagraphElement>(null);

  /** Decision-making-related states/handlers */
  const dispatch = useDispatch<any>();
  const [result, resultSetter] = useState<HandGesture>(null); // save the state of the tag
  const [inventory] = useInventory([tag]);

  let remainingOptions: any;

  if (inventory != null && inventory != undefined) {
    remainingOptions = Object.entries(options).filter(
      ([key, value], i) => key != inventory
    );
  }

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
        {inventory == null || inventory == undefined ? (
          <>
            {extraConfig == null && widget == null ? (
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
                extra={extraConfig}
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
        ) : (
          <>
            <C
              options={[optionKeys.filter((k) => k != inventory)]}
              tag={tag}
              optionList={optionValues.filter(
                (v) => v.action != options[inventory].action
              )}
              type="string"
              widget={widget}
            />
            <div className={styles.instruction}>
              {optionKeys
                .filter((k) => k != inventory)
                .map((key: string) => {
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
              availableOptions={optionValues
                .filter((v) => v.action != options[inventory].action)
                .map((i) => i.action)}
            />
          </>
        )}
      </>
    )
  );
};

export default ChoiceBlock;

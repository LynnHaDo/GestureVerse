import { C, R, Section, Chapter, Nav, Camera } from "core/components";
import useInventory from "core/hooks/use-inventory";
import { Next, PageType } from "core/types";
import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { HandGesture } from "core/components/camera";
import { makeChoice } from "core/features/choice";
import { Gestures } from "core/components/constants/gesture";
import FadeIn from "core/components/ui/fadein";
import ChoiceBlock from "core/components/choiceBlock";
import { Options } from "core/components/constants/options";

export const Page: PageType = () => {
  const [leftOrRight] = useInventory(["leftOrRight"]);
  const dispatch = useDispatch<any>();
  const [result, resultSetter] = useState<HandGesture>(null);

  useEffect(() => {
    if (result) {
      let answer = result.category == "Thumb_Up"? "left" : "right";
      dispatch(makeChoice("leftOrRight", answer));
    }
  }, [result]);

  return (
    <Chapter filename="choice">
      <Section>
        <div className="row">
          <div className="col-lg-6">
            <ChoiceBlock tag="leftOrRight" />

            <Camera
              canvasWidth={480}
              canvasHeight={360}
              btnBackgroundColor="rgb(34, 33, 31)"
              textColor="rgb(250, 250, 250)"
              numHands={1}
              resultSetter={resultSetter}
            />
            {leftOrRight == undefined || leftOrRight == null ? (
              ""
            ) : (
              <p>You chose {leftOrRight}</p>
            )}
          </div>
          <div className="col-lg-6">
            <FadeIn
              children={<img src="/stories/my-story/images/02.png" />}
            ></FadeIn>
          </div>
        </div>
      </Section>
    </Chapter>
  );
};

import { C, R, Section, Chapter, Nav, Camera } from "core/components";
import useInventory from "core/hooks/use-inventory";
import { Next, PageType } from "core/types";
import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { HandGesture } from "core/components/camera";
import { makeChoice } from "core/features/choice";
import { Gestures } from "core/components/constants/gesture";

export const Page: PageType = () => {
  const [drink] = useInventory(["drink"]);
  const dispatch = useDispatch<any>();
  const [result, resultSetter] = useState<HandGesture>(null);

  useEffect(() => {
    if (result) {
      let answer: string;
      switch (result.category) {
        case Gestures[5]:
            answer = "coffee"
            break;
        case Gestures[4]:
            answer = "green tea"
            break;
        case Gestures[3]:
            answer = "matcha latte"
      }
      dispatch(makeChoice("drink", answer));
    }
  }, [result]);

  return (
    <Chapter filename="choice">
      <Section>
        <h1>Chapter 2</h1>

        <div className="row">
          <div className="col-lg-6">
            In a coffee shop, you chose to order a{" "}
            <C
              options={[["matcha latte", "coffee", "green tea"]]}
              tag="drink"
            />
            <p></p>
            <p>Point upwards for matcha latte</p>
            <p>Thumbs up for coffee</p>
            <p>Thumbs down for green tea</p>
            <p>Keep the posture for at least 5 seconds</p>
            {drink == undefined || drink == null ? (
              ""
            ) : (
              <p>You chose {drink}</p>
            )}
          </div>
          <div className="col-lg-6">
            <Camera
              canvasWidth={480}
              canvasHeight={360}
              btnBackgroundColor="rgb(34, 33, 31)"
              textColor="rgb(250, 250, 250)"
              numHands={1}
              resultSetter={resultSetter}
            />
          </div>
        </div>
      </Section>
    </Chapter>
  );
};

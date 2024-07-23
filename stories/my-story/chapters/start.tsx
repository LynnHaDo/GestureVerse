import { C, R, Section, Chapter, Nav, Camera } from "core/components";
import useInventory from "core/hooks/use-inventory";
import { Next, PageType } from "core/types";
import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { HandGesture } from "core/components/camera";
import { makeChoice } from "core/features/choice";
import FadeIn from "core/components/ui/fadein";

export const Page: PageType = () => {
  const [walk] = useInventory(["walk"]);

  useEffect(() => {});

  return (
    <Chapter filename="start">
      <Section>
        <div className="row">
          <p>
            It is a lovely day to go for a {" "}
            <Nav text="walk" next="choice" tag="walk" persist={false} />
          </p>
          <FadeIn
            children={<img src="/stories/my-story/images/01.png" />}
          ></FadeIn>
        </div>
      </Section>
    </Chapter>
  );
};

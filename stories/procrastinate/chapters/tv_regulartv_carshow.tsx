import { Section, Chapter, Nav } from "core/components";
import { PageType, useAppDispatch } from "core/types";

import { useEffect } from "react";

import { incrementScore } from "core/features/score";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(incrementScore());
  }, []);
  
  return (
    <>
      <Chapter filename="tv_regulartv_carshow">
        <Section>
          <p>
            I like watching these. I get so much satisfaction from seeing a
            rusty old car turn into something amazing. I wish I could get a
            project car. This episode they are restoring a 1970 Datsun 240Z, and
            are rebuilding the original L24 motor and upgrading it to a triple
            carb set up. Nice.
          </p>

          <p>
            What should I do{" "}
            <Nav text="next" next="menu" tag="moveFromCarShow" />
            {"?"}
          </p>
        </Section>
      </Chapter>
    </>
  );
};

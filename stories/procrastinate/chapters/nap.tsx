import {
  Section,
  Chapter,
  Nav
} from "core/components";

import { PageType, useAppDispatch } from "core/types";
import { useEffect } from "react";

import { incrementScore } from "core/features/score";

export const Page: PageType = () => {
    const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(incrementScore())
  }, [])
  return (
    <>
        <Chapter filename="nap">
          <Section>
          <p>
            nap{"  "} <Nav text="back" tag = "napFromMenu" next="menu"/>
              
            </p>
          </Section>
        </Chapter>
      
    </>
  );
};

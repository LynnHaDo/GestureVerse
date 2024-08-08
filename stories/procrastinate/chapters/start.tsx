import { Section, Chapter, Nav } from "core/components";
import { updateVariable } from "core/features/variable-manager";
import { PageType, useAppDispatch } from "core/types";
import { useEffect } from "react";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const actions: Array<string> = [
      "tv",
      "game",
      "eat",
      "nap",
      "clean",
      "freezer",
      "chili",
      "doordash",
    ];
    /** Init the states to be false */
    for (var action of actions) {
      dispatch(updateVariable(action, false));
    }
  }, [dispatch]);

  return (
    <>
      <Chapter filename="start">
        <Section>
          <p>
            I've had a very long day at school. None of my classes were
            interesting and I just wasted 7 hours of my day sitting and staring
            at a wall. I have some homework but I don't remember when it's due.
            Oh well. Now's the time to{"  "}
            <Nav text="relax" next="menu" tag="startProcrastinate" />.
          </p>
        </Section>
      </Chapter>
    </>
  );
};

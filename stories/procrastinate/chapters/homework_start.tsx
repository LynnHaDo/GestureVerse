import { Section, Chapter, Nav } from "core/components";
import { PageType, useAppDispatch } from "core/types";
import FadeIn from "core/components/ui/fadein";

import { animated } from "@react-spring/web";

import colors from "public/themeColors.module.scss";
import { useVariable } from "core/hooks/use-variable";
import useChapter from "core/hooks/use-chapter";
import { useEffect } from "react";
import { updateVariable } from "core/features/variable-manager";
import { choiceBlock, makeChoice } from "core/features/choice";
import { BulletedList } from "core/components/widgets";

export const Page: PageType = () => {
  /** Current chapter */
  const chapter = useChapter();
  /** App dispatch */
  const dispatch = useAppDispatch();

  /** Number of minutes left */
  let counterMins: number = useVariable("counterMins");
  let counterStarted: boolean = useVariable("counterStarted");

  let displayWrapper: JSX.Element = (
    <>
      <p>{counterMins} minutes left...</p>
    </>
  );

  setTimeout(() => {
    counterMins--;
    dispatch(updateVariable('counterMins', counterMins))
  }, 1000 * 60);

  if (counterMins <= 0 && counterStarted) {
    dispatch(makeChoice("timeOut", 'fail', "homework_start_again", "homework_start_again"));
  }

  useEffect(() => {
    console.log(counterMins)
  }, [counterMins]);

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        {displayWrapper}

      </Section>
    </Chapter>
  );
};

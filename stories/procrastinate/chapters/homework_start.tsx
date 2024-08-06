import { Section, Chapter, Nav } from "core/components";
import { PageType, useAppDispatch } from "core/types";
import FadeIn from "core/components/ui/fadein";

import { animated } from "@react-spring/web";

import colors from "public/themeColors.module.scss";
import { useVariable } from "core/hooks/use-variable";
import useChapter from "core/hooks/use-chapter";
import { useEffect } from "react";
import { updateVariable } from "core/features/variable-manager";
import { choiceBlock } from "core/features/choice";
import { BulletedList } from "core/components/widgets";

export const Page: PageType = () => {
  /** Current chapter */
  const chapter = useChapter();
  /** App dispatch */
  const dispatch = useAppDispatch();

  const tag = "procrastinate__homework_fail";

  /** Number of minutes left */
  let counterMins: number = useVariable("counterMins");
  let counterStarted: boolean = useVariable("counterStarted");

  let displayWrapper: JSX.Element = (
    <>
      <p>{counterMins} minutes left...</p>
    </>
  );

  if (counterMins == 0 && counterStarted) {
    return (
      <Chapter filename={chapter.filename}>
        <p>Oh gosh the deadline passed already??</p>
        <p>There is a grace period I think. Should I just give up or continue grinding?</p>
        {choiceBlock(
          tag,
          "gesture",
          1,
          `${colors.orange}`,
          `${colors.vanilla}`,
          BulletedList,
          null,
          true
        )}
      </Chapter>
    );
  }

  useEffect(() => {
    setTimeout(() => counterMins--, 1000 * 60);
    dispatch(updateVariable("counterMins", counterMins));
  }, [counterMins]);

  return (
    <Chapter filename={chapter.filename}>
      <Section>{displayWrapper}</Section>
    </Chapter>
  );
};

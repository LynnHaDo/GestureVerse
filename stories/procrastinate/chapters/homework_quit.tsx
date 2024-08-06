import { Section, Chapter, Nav, TextBlock } from "core/components";
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
import ResetButton from "core/components/ui/reset-button";
import End from "core/components/end";

export const Page: PageType = () => {
  /** Current chapter */
  const chapter = useChapter();
  /** App dispatch */
  const dispatch = useAppDispatch();

  const tag = "procrastinate__homework_fail";

  /** Deadline previously set */
  const deadline: Date = useVariable("deadline");
  /** Number of minutes left */
  let counterMins: number = useVariable("counterMins");
  let counterStarted: boolean = useVariable("counterStarted");

  

  useEffect(() => {
    dispatch(updateVariable('counterStarted', false));
  });

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <p>
          I give up. I'm just gonna skip it. I just can't do it. I need to
          relax...
        </p>

        <End
          storyName="procrastinate"
          sources={[
            "j-mo (2024). Procrastinate. [online] itch.io. Available at: https://j-mo.itch.io/procrastinate [Accessed 6 Aug. 2024].",
          ]}
          additionalButtonStyle={{
            backgroundColor: `${colors.orange}`,
            color: `${colors.white}`,
          }}
        />
      </Section>
    </Chapter>
  );
};

import { Section, Chapter } from "core/components";
import { PageType, useAppDispatch } from "core/types";

import colors from "public/themeColors.module.scss";
import useChapter from "core/hooks/use-chapter";
import { useEffect } from "react";
import { updateVariable } from "core/features/variable-manager";
import End from "core/components/end";

export const Page: PageType = () => {
  /** Current chapter */
  const chapter = useChapter();
  /** App dispatch */
  const dispatch = useAppDispatch();

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
            border: `1px solid ${colors.dark}`
          }}
        />
      </Section>
    </Chapter>
  );
};

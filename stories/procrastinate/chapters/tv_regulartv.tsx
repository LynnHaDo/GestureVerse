import { Section, Chapter } from "core/components";
import { BulletedList } from "core/components/widgets";
import { choiceBlock } from "core/features/choice";
import { PageType } from "core/types";

import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  const tag = "procrastinate__tv_regulartv";
  return (
    <>
      <Chapter filename="tv_regulartv">
        <Section>
          <p>
            I flip aimlessly through channels, and settle on a car restoration
            show. It was either that or reruns of Pawn Stars.
          </p>

          <p>Hmm... which one?</p>

          {choiceBlock(
            tag,
            "handedness",
            1,
            `${colors.midBlue}`,
            `${colors.white}`,
            BulletedList
          )}
        </Section>
      </Chapter>
    </>
  );
};

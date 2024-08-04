import {
  Section,
  Chapter,
  Nav
} from "core/components";
import { BulletedList } from "core/components/widgets";
import { choiceBlock } from "core/features/choice";
import { PageType } from "core/types";
import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  const tag = "procrastinate__clean";

  return (
    <Chapter filename="clean">
      <Section>
        <p>
          I never do this, but with desperate times come desperate measures. My
          room is only slightly messy, but now, when I happen to have homework
          that needs to get done, I have decided this is the perfect time to
          clean.
        </p>
        {choiceBlock(
          tag,
          "gesture",
          2,
          `${colors.lightBlue}`,
          `${colors.white}`,
          BulletedList,
          //<Nav text="Start cleaning..." tag="moveFromCleanStarttoClean" next="clean_start"/>
        )}
      </Section>
    </Chapter>
  );
};

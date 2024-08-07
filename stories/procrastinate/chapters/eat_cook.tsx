import { Section, Chapter, Nav } from "core/components";
import { PageType } from "core/types";

import { choiceBlock } from "core/features/choice";

import colors from "public/themeColors.module.scss";
import { BulletedList } from "core/components/widgets";

export const Page: PageType = () => {
  const tag = "procrastinate__eat_cook";

  return (
    <>
      <Chapter filename="eat_cook">
        <Section>
          <p>
            I'm not sure what to cook. Where should I look for something tasty:{" "}
          </p>
          {choiceBlock(
              tag,
              "handedness",
              1,
              `${colors.blue}`,
              `${colors.white}`,
              BulletedList
            )}
        </Section>
      </Chapter>
    </>
  );
};

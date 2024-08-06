import { Section, Chapter, Nav } from "core/components";
import { PageType } from "core/types";

import { choiceBlock } from "core/features/choice";

import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  const tag = "procrastinate__eat_cook";

  return (
    <>
      <Chapter filename="eat_cook">
        <Section>
          <p>
            I'm not sure what to cook. Where should I look for something tasty:{" "}
            {choiceBlock(
              tag,
              "handedness",
              1,
              `${colors.lightBlue}`,
              `${colors.white}`
            )}
          </p>
        </Section>
      </Chapter>
    </>
  );
};

import { Section, Chapter } from "core/components";
import { PageType } from "core/types";

import { choiceBlock } from "core/features/choice";

import colors from "public/themeColors.module.scss";
import { BulletedList } from "core/components/widgets";

export const Page: PageType = () => {
  const tag = "procrastinate__eat_buy";

  return (
    <>
      <Chapter filename="eat_buy">
        <Section>
          <p>
            There are a couple restaurants available for shipping on Doordash,
            or I could drive a little farther and go get a deli sandwich from my
            favorite place. But choosing is so hard. I want instant
            gratification but am too lazy to drive or cook. Life is hard.
          </p>
          {choiceBlock(
            tag,
            "handedness",
            1,
            `${colors.lightBlue}`,
            `${colors.white}`,
            BulletedList
          )}
        </Section>
      </Chapter>
    </>
  );
};

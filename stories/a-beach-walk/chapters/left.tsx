import {
  Section,
  Chapter,
  Nav,
  BackgroundFill,
  TextBlock,
  Artwork,
  ChoiceBlock,
} from "core/components";
import { PageType } from "core/types";

import { choiceBlock } from "core/features/choice";

/** Style */
import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  let tag = "left";

  return (
    <>
      <BackgroundFill color={colors.blue} />
      <Artwork
        link="/stories/a-beach-walk/images/02_left.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="Two-way path, Digital art, 600x400 pixel"
        height="300px"
        position={{
          left: "49%",
          top: "11vh",
          transform: "translate(-50%, 0)",
          backgroundColor: `${colors.white}`,
        }}
      />
      <TextBlock
        position="bottom_middle"
        additionalStyle={{
          padding: 0,
        }}
      >
        <Chapter filename="left">
          <Section>
            {
                choiceBlock(tag, 'gesture', 1, 'transparent')
            }
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

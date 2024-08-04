import {
  Section,
  Chapter,
  ChoiceBlock,
  BackgroundFill,
  TextBlock,
  Artwork,
} from "core/components";
import { PageType } from "core/types";

import colors from "public/themeColors.module.scss";

import { choiceBlock } from "core/features/choice";

export const Page: PageType = () => {
  const tag = "leftOrRight";

  return (
    <>
      <BackgroundFill color={colors.orange} />
      <Artwork
        link="/stories/a-beach-walk/images/02.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="Left or right, Digital art, 600x400 pixel"
        height="300px"
        position={{
            left: "49%",
            top: "11vh",
            transform: "translate(-50%, 0)",
            backgroundColor: `${colors.white}`,
        }}
      />
      <TextBlock position="bottom_middle"
        additionalStyle={{
          padding: 0,
        }}>
        <Chapter filename="choice">
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

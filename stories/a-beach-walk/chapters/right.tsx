import {
  Section,
  Chapter,
  BackgroundFill,
  TextBlock,
  Artwork,
  ChoiceBlock,
} from "core/components";
import { PageType } from "core/types";
import colors from "public/themeColors.module.scss";
import { choiceBlock } from "core/features/choice";
import { InlineListEN } from "core/components/widgets/inline-list";

export const Page: PageType = () => {
  const tag = "right";
  return (
    <>
      <BackgroundFill color={colors.darkYellow} />
      <Artwork
        link="/stories/a-beach-walk/images/02_right.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="Beach footpath with flowers on the sides, Digital art, 600x400 pixel"
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
          padding: 0
        }}
      >
        <Chapter filename="right">
          <Section>
            {
                choiceBlock(tag, 'gesture', 1, 'transparent', `${colors.white}`, InlineListEN, null, false)
            }
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

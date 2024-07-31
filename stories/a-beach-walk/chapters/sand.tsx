import {
  Section,
  Chapter,
  Nav,
  TextBlock,
  BackgroundFill,
  Artwork,
} from "core/components";
import { PageType } from "core/types";
import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  return (
    <>
      <BackgroundFill color={colors.vanilla} />
      <Artwork
        link="/stories/a-beach-walk/images/02_left_sand.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="Sandy path, Digital art, 600x400 pixel"
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
        textAlign="center"
        additionalStyle={{
          padding: 0,
          color: `${colors.dark}`,
        }}
      >
        <Chapter filename="sand">
          <Section>
            <p>
              Walk past the{"  "}
              <Nav text="kelp" next="kelp" tag="kelp" textColor={colors.dark} />
              .
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

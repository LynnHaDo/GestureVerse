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
      <BackgroundFill color={colors.retroGreen} />
      <Artwork
        link="/stories/a-beach-walk/images/01.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="Road with yellow flowers on 2 sides, Digital art, 600x400 pixel"
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
        }}
      >
        <Chapter filename="start">
          <Section>
            <p>
              It is a lovely day to go for a{"  "}
              <Nav text="walk" next="choice" tag="walk" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

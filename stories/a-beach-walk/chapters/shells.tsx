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
      <BackgroundFill color={colors.lightOrange} />
      <Artwork
        link="/stories/a-beach-walk/images/02_right_shells.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="Entrance to the cave, Digital art, 600x400 pixel"
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
        <Chapter filename="shells">
          <Section>
            <p>
              Walk past the{"  "}
              <Nav text="shells" next="cave" tag="shells" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

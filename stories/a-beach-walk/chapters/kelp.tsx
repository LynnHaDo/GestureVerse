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
      <BackgroundFill color={colors.darkYellow} />
      <Artwork
        link="/stories/a-beach-walk/images/02_left_kelp.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="Rocky pathway along the beach, Digital art, 600x400 pixel"
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
        <Chapter filename="kelp">
          <Section>
            <p>
              Climb down the rocks and enter the{"  "}
              <Nav text="cave" next="cave" tag="cave" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

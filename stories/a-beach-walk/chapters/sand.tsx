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
        name="Stairs"
        width="300px" height="300px"
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
          width: "300px",
          padding: 0,
          left: "49%",
          bottom: "calc(16vh)",
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

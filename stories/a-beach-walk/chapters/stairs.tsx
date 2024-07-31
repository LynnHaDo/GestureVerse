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
      <BackgroundFill color={colors.brown} />
      <Artwork
        link="/stories/a-beach-walk/images/02_left_stairs.png"
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
        }}
      >
        <Chapter filename="stairs">
          <Section>
            <p>
              Walk into the{"  "}
              <Nav text="sand" next="sand" tag="back" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

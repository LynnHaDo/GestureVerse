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
      <BackgroundFill color={colors.red} />
      <Artwork
        link="/stories/a-beach-walk/images/02_left_lighthouse.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="Lighthouse light, Digital art, 600x400 pixel"
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
          width: '460px'
        }}
      >
        <Chapter filename="lighthouse">
          <Section>
            <p>
              The lighthouse is old and the lantern is taller than you are. You
              watch the light glint off the glass for a while before making your
              way
              {"  "}
              <Nav text="back" next="left" tag="back" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

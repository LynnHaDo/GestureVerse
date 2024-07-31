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
      <BackgroundFill color={colors.lightYellow} />
      <Artwork
        link="/stories/a-beach-walk/images/02_right_fence.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="Flowers growing on coastal rocks, Digital art, 600x400 pixel"
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
          width: '460px',
          color: `${colors.dark}`
        }}
      >
        <Chapter filename="fence">
          <Section>
            <p>
              You duck through the fence and sit on the shrubbery. You watch the
              waves for a while and enjoy the sweet-smelling flowers before
              climbing back up to the{"  "}
              <Nav text="path" next="right" tag="path" textColor={colors.dark}/>.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

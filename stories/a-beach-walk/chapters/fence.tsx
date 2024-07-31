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
        link="/stories/a-beach-walk/images/02_right_fence.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="Start"
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
        <Chapter filename="fence">
          <Section>
            <p>
              You duck through the fence and sit on the shrubbery. You watch the
              waves for a while and enjoy the sweet-smelling flowers before
              climbing back up to the{"  "}
              <Nav text="path" next="right" tag="path" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

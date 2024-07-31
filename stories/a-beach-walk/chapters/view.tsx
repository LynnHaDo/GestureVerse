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
      <BackgroundFill color={colors.midBlue} />
      <Artwork
        link="/stories/a-beach-walk/images/04_view.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="View of the beach from the top, Digital art, 600x400 pixel"
        height="300px"
        position={{
          left: "49%",
          top: "11vh",
          transform: "translate(-50%, 0)",
          backgroundColor: `${colors.white}`
        }}
      />
      <TextBlock
        position="bottom_middle"
        textAlign="center"
        additionalStyle={{
          padding: 0,
        }}
      >
        <Chapter filename="view">
          <Section>
            <p>
              After a long walk, it’s nice to just sit and{"  "}
              <Nav text="rest" next="rest" tag="rest" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

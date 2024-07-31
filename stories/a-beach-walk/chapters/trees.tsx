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
        link="/stories/a-beach-walk/images/02_right_trees.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="Trees"
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
        <Chapter filename="trees">
          <Section>
            <p>
              Going through the tree bushes, you see the{"  "}
              <Nav text="coastline" next="shells" tag="coastline" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

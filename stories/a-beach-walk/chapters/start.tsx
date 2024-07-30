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
        name="Start"
        width="400px"
        position={{
          left: "49%",
          top: "11vh",
          transform: "translate(-50%, 0)",
          backgroundColor: `${colors.white}`,
        }}
      />
      <TextBlock position="bottom_middle" 
                textAlign="center"
                additionalStyle={{
                    width: "400px",
                    padding: 0,
                    left: "49%",
                    bottom: "calc(16vh)",
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

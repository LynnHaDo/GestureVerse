import {
  Section,
  Chapter,
  Nav,
  TextBlock,
  BackgroundFill,
  Artwork,
} from "core/components";
import { PageType } from "core/types";
import colors from 'public/themeColors.module.scss';

export const Page: PageType = () => {
  return (
    <>
      <BackgroundFill color={colors.retroGreen} />
      <Artwork
              link="/stories/a-beach-walk/images/03_cave.png"
              source="https://interstellar-bird.itch.io/beach-walk"
              name="Stairs"
              width="300px"
              height="300px"
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
                    width: "300px",
                    padding: 0,
                    left: "49%",
                    bottom: "calc(16vh)",
                  }}>
        <Chapter filename="cave">
          <Section>
            <p>
            What a beautiful
            {"  "}
              <Nav text="view" next="view" tag="view" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

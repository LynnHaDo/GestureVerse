import {
  Section,
  Chapter,
  Nav,
  TextBlock,
  BackgroundFill,
  Artwork,
} from "core/components";
import { PageType } from "core/types";

export const Page: PageType = () => {
  return (
    <>
      <BackgroundFill color="rgb(27, 93, 56)" />
      <Artwork
              link="/stories/my-story/images/Buttermilk.jpg"
              source="https://leeariel.com/landscapes-2020"
              name="Buttermilk and Bitterbush, Gouache on paper, 2020, 8x8 in"
              width="100%"
              height="500px"
              position={{
                top: '1vh'
              }}
            />
      <TextBlock position="bottom_middle" textAlign="center">
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

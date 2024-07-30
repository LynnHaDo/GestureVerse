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
              link="/stories/a-beach-walk/images/02_right_further.png"
              source="https://leeariel.com/landscapes-2020"
              name="Buttermilk and Bitterbush, Gouache on paper, 2020, 8x8 in"
              width="500px"
              height="500px"
              position={{
                top: '1vh',
                left: "50%",
                transform: "translate(-50%, 0)"
              }}
            />
      <TextBlock position="bottom_middle" textAlign="center">
        <Chapter filename="further">
          <Section>
            
            <p>
            Walk through the {"  "}
              <Nav text="trees" next="trees" tag="trees" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

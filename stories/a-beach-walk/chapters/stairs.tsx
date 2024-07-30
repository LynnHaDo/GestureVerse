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
      <BackgroundFill color={colors.brown} />
      <Artwork
              link="/stories/a-beach-walk/images/02_left_stairs.png"
              source="https://leeariel.com/landscapes-2020"
              name="Joshua Tree Sunshine, Gouache on paper, 2020, 11x10 in"
              width="700px"
              position={{
                bottom: '1vh',
                right: "0",
              }}
            />
      <TextBlock>
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

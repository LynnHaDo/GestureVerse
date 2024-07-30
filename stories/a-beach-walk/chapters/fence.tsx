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
              link="/stories/a-beach-walk/images/02_right_fence.png"
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
        <Chapter filename="fence">
          <Section>
            
            <p>
            you duck through the fence and sit on the shrubbery. you watch the waves for a while and enjoy the sweet-smelling flowers before climbing back up to the{"  "}
              <Nav text="path" next="right" tag="path" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

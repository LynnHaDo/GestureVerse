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
              link="/stories/a-beach-walk/images/02_left_kelp.png"
              source="https://leeariel.com/landscapes-2020"
              name="Buttermilk and Bitterbush, Gouache on paper, 2020, 8x8 in"
              width="520px"
              position={{
                top: '1vh',
                left: "50%",
                transform: "translate(-50%, 0)"
              }}
            />
      <TextBlock position="bottom_middle" textAlign="center">
        <Chapter filename="kelp">
          <Section>
            
            <p>
            Climb down the rocks and enter the{"  "}
              <Nav text="cave" next="cave" tag="cave" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

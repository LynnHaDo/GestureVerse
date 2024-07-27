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
      <BackgroundFill color={colors.red} />
      <Artwork
              link="/stories/my-story/images/02_left_fin_dome.jpg"
              source="https://leeariel.com/landscapes-2020"
              name="Fin Dome, Gouache on paper, 2020, 22x15 in"
              width="550px"
              height="375px"
              position={{
                top: '1vh',
                left: "0"
              }}
            />
      <TextBlock position="upper_right" textAlign="right">
        <Chapter filename="findome">
          <Section>
            
            <p>
            Fin Dome is an 11,673-foot-elevation granite summit located 1.5 mile west of the crest of the Sierra Nevada mountain range, 
            in the southeast corner of Fresno County, in northern California. 
            You watch for a while before heading {"  "}
              <Nav text="back" next="left" tag="back" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

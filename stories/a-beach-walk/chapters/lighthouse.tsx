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
              link="/stories/a-beach-walk/images/02_left_lighthouse.png"
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
        <Chapter filename="lighthouse">
          <Section>
            
            <p>
            The lighthouse is old and the lantern is taller than you are. You watch the light glint off the glass for a while before making your way 
            {"  "}
              <Nav text="back" next="left" tag="back" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

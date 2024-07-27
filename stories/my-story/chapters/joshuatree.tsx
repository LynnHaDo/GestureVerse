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
              link="/stories/my-story/images/02_left_joshua_tree.jpg"
              source="https://leeariel.com/landscapes-2020"
              name="Joshua Tree Sunshine, Gouache on paper, 2020, 11x10 in"
              width="330px"
              height="300px"
              position={{
                bottom: '1vh',
                right: "0",
              }}
            />
      <TextBlock>
        <Chapter filename="joshuatree">
          <Section>
            
            <p>
            Joshua Tree National Park is a vast protected area in southern California. It's characterized by rugged rock formations and stark desert landscapes. Named for the region’s twisted, bristled Joshua trees, the park straddles the cactus-dotted Colorado Desert and the Mojave Desert, which is higher and cooler. Keys View looks out over the Coachella Valley. 
            Hiking trails weave through the boulders of Hidden Valley. {"  "}
              <Nav text="back" next="left" tag="back" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

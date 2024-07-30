import { Section, Chapter, ChoiceBlock, BackgroundFill, TextBlock, Artwork } from "core/components";
import { PageType } from "core/types";

import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  const tag = "leftOrRight";

  return (
    <>
    <BackgroundFill color={colors.orange} />
    <Artwork 
        link="/stories/my-story/images/02.jpg"
        source="https://leeariel.com/landscapes-2020"
        name="Wonderland III, Gouache on paper, 2020, 22x22 in"
        width="500px"
        height="500px"
        position={{
            top: '1vh',
            left: '0'
        }}/>
    <TextBlock textAlign="right" position="bottom_right">
        <Chapter filename="choice">
        <Section>
            <div className="row">
                {/* <ChoiceBlock tag={tag} 
                             btnBackgroundColor="transparent"
                             /> 
                */}
            </div>
        </Section>
        </Chapter>
    </TextBlock>
   </>
  );
};

import { Section, Chapter, Nav, BackgroundFill, TextBlock, Artwork, ChoiceBlock } from "core/components";
import { PageType } from "core/types";

import colors from 'public/themeColors.module.scss';

export const Page: PageType = () => {
  const tag = "left";

  return (
    <>
        <BackgroundFill color={colors.blue}/>
        <Artwork 
            link="/stories/my-story/images/02_left.jpg"
            source="https://leeariel.com/landscapes-2020"
            name="Canyonlands II, Gouache on paper, 2020, 14x14 in"
            width="500px"
            height="500px"
            position={{
                bottom: '1vh',
                right: '0'
            }}/>
        <TextBlock position="upper_left">
            <Chapter filename="left">
                <Section>
                    <div className = "row">

                        {/*<ChoiceBlock tag={tag} 
                                    btnBackgroundColor="transparent"
                                    extraConfig={{prefix: "Go see", suffix: "?"}}/>
                        */}
                    </div>                    
                </Section>
            </Chapter>
        </TextBlock>
    </>
  );
};

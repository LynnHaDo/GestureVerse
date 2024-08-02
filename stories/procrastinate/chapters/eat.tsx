import { Section, Chapter, Nav, BackgroundFill, TextBlock, Artwork, ChoiceBlock } from "core/components";
import { PageType } from "core/types";

import colors from 'public/themeColors.module.scss';

export const Page: PageType = () => {
  const tag = "left";

  return (
    <>
        <BackgroundFill color={colors.blue}/>
        
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

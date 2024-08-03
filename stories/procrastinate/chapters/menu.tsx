import { Section, Chapter, ChoiceBlock, BackgroundFill, TextBlock, Artwork } from "core/components";
import { BulletedList } from "core/components/widgets";
import { PageType } from "core/types";

import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  const tag = "menuPro";

  return (
    <>    
    
        <Chapter filename="menu">
        <Section>
            <p>What should I do now?</p>

                <ChoiceBlock tag={tag} 
                             btnBackgroundColor="transparent"
                             /> 
            
        </Section>
        </Chapter>
   </>
  );
};

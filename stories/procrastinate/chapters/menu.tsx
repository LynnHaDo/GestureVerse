import { Section, Chapter, ChoiceBlock, BackgroundFill, TextBlock, Artwork } from "core/components";
import { PageType } from "core/types";

import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  const tag = "leftOrRight";

  return (
    <>    
    
        <Chapter filename="menu">
        <Section>
            <div className="row">
                {/* <ChoiceBlock tag={tag} 
                             btnBackgroundColor="transparent"
                             /> 
                */}
            </div>
        </Section>
        </Chapter>
   </>
  );
};

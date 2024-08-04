import { Section, Chapter, Nav, BackgroundFill, TextBlock, Artwork, ChoiceBlock } from "core/components";
import { PageType } from "core/types";

import colors from 'public/themeColors.module.scss';

export const Page: PageType = () => {
  const tag = "left";

  return (
    <>
        
            <Chapter filename="eat">
                <Section>
                    <div className = "row">

                    eat {" "}<Nav text="back" tag = "eatFromMenu" next="menu"/>
                    </div>                    
                </Section>
            </Chapter>
        
    </>
  );
};

import { Section, Chapter, BackgroundFill, TextBlock, Artwork, ChoiceBlock } from "core/components";
import { PageType } from "core/types";
import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  const tag = "right";
  return (
    <>
        
            <Chapter filename="clean">
            <Section>
                    <div className = "row">
                        {/* <ChoiceBlock tag={tag} 
                                    btnBackgroundColor="transparent"
                                    extraConfig={{prefix: "Go see", suffix: "?"}}/> */}
                    </div>                    
                </Section>
            </Chapter>
    </>
  );
};

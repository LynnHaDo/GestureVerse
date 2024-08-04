import { Section, Chapter, BackgroundFill, TextBlock, Artwork, ChoiceBlock, Nav } from "core/components";
import { PageType } from "core/types";
import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  const tag = "right";
  return (
    <>
        
            <Chapter filename="clean">
            <Section>
                    <div className = "row">
                        clean {" "}<Nav text="back" tag = "cleanFromMenu" next="menu"/>
                    </div>                    
                </Section>
            </Chapter>
    </>
  );
};

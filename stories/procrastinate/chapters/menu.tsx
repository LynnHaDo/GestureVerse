import { Section, Chapter, ChoiceBlock, BackgroundFill, TextBlock, Artwork } from "core/components";
import { BulletedList } from "core/components/widgets";
import { PageType } from "core/types";

import { choiceBlock } from "core/features/choice";

import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  const tag = "menuPro";

  return (
    <>    
        <Chapter filename="menu">
        <Section>
            <p>What should I do now?</p>
                {
                    choiceBlock(tag, 1, `${colors.orange}`, `${colors.lightYellow}`, BulletedList)
                }
        </Section>
        </Chapter>
   </>
  );
};

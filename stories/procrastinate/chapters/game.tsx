import {
  Section,
  Chapter,
  Nav
} from "core/components";
import { choiceBlock } from "core/features/choice";
import colors from 'public/themeColors.module.scss'
import { PageType } from "core/types";
import { BulletedList } from "core/components/widgets";

export const Page: PageType = () => {
  const tag = "procrastinate__games"
  return (
    <>
        <Chapter filename="game">
          <Section>
          <p>What kind of games should I play?</p>
          {
            choiceBlock(tag, 'handedness', 1, `${colors.vanilla}`, `${colors.dark}`, BulletedList)
          }
          </Section>
        </Chapter>
      
    </>
  );
};

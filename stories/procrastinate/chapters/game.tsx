import {
  Section,
  Chapter,
  Nav,
  TextBlock,
  BackgroundFill,
  Artwork,
} from "core/components";
import { PageType } from "core/types";
import colors from 'public/themeColors.module.scss';

export const Page: PageType = () => {
  return (
    <>
        <Chapter filename="game">
          <Section>
            
          game {" "}<Nav text="back" tag = "gameFromMenu" next="menu"/>
          </Section>
        </Chapter>
      
    </>
  );
};

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
     
      
        <Chapter filename="tv">
          <Section>
            
            <p>
            tv{"  "} <Nav text="back" tag = "tvFromMenu" next="menu"/>
              
            </p>
          </Section>
        </Chapter>
      
    </>
  );
};

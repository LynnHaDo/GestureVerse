import {
  Section,
  Chapter,
  Nav,
  TextBlock,
  BackgroundFill,
  Artwork,
} from "core/components";
import { PageType } from "core/types";
import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  return (
    <>
        <Chapter filename="nap">
          <Section>
          <p>
            nap{"  "} <Nav text="back" tag = "napFromMenu" next="menu"/>
              
            </p>
          </Section>
        </Chapter>
      
    </>
  );
};

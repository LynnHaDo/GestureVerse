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
        <Chapter filename="homework">
          <Section>
            <p>
            hw {" "}<Nav text="back" tag = "hwFromMenu" next="menu"/>
              
            </p>
          </Section>
        </Chapter>
    </>
  );
};

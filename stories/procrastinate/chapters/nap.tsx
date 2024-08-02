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
      <BackgroundFill color={colors.brown} />
      
      <TextBlock>
        <Chapter filename="mesaverdeparkinglot">
          <Section>
            <p>
              For over 700 years, the Ancestral Pueblo people built thriving
              communities on the mesas and in the cliffs of Mesa Verde. Today,
              the park protects the rich cultural heritage of 27 Pueblos and
              Tribes and offers visitors a spectacular window into the past.
              This World Heritage Site and International Dark Sky Park is home
              to over a thousand species, including several that live nowhere
              else on earth. You saw a tree, and observed it for a while before going{"  "}
              <Nav text="back" next="right" tag="back" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

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
      <Artwork
        link="/stories/my-story/images/02_right_mesa_verde_parking_lot.jpg"
        source="https://leeariel.com/landscapes-2020"
        name="Plant in Mesa Verde Parking Lot, Gouache on paper, 2020, 11x13 in"
        width="390px"
        position={{
          top: "1vh",
          right: "0"
        }}
      />
      <TextBlock position="bottom_left">
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

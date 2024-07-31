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
      <BackgroundFill color={colors.darkBlue} />
      <Artwork
        link="/stories/a-beach-walk/images/bg.gif"
        source="#"
        name="Sunset at the beach, Digital art, 12x12 in"
        width="300px"
        position={{
          left: "49%",
          top: "11vh",
          transform: "translate(-50%, 0)",
          backgroundColor: `${colors.white}`,
        }}
      />
      <TextBlock
        position="bottom_middle"
        additionalStyle={{
          padding: 0,
          width: '300px'
        }}
      >
        <Chapter filename="intro">
          <Section>
            <h2>a beach walk</h2>
            <p>
              Embark on a peaceful exploration along the coast. {"  "}
              <Nav text="Let's start" next="start" tag="intro" />.
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

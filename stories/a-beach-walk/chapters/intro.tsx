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
        name="Sunset at the beach"
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
          width: "300px",
          padding: 0,
          left: "49%",
          bottom: "calc(16vh)",
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

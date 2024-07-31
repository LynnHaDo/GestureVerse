import {
  Section,
  Chapter,
  TextBlock,
  BackgroundFill,
  Artwork,
} from "core/components";

import { ResetButton } from "core/components/ui";

import { PageType } from "core/types";
import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  return (
    <>
      <BackgroundFill color={colors.retroGreen} />
      <Artwork
        link="/stories/a-beach-walk/images/05_rest.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="Rest"
        width="300px" height="300px"
        position={{
          left: "49%",
          top: "11vh",
          transform: "translate(-50%, 0)",
          backgroundColor: `${colors.white}`,
        }}
      />
      <TextBlock
        position="bottom_middle"
        textAlign="center"
        additionalStyle={{
          width: "300px",
          padding: 0,
          left: "49%",
          bottom: "calc(16vh)",
        }}
      >
        <Chapter filename="rest">
          <Section>
            <p>
              Thank you for visiting my beach. To walk again go back to the{" "}
              <ResetButton children="start"/>{"."}
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

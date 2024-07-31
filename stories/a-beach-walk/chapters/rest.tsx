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
      <BackgroundFill color={colors.darkBlue} />
      <Artwork
        link="/stories/a-beach-walk/images/05_rest.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="Image of sand with 'Thank you for playing' text"
        height="300px"
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
          padding: 0,
          width: '460px'
        }}
      >
        <Chapter filename="rest">
          <Section>
            <p>
              Thank you for visiting my beach. To walk again go back to the{" "}
              <ResetButton
                children="start"
                message="Do you want to restart the story?"
                style={{
                  backgroundColor: `${colors.white}`,
                  border: `1px solid ${colors.white}`,
                  textTransform: "uppercase",
                  width: 'auto'
                }}
              />
            </p>

            <h4>Reference</h4>
            <p style={{fontStyle: 'italic'}}>
            interstellar-bird (n.d.). Beach Walk by interstellar-bird. [online] itch.io. Available at: https://interstellar-bird.itch.io/beach-walk [Accessed 16 Jul. 2024].
            </p>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

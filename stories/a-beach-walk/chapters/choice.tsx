import {
  Section,
  Chapter,
  ChoiceBlock,
  BackgroundFill,
  TextBlock,
  Artwork,
} from "core/components";
import { PageType } from "core/types";

import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  const tag = "leftOrRight";

  return (
    <>
      <BackgroundFill color={colors.orange} />
      <Artwork
        link="/stories/a-beach-walk/images/02.png"
        source="https://interstellar-bird.itch.io/beach-walk"
        name="Left or right"
        width="400px"
        position={{
            left: "49%",
            top: "11vh",
            transform: "translate(-50%, 0)",
            backgroundColor: `${colors.white}`,
        }}
      />
      <TextBlock position="bottom_middle"
        additionalStyle={{
          width: "400px",
          padding: 0,
          left: "49%",
          bottom: "calc(7vh)",
        }}>
        <Chapter filename="choice">
          <Section>
            <div className="row">
              <ChoiceBlock tag={tag} btnBackgroundColor="transparent" />
            </div>
          </Section>
        </Chapter>
      </TextBlock>
    </>
  );
};

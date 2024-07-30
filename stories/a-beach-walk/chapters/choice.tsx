import { Section, Chapter, ChoiceBlock, BackgroundFill, TextBlock, Artwork } from "core/components";
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
        width="500px"
        position={{
            top: '1vh',
            left: '0'
        }}/>
    <TextBlock textAlign="right" position="bottom_right">
        <Chapter filename="choice">
        <Section>
            <div className="row">
                <ChoiceBlock tag={tag} 
                             btnBackgroundColor="transparent"
                             />
            </div>
        </Section>
        </Chapter>
    </TextBlock>
   </>
  );
};

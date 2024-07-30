import { Section, Chapter, Nav, BackgroundFill, TextBlock, Artwork, ChoiceBlock } from "core/components";
import { PageType } from "core/types";

import colors from 'public/themeColors.module.scss';

export const Page: PageType = () => {
  const tag = "left";

  return (
    <>
        <BackgroundFill color={colors.blue}/>
        <Artwork 
            link="/stories/a-beach-walk/images/02_left.png"
            source="https://interstellar-bird.itch.io/beach-walk"
            name="Left"
            width="400px"
            position={{
                left: "49%",
                top: "11vh",
                transform: "translate(-50%, 0)",
                backgroundColor: `${colors.white}`,
            }}/>
        <TextBlock 
                position="bottom_middle"
                additionalStyle={{
                    padding: 0,
                    left: "49%",
                    top: "calc(70vh)"
                }}
                >
            <Chapter filename="left">
                <Section>
                    <div className = "row">
                        <ChoiceBlock tag={tag} 
                                    btnBackgroundColor="transparent"
                                    extraConfig={{prefix: "Go see", suffix: "?"}}/>
                    </div>                    
                </Section>
            </Chapter>
        </TextBlock>
    </>
  );
};

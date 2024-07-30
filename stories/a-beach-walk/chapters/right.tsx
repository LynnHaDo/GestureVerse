import { Section, Chapter, BackgroundFill, TextBlock, Artwork, ChoiceBlock } from "core/components";
import { PageType } from "core/types";
import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  const tag = "right";
  return (
    <>
        <BackgroundFill color={colors.darkYellow}/>
        <Artwork 
            link="/stories/a-beach-walk/images/02_right.png"
            source="https://leeariel.com/2021"
            name="Bitterbrush Mountains, Gouache on paper, 2021, 11x15 in"
            width="500px"
            position={{
                left: '0',
                top: '1vh'
            }}/>
        <TextBlock>
            <Chapter filename="right">
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

import { Section, Chapter, ChoiceBlock, BackgroundFill, TextBlock } from "core/components";
import { PageType } from "core/types";
import { useEffect } from "react";

export const Page: PageType = () => {
  const tag = "leftOrRight";

  return (
    <>
    <BackgroundFill imageSrc="/stories/my-story/images/02.jpg" />
    <TextBlock>
        <Chapter filename="choice">
        <Section>
            <div className="row">
                <ChoiceBlock tag={tag} 
                             btnBackgroundColor="transparent"/>
            </div>
        </Section>
        </Chapter>
    </TextBlock>
   </>
  );
};

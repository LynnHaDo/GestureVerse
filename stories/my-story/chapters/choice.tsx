import { Section, Chapter } from "core/components";
import { PageType } from "core/types";
import FadeIn from "core/components/ui/fadein";
import ChoiceBlock from "core/components/choiceBlock";

import { Image } from "react-bootstrap";
import BackgroundFill from "core/components/backgroundFill";
import TextBlock from "core/components/textBlock";

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

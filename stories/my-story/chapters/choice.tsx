import { Section, Chapter } from "core/components";
import { PageType } from "core/types";
import FadeIn from "core/components/ui/fadein";
import ChoiceBlock from "core/components/choiceBlock";

import { Image } from "react-bootstrap";

export const Page: PageType = () => {
  const tag = "leftOrRight";

  return (
    <Chapter filename="choice">
      <Section>
        <div className="row">
          <div className="col-lg-4">
            <ChoiceBlock tag={tag} 
                         btnBackgroundColor="transparent"/>
          </div>
          <div className="col-lg-8">
            <FadeIn
              children={<Image src="/stories/my-story/images/02.png" />}
            ></FadeIn>
          </div>
        </div>
      </Section>
    </Chapter>
  );
};

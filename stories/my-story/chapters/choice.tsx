import { Section, Chapter } from "core/components";
import { PageType } from "core/types";
import FadeIn from "core/components/ui/fadein";
import ChoiceBlock from "core/components/choiceBlock";

export const Page: PageType = () => {
  const tag = "leftOrRight";

  return (
    <Chapter filename="choice">
      <Section>
        <div className="row">
          <div className="col-lg-6">
            <ChoiceBlock tag={tag} />
          </div>
          <div className="col-lg-6">
            <FadeIn
              children={<img src="/stories/my-story/images/02.png" />}
            ></FadeIn>
          </div>
        </div>
      </Section>
    </Chapter>
  );
};

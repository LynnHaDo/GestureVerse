import { Section, Chapter, Nav, BackgroundFill, TextBlock } from "core/components";
import { PageType } from "core/types";

export const Page: PageType = () => {
  return (
    <>
        <BackgroundFill imageSrc="/stories/my-story/images/02.png"/>
        <TextBlock>
            <Chapter filename="left">
                <Section>
                    <p>
                        Left 
                    </p>
                </Section>
            </Chapter>
        </TextBlock>
    </>
  );
};

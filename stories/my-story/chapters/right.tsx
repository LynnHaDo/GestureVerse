import { Section, Chapter, BackgroundFill, TextBlock } from "core/components";
import { PageType } from "core/types";

export const Page: PageType = () => {
  return (
    <>
        <BackgroundFill imageSrc="/stories/my-story/images/02_right.png"/>
        <TextBlock>
            <Chapter filename="right">
                <Section>
                    <p>
                        Right
                    </p>
                </Section>
            </Chapter>
        </TextBlock>
    </>
  );
};

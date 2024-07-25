import { Section, Chapter, Nav, BackgroundFill, TextBlock } from "core/components";
import { PageType } from "core/types";

export const Page: PageType = () => {
  return (
    <>
        <BackgroundFill imageSrc="/stories/my-story/images/Buttermilk.jpg"/>
        <TextBlock>
            <Chapter filename="start">
                <Section>
                    <p>
                        It is a lovely day to go for a {" "}
                        <Nav text="walk" next="choice" tag="walk" />
                    </p>
                </Section>
            </Chapter>
        </TextBlock>
    </>
  );
};

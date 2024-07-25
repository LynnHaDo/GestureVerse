import { Section, Chapter, Nav } from "core/components";
import BackgroundFill from "core/components/backgroundFill";
import { PageType } from "core/types";

export const Page: PageType = () => {
  return (
    <>
        <BackgroundFill imageSrc="/stories/my-story/images/Buttermilk.jpg"/>
        
        <Chapter filename="start">
            <Section>
                <p>
                    It is a lovely day to go for a {" "}
                    <Nav text="walk" next="choice" tag="walk" persist={false} />
                </p>
            </Section>
        </Chapter>
    </>
  );
};

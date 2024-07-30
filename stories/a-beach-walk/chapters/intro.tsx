import {
    Section,
    Chapter,
    Nav,
    TextBlock,
    BackgroundFill,
    Artwork,
  } from "core/components";
  import { PageType } from "core/types";
  
  export const Page: PageType = () => {
    return (
      <>
        <BackgroundFill imageSrc="/stories/a-beach-walk/images/01.png" />
        <TextBlock position="bottom_left">
          <Chapter filename="intro">
            <Section>
              <h2>a beach walk</h2>
              <p>
                Embark on a peaceful exploration along the coast. {"  "}
                <Nav text="Let's start" next="start" tag="intro" />.
              </p>
            </Section>
          </Chapter>
        </TextBlock>
      </>
    );
  };
  
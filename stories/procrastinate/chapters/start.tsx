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
      <Chapter filename="start">
          <Section>
            
            <p>
            I've had a very long day at school. None of my classes were interesting and I just wasted 7 hours of my day sitting and staring at a wall. I have some homework but I don't remember when it's due. Oh well. Now's the time to{"  "}
              <Nav text="relax" next="menu" tag="start" />.
            </p>
          </Section>
      </Chapter>
    </>
  );
};

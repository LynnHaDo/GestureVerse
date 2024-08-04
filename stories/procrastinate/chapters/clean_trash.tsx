import { Section, Chapter, Nav } from "core/components";
import FadeIn from "core/components/ui/fadein";
import { PageType } from "core/types";

export const Page: PageType = () => {
  return (
    <Chapter filename="clean_trash">
      <Section>
        <p>
          My trashcan is overflowing from the loose paper and food wrappers I
          have shoved into it. Every day I stomp it down a little more, but if I
          don't empty it soon it will inevitably take over my room.
        </p>
        <FadeIn>
          <p>
            Hmm... What {" "}
            <Nav
              text="else"
              next="clean"
              tag={`moveFrom${__filename}toClean`}
            />
            {"?"}
          </p>
        </FadeIn>
      </Section>
    </Chapter>
  );
};

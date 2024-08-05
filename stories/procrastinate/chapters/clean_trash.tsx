import { Section, Chapter, Nav } from "core/components";
import FadeIn from "core/components/ui/fadein";
import { PageType } from "core/types";
import useChapter from "core/hooks/use-chapter";

export const Page: PageType = () => {
  const chapter = useChapter();
  return (
    <Chapter filename={chapter.filename}>
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
              tag={`moveFrom${chapter.filename}toClean`}
            />
            {"?"}
          </p>
        </FadeIn>
      </Section>
    </Chapter>
  );
};

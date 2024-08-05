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
          There's a Ratatouille movie shirt and the same pair of pants I've been
          wearing every day just laying on the ground. I love my Ratatouille
          shirt, it's my favorite movie, and you never see people wearing
          Ratatouille stuff. It always gets tons of looks.
        </p>
        <FadeIn>
            <p>Hmm... What {" "}
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

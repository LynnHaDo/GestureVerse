import { Section, Chapter, Nav } from "core/components";
import { PageType } from "core/types";

import { Container, Row } from "react-bootstrap";

import useChapter from "core/hooks/use-chapter";

export const Page: PageType = () => {
  const chapter = useChapter();
  return (
      <Chapter filename={chapter.filename}>
        <Section>
          <Container>
            <Row>
              <p>
                I'M RICK HARRISON, AND THIS IS MY PAWN SHOP. I WORK HERE WITH MY
                OLD MAN AND MY SON, "BIG HOSS". EVERYTHING IN HERE HAS A STORY
                AND A PRICE. ONE THING I'VE LEARNED AFTER 21 YEARS - YOU NEVER
                KNOW WHAT IS GONNA COME THROUGH THAT DOOR.
              </p>

              <p>
                I can't handle this. I'm gonna watch the{" "}
                <Nav
                  text="car show"
                  next="tv_regulartv_carshow"
                  tag={`moveFrom${chapter.filename}ToCarShow`}
                />
                {"."}
              </p>
            </Row>
          </Container>
        </Section>
      </Chapter>
  );
};

import { Section, Chapter, Nav } from "core/components";
import useChapter from "core/hooks/use-chapter";
import { PageType } from "core/types";

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const chapter = useChapter();
  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <p>
              I open Netflix and endlessly scroll for 30 minutes before
              inevitably watching{" "}
              <Nav
                text="The Office"
                next="tv_netflix_theoffice"
                tag={`moveFrom${chapter.filename}ToTheOffice`}
              />{" "}
              from where I left off. I usually don't pay attention to it because
              I've already seen every episode a number of times. It still makes
              good background noise for going on my phone.
            </p>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

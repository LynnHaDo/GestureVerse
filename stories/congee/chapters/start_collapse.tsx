import { Section, Chapter, Nav, Artwork } from "core/components";
import { Next, PageType } from "core/types";

import useChapter from "core/hooks/use-chapter";

import { Container, Row, Col } from "react-bootstrap";

export const Page: PageType = () => {
  const chapter = useChapter();

  return (
    <Chapter filename={chapter.filename} showOnlyCurrentSection>
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <p>
                In fact, you don’t remember much of the day. You got home with a
                splitting headache and you fell into bed with your work clothes
                still on. At least you took off your shoes. What{" "}
                <Nav text="time" next={Next.Section} tag="whatTime" /> is it by
                the way?
              </p>
            </Col>

            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            
            <Col lg={6}>
              <p>
                You turn to look at your clock on your bedside table. 8:30pm.
              </p>
              <p>
                You really messed up your{" "}<Nav text="sleeping pattern" next="start_collapse_sleeping_pattern" tag="sleepingPattern" />{"."}
              </p>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

import { Section, Chapter, Nav } from "core/components";
import { PageType } from "core/types";

import useChapter from "core/hooks/use-chapter";

import { Container, Row, Col } from "react-bootstrap";

export const Page: PageType = () => {
  const chapter = useChapter();

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col>
              <p>
                You shove the blanket off your body and a chill rushes through
                you. Is the window open? You’re pretty sure you closed it before
                you{" "}
                <Nav
                  text="collapsed into bed"
                  next="start_collapse"
                  tag="collapseKick"
                />{" "}
                {"."}
              </p>
            </Col>

            <Col></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

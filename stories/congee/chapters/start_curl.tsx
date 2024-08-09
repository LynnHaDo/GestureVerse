import { Section, Chapter, Nav, Artwork } from "core/components";
import { PageType } from "core/types";
import FadeIn from "core/components/ui/fadein";

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
                You bring your knees to your chest. Even your chest is moist
                with sweat. Maybe you left the heating on or something? You’re
                pretty sure you didn’t turn on the heating before you{" "}
                <Nav
                  text="collapsed into bed"
                  next="start_collapse"
                  tag="collapseCurl"
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

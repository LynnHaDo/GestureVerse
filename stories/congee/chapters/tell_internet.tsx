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
                You open up your browser, ready to type in your symptoms. You
                hesitate. You do have some self-preservation, after all.
              </p>
              <p>
                Finally, a stronger voice within you says:{" "}
                <em>you’re not doing that and you know it</em>.
              </p>
              <p>
                Just{" "}
                <Nav
                  text="text Allison"
                  next="tell_allison"
                  tag="tellAllison"
                />
                {", "} your best friend anyway
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

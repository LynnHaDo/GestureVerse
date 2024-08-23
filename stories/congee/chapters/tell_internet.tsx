import { Section, Chapter, NavBlock } from "core/components";
import { PageType } from "core/types";

import useChapter from "core/hooks/use-chapter";

import { Container, Row, Col } from "react-bootstrap";
import styles from 'public/stories/congee/styles/Index.module.scss';

export const Page: PageType = () => {
  const chapter = useChapter();

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <p>
                You open up your browser, ready to type in your symptoms. You
                hesitate. You do have some self-preservation, after all.
              </p>
              <p>
                Finally, a stronger voice within you says:{" "}
                <em>you’re not doing that and you know it</em>.
              </p>
              <p>Just text Allison, your best friend anyway.</p>
              <NavBlock instructionClassName={styles.instruction} 
                text=""
                next="tell_allison"
                tag="tellAllison"
              />
            </Col>

            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

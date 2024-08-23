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
                You shove the blanket off your body and a chill rushes through
                you. Is the window open? You’re pretty sure you closed it before
                you collapsed into bed.
              </p>
              <NavBlock instructionClassName={styles.instruction}  text="" next="start_collapse" tag="collapseKick" />
            </Col>

            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

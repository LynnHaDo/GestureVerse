import { Section, Chapter, NavBlock, Artwork } from "core/components";
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
                You bring your knees to your chest. Even your chest is moist
                with sweat. Maybe you left the heating on or something? You’re
                pretty sure you didn’t turn on the heating before you collapsed into bed.
              </p>
              <NavBlock instructionClassName={styles.instruction} 
                  text=""
                  next="start_collapse"
                  tag="collapseCurl"
                />
            </Col>

            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

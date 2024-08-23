import { Section, Chapter, NavBlock, Artwork } from "core/components";
import { Next, PageType } from "core/types";

import useChapter from "core/hooks/use-chapter";

import { Container, Row, Col } from "react-bootstrap";
import { choiceBlock } from "core/features/choice";

import { BulletedList } from "core/components/widgets";
import { useVariable } from "core/hooks/use-variable";

import styles from 'public/stories/congee/styles/Index.module.scss';

export const Page: PageType = () => {
  const chapter = useChapter();
  const tag = "congee__disease";

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <p>
                But it isn't your fault. You felt really bad and you still feel
                awful. You’re pretty sure you’ve come down with a...
              </p>

              {choiceBlock(
                tag,
                "gesture",
                BulletedList,
                null,
                true,
                "variableSetter",
                '',
                '',
                null,
                `${styles.instruction}`
              )}

              {useVariable(tag) && (
                <>
                  <p style={{ marginTop: "15px" }}>
                    Maybe you should tell someone.
                  </p>
                  <NavBlock instructionClassName={styles.instruction}  text="" next="tell" tag="tellSomeone" />
                </>
              )}
            </Col>

            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

import { Section, Chapter, Nav, NavBlock } from "core/components";
import { PageType, useAppDispatch } from "core/types";

import { useEffect } from "react";

import { incrementScore } from "core/features/score";
import { updateVariable } from "core/features/variable-manager";
import useChapter from "core/hooks/use-chapter";

import { Container, Row } from "react-bootstrap";
import styles from 'public/stories/procrastinate/styles/Index.module.scss';

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  const chapter = useChapter();

  useEffect(() => {
    dispatch(incrementScore());
    dispatch(updateVariable("tv", true));
  }, []);

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <p>
              I like watching these. I get so much satisfaction from seeing a
              rusty old car turn into something amazing. I wish I could get a
              project car. This episode they are restoring a 1970 Datsun 240Z,
              and are rebuilding the original L24 motor and upgrading it to a
              triple carb set up. Nice.
            </p>

            <div className={styles.p}>
              What should I do{" "}
              <NavBlock instructionClassName={styles.instruction} 
                text="next?"
                next="menu"
                tag={`moveFrom${chapter.filename}ToMenu`}
              />
            </div>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

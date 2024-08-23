/** Static components */
import { Section, Chapter, NavBlock } from "core/components";
import FadeIn from "core/components/ui/fadein";

/** Hooks */
import { PageType, useAppDispatch } from "core/types";
import { useEffect } from "react";
import { incrementScore } from "core/features/score";
import useChapter from "core/hooks/use-chapter";
import { updateVariable } from "core/features/variable-manager";

import styles from 'public/stories/procrastinate/styles/Index.module.scss';

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  const chapter = useChapter();

  useEffect(() => {
    dispatch(incrementScore());
    dispatch(updateVariable('clean', true));
  }, []);
  
  return (
    <Chapter filename="clean_start">
      <Section>
      <Container>
      <Row>
        <p>
          I spend an hour organizing everything and making sure to not do my
          homework. Cleaning your room is only fun when you have other things to
          do.
        </p>
        <FadeIn>
          <div className={styles.p}>
            Hmm... Are there any todo items left?
          </div>
        </FadeIn>
        <NavBlock instructionClassName={styles.instruction} 
              text=""
              next="menu"
              tag={`moveFrom${chapter.filename}toMenu`}
            />
        </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

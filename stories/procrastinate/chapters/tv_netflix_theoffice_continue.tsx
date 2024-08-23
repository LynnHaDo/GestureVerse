import {
  Section,
  Chapter,
  NavBlock,
} from "core/components";
import FadeIn from "core/components/ui/fadein";
import { incrementScore } from "core/features/score";
import { PageType, useAppDispatch } from "core/types";

import { useEffect } from "react";
import useChapter from "core/hooks/use-chapter";

import { Container, Row } from "react-bootstrap";
import styles from "public/stories/procrastinate/styles/Index.module.scss";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  const chapter = useChapter();
  useEffect(() => {
    dispatch(incrementScore());
  }, []);

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row style={{ position: "relative" }}>
            <FadeIn delayTime={300}>
              <p>...</p>
            </FadeIn>
            <FadeIn delayTime={500}>
              <p>...</p>
            </FadeIn>
            <FadeIn delayTime={900}>
              <p>...</p>
            </FadeIn>
            <FadeIn delayTime={1200}>
              <p>Binging a series is way more fun than doing homework.</p>
            </FadeIn>

            <FadeIn delayTime={1400}>
              <div className={styles.p}>What should I do next?</div>
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

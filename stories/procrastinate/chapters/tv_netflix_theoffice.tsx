import { Section, Chapter, Nav } from "core/components";
import FadeIn from "core/components/ui/fadein";
import { PageType, useAppDispatch } from "core/types";

import useChapter from "core/hooks/use-chapter";
import { updateVariable } from "core/features/variable-manager";
import { useEffect } from "react";
import { incrementScore } from "core/features/score";

import { Container, Row } from "react-bootstrap";
import styles from "public/stories/procrastinate/styles/Index.module.scss";
import { choiceBlock } from "core/features/choice";
import { BulletedList } from "core/components/widgets";
import { InlineListEN } from "core/components/widgets/inline-list";

export const Page: PageType = () => {
  const tag = "procrastinate__tv_netflix";
  const chapter = useChapter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(incrementScore());
    dispatch(updateVariable("tv", true));
  }, []);

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row style={{ position: "relative" }}>
            <FadeIn delayTime={300}>
              <p>...</p>
            </FadeIn>

            <div className={styles.p}>
              {choiceBlock(
                tag,
                "handedness",
                InlineListEN,
                null,
                true,
                "navigation",
                "",
                "",
                null,
                `${styles.instruction}`
              )}
            </div>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

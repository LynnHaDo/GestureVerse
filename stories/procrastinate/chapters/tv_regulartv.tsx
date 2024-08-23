import { Section, Chapter } from "core/components";
import { BulletedList } from "core/components/widgets";
import { choiceBlock } from "core/features/choice";
import useChapter from "core/hooks/use-chapter";
import { PageType } from "core/types";

import styles from 'public/stories/procrastinate/styles/Index.module.scss';
import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const chapter = useChapter();
  const tag = "procrastinate__tv_regulartv";
  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <p>
              I flip aimlessly through channels, and settle on a car restoration
              show. It was either that or reruns of Pawn Stars.
            </p>

            <p>Hmm... which one?</p>

            {choiceBlock(
              tag,
              "handedness",
              BulletedList,
              null,
              true,
              "navigation",
              "",
              "",
              null,
              `${styles.instruction}`
            )}
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

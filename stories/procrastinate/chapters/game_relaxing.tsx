import { Section, Chapter, Nav } from "core/components";
import { choiceBlock } from "core/features/choice";
import { PageType } from "core/types";
import { BulletedList } from "core/components/widgets";

import { Container, Row } from "react-bootstrap";
import styles from 'public/stories/procrastinate/styles/Index.module.scss';

export const Page: PageType = () => {
  const tag = "procrastinate__games_relaxing";
  return (
    <Chapter filename="game_relaxing">
      <Section>
        <Container>
          <Row>
            <p>
              This sounds like a nice way to unwind, something low-pressure and
              not competetive. Maybe a puzzle game, or just something casual.
            </p>

            {choiceBlock(
              tag,
              "gesture",
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

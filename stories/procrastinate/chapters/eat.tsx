import { Section, Chapter, Nav } from "core/components";
import { PageType } from "core/types";

import { choiceBlock } from "core/features/choice";

import styles from 'public/stories/procrastinate/styles/Index.module.scss';
import { Container, Row } from "react-bootstrap";
import { BulletedList } from "core/components/widgets";

export const Page: PageType = () => {
  const tag = "procrastinate__eat";
  let displayText: string =
    "I could go for something to eat. But *what* to eat is the tricky part. This is usually the hardest part of my day.";

  return (
    <Chapter filename="eat">
      <Section>
        <Container>
          <Row>
            <p>{displayText}</p>
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

import { Section, Chapter } from "core/components";
import { BulletedList } from "core/components/widgets";
import { choiceBlock } from "core/features/choice";
import { PageType } from "core/types";

import styles from 'public/stories/procrastinate/styles/Index.module.scss';

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const tag = "procrastinate__tv";
  return (
    <Chapter filename="tv">
      <Section>
        <Container>
          <Row>
            <p>What should I watch?</p>
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

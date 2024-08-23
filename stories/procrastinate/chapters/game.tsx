import { Section, Chapter, Nav, NavBlock } from "core/components";
import { choiceBlock } from "core/features/choice";

import { PageType } from "core/types";
import { BulletedList } from "core/components/widgets";

import { Container, Row } from "react-bootstrap";
import styles from 'public/stories/procrastinate/styles/Index.module.scss';

export const Page: PageType = () => {
  const tag = "procrastinate__games";
  return (
    <Chapter filename="game">
      <Section>
        <Container>
          <Row>
            <p>What kind of games should I play?</p>
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

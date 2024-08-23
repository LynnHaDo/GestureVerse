import { Section, Chapter } from "core/components";
import { PageType } from "core/types";

import { choiceBlock } from "core/features/choice";

import styles from "public/stories/procrastinate/styles/Index.module.scss";
import { BulletedList } from "core/components/widgets";

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const tag = "procrastinate__eat_buy";

  return (
    <Chapter filename="eat_buy">
      <Section>
        <Container>
          <Row>
            <p>
              There are a couple restaurants available for shipping on Doordash,
              or I could drive a little farther and go get a deli sandwich from
              my favorite place. But choosing is so hard. I want instant
              gratification but am too lazy to drive or cook. Life is hard.
            </p>
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

import { Section, Chapter, Nav } from "core/components";
import { PageType } from "core/types";

import { choiceBlock } from "core/features/choice";

import colors from "public/themeColors.module.scss";
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
              1,
              `${colors.blue}`,
              `${colors.white}`,
              BulletedList,
              null,
              true
            )}
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

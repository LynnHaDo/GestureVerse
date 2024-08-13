import { Section, Chapter } from "core/components";
import { BulletedList } from "core/components/widgets";
import { choiceBlock } from "core/features/choice";
import { PageType } from "core/types";

import colors from "public/themeColors.module.scss";
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
              1,
              `${colors.retroGreen}`,
              `${colors.white}`,
              BulletedList
            )}
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

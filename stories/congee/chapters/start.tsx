import { Section, Chapter } from "core/components";
import { PageType } from "core/types";

import { Container, Row, Col } from "react-bootstrap";
import { choiceBlock } from "core/features/choice";

import colors from "public/themeColors.module.scss";
import { BulletedList } from "core/components/widgets";

export const Page: PageType = () => {
  const tag = "congee_start";

  return (
    <Chapter filename="start">
      <Section>
        <Container>
          <Row>
            <Col>
              <p>
                It’s the middle of the night. The streetlight pouring through
                the window is unbearable; it burns your eyeballs. Your body is
                sweating underneath the covers, but somehow you still feel
                frozen to the bone. Raindrops patter against the glass.
              </p>

              {choiceBlock(
                tag,
                "gesture",
                1,
                `${colors.lightYellow}`,
                `${colors.dark}`,
                BulletedList
              )}
            </Col>

            <Col></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

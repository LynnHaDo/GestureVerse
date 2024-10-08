import { Section, Chapter, Artwork } from "core/components";
import { PageType } from "core/types";

import { Container, Row, Col } from "react-bootstrap";
import { choiceBlock } from "core/features/choice";

import styles from "public/stories/congee/styles/Index.module.scss";
import { BulletedList } from "core/components/widgets";

export const Page: PageType = () => {
  const tag = "congee__start";

  return (
    <Chapter filename="start">
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <p>
                It’s the middle of the night. The streetlight pouring through
                the window is unbearable; it burns your eyeballs. Your body is
                sweating underneath the covers, but somehow you still feel
                frozen to the bone. Raindrops patter against the glass.
              </p>

              {choiceBlock(
                tag,
                "gesture",
                BulletedList,
                null,
                true,
                'navigation',
                '',
                '',
                null,
                `${styles.instruction}`
              )}
            </Col>

            <Col lg={6}>
              <Artwork link="https://i.imgur.com/rwZUriJ.gif"
                        name="Window with view of the rain, GIF image"
                        source="https://imgur.com/rwZUriJ"
                        width="80%"
                        position={{
                            margin: '10px auto'
                        }}
                        />
            </Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

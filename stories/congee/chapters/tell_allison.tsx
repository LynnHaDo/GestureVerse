import { Section, Chapter } from "core/components";
import { PageType } from "core/types";

import { choiceBlock } from "core/features/choice";
import { BulletedList } from "core/components/widgets";
import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";
import { Container, Row, Col } from "react-bootstrap";

import useChapter from "core/hooks/use-chapter";

import colors from "public/themeColors.module.scss";
import styles from "public/stories/congee/styles/Index.module.scss"

export const Page: PageType = () => {
  const tag = "congee__tell_allison";
  const chapter = useChapter();

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <p>
              You flick on WhatsApp. You feel so dizzy, you can barely focus on the screen. You can do this.
              </p>

              <FadeIn wrapper = {animated('p')} delayTime={300}>
                You type...
              </FadeIn>

              {choiceBlock(
                tag,
                "gesture",
                BulletedList,
                null,
                true,
                'navigation',
                `${styles.chatBubble}`,
                '',
                null,
                `${styles.instruction}`
              )}
            </Col>

            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

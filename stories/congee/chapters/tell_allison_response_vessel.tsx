import { Section, Chapter, NavBlock } from "core/components";
import { PageType } from "core/types";

import useChapter from "core/hooks/use-chapter";

import { Container, Row, Col } from "react-bootstrap";

import styles from "public/stories/congee/styles/Index.module.scss";
import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";

export const Page: PageType = () => {
  const chapter = useChapter();

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col lg={4}></Col>
            <Col lg={4} style={{ position: "relative" }}>
              <div className={styles.chatWrapper}>
                <div>
                  <p className={styles.chatBubble}>
                    The body is but a weak vessel 😔
                  </p>
                </div>

                <FadeIn wrapper={animated("div")} delayTime={5 * 100}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    nah that's not true
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 900}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    wait. are you having some kind of crisis?
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 1500}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    this seems to be the thing nowadays
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 2000}>
                  <p className={`${styles.chatBubble}`}>
                    ... maybe. i'm feeling a bit unwell 😢
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 2100}>
                  <p>Continue...</p>
                </FadeIn>
                <NavBlock instructionClassName={styles.instruction} 
                    text=""
                    next="tell_allison_close"
                    tag="continueNetflix"
                  />
              </div>
            </Col>

            <Col lg={4}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

import { Section, Chapter, Nav } from "core/components";
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
            <Col lg={4} style={{position: 'relative'}}>
              <div className={styles.chatWrapper}>
                <div>
                  <p className={styles.chatBubble}>
                    I'm not being melodramatic but I think death is near
                    dfdsfdf.
                  </p>
                </div>

                <FadeIn wrapper={animated("div")} delayTime={5 * 200}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>?</p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 1000}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    if you die can I have your games?
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 1200}>
                  <p className={styles.chatBubble}>You hate all my games 😒</p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 2000}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    true, but i could sell them though 😏
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 2500}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    hopefully you aren't actually dying or this will age badly
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 2900}>
                  <p className={styles.chatBubble}>
                    Such an opportunist. Sadly I'm not truly dying but I do feel
                    awful though 😫
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 3000}>
                  <p>
                    <Nav
                      text="Continue"
                      next="tell_allison_close"
                      tag="continueDeath"
                      className={styles.navEnd}
                    />
                  </p>
                </FadeIn>
              </div>
            </Col>

            <Col lg={4}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

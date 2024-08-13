import { Section, Chapter, Nav, R } from "core/components";
import { Next, PageType } from "core/types";

import useChapter from "core/hooks/use-chapter";
import { useVariable } from "core/hooks/use-variable";

import { Container, Row, Col } from "react-bootstrap";

import styles from "public/stories/congee/styles/Index.module.scss";
import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";

import { Variables } from "core/components/constants/options";

export const Page: PageType = () => {
  const chapter = useChapter();

  return (
    <Chapter filename={chapter.filename} showOnlyCurrentSection>
      <Section>
        <Container>
          <Row>
            <Col lg={4}></Col>
            <Col lg={4} style={{position: 'relative'}}>
              <div className={styles.chatWrapper}>
                <div>
                  <p className={styles.chatBubble}>
                    I need a very distracting Netflix recommendation 😫
                  </p>
                </div>

                <FadeIn wrapper={animated("div")} delayTime={5 * 100}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    hmm 🤔... the new bojack horseman season is pretty good
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 900}>
                  <p className={styles.chatBubble}>
                    i heard the latest season is a bit dark
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 1500}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    it’s the kind of thing you need to be in the mood for. you
                    asked for DISTRACTING 🙄
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 2000}>
                  <p className={`${styles.chatBubble}`}>
                    something to distract me from disease, not make me feel
                    worse...
                  </p>
                </FadeIn>
              </div>
              <FadeIn wrapper={animated("div")} delayTime={5 * 2100}>
                <p>
                  <Nav
                    text="Continue"
                    next="tell_allison_close"
                    tag="continueNetflix"
                    className={styles.navEnd}
                  />
                </p>
              </FadeIn>
            </Col>

            <Col lg={4}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

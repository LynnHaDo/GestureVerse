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
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <div className={styles.chatWrapper}>
                <FadeIn wrapper={animated("div")} delayTime={5 * 600}>
                  <p className={styles.chatBubble}>
                    it's hard to get congee though. most places don’t sell it 😢
                  </p>
                </FadeIn>
                <FadeIn wrapper={animated("div")} delayTime={5 * 900}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    lol you could just make it?
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 1300}>
                  <p className={`${styles.chatBubble}`}>
                  You know me, I'm clumsy as hell. If I get out of bed to cook I’ll badly scald something or fall into the stove
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 1500}>
                  <p className={`${styles.chatBubble}`}>
                  Plus every time I make it, it tastes bad
                  </p>
                </FadeIn>
                <FadeIn wrapper={animated("div")} delayTime={5 * 1800}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                  ok ok, before you kick the bucket, you still have {" "}
                  <Nav text="options" next="get_options" tag="congeeOptions" />{"."}
                  </p>
                </FadeIn>

                
              </div>

              
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

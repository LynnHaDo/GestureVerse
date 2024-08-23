import { Section, Chapter, NavBlock, R } from "core/components";
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
  const tag = "congee__disease";
  const disease = useVariable(tag);
  let response: string;

  switch (disease) {
    case "fever":
      response = "that really sucks...";
      break;
    case "food_poisoning":
      response = "what did you eat...";
      break;
    default:
      response = "💀";
  }

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col lg={4}></Col>
            <Col lg={4} style={{ position: "relative" }}>
              <div className={styles.chatWrapper}>
                <FadeIn wrapper={animated("div")} delayTime={5 * 600}>
                  <p className={styles.chatBubble}>
                    I think I’ve come down with{" "}
                    {`${Variables[tag][disease].description}`}
                  </p>
                </FadeIn>
                <FadeIn wrapper={animated("div")} delayTime={5 * 900}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    {response}
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 1300}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    you know what you really need??
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 1600}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    you know what our moms usually make for us when we were
                    kids...
                  </p>
                </FadeIn>
                <FadeIn wrapper={animated("div")} delayTime={5 * 1700}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    congee
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 2000}>
                  <p className={styles.chatBubble}>
                    is that the best prescription you have, doctor? not like ...
                    good ol' paracetamol or something?
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 2600}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    you and i both know that congee is the GREATEST thing when
                    you’re under the weather
                  </p>
                </FadeIn>
              </div>

              <FadeIn wrapper={animated("div")} delayTime={5 * 3000}>
                <p>Congee. Hmm...</p>
              </FadeIn>
              
              <NavBlock instructionClassName={styles.instruction} text="" next="congee" tag="openCongee" />
            </Col>
            <Col lg={4}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

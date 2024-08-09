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
  const tag = "congee_disease";
  const disease = useVariable(tag);

  return (
    <Chapter filename={chapter.filename} showOnlyCurrentSection>
      <Section>
        <Container>
          <Row>
            <Col>
              <div className={styles.chatWrapper}>
                <p className={styles.chatBubble}>
                  I'm not being melodramatic but I think death is near dfdsfdf.
                </p>

                <FadeIn wrapper={animated("div")} delayTime={200}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>?</p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={1000}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    if you die can I have your games?
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={1200}>
                  <p className={styles.chatBubble}>You hate all my games 😒</p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={2000}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    true, but i could sell them though 😏
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={2500}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    hopefully you aren't actually dying or this will age badly
                  </p>
                </FadeIn>
              </div>

              <p>
                <Nav
                  text="Continue"
                  next={Next.Section}
                  tag="continueDeath"
                  className={styles.navEnd}
                />
              </p>
            </Col>

            <Col></Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col>
            <div className={styles.chatWrapper}>
            <FadeIn wrapper={animated("div")} delayTime={300}>
                <p className={styles.chatBubble}>
                  Such an opportunist. Sadly I'm not truly dying but I do feel
                  awful though 😫
                </p>
              </FadeIn>

              <FadeIn wrapper={animated("div")} delayTime={600}>
                <p className={styles.chatBubble}>
                  I think I’ve come down with{" "}
                  {`${Variables[tag][disease].description}`}
                </p>
              </FadeIn>

              <FadeIn wrapper={animated("div")} delayTime={900}>
                <R
                  tag={tag}
                  options={{
                    fever: (
                      <p className={`${styles.chatBubble} ${styles.other}`}>
                        that really sucks...
                      </p>
                    ),
                    food_poisoning: (
                      <p className={`${styles.chatBubble} ${styles.other}`}>
                        what did you eat??
                      </p>
                    ),
                    lurgy: <p className={`${styles.chatBubble} ${styles.other}`}>RIP</p>,
                    rare_illness: (
                      <p className={`${styles.chatBubble} ${styles.other}`}>RIP</p>
                    ),
                  }}
                />
              </FadeIn>

              <FadeIn wrapper={animated("div")} delayTime={1300}>
                <p className={`${styles.chatBubble} ${styles.other}`}>
                  you know what you really need??
                </p>
              </FadeIn>

              <FadeIn wrapper={animated("div")} delayTime={1600}>
                <p className={`${styles.chatBubble} ${styles.other}`}>
                  you know what our moms usually make for us when we were
                  kids...
                </p>
              </FadeIn>
              <FadeIn wrapper={animated("div")} delayTime={1600}>
              <p className={`${styles.chatBubble} ${styles.other}`}>
                <Nav text="congee" next="congee" tag="openCongee" />
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

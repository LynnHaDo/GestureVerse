import { Section, Chapter, Nav } from "core/components";
import { Next, PageType } from "core/types";

import useChapter from "core/hooks/use-chapter";

import { Container, Row, Col } from "react-bootstrap";

import styles from "public/stories/congee/styles/Index.module.scss";
import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";

export const Page: PageType = () => {
  const chapter = useChapter();

  return (
    <Chapter filename={chapter.filename} showOnlyCurrentSection>
      <Section>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <div className={styles.chatWrapper}>
                <div>
                  <p className={styles.chatBubble}>
                    no joy on the congee front 😔
                  </p>
                </div>

                <FadeIn wrapper={animated("div")} delayTime={5 * 200}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    well that blows. you checked doordash etc.?
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 1000}>
                  <p className={styles.chatBubble}>Yep, everywhere 😔</p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 1200}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    nothing worse than an unsatisfied congee craving
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 2000}>
                  <p className={`${styles.chatBubble}`}>
                    You brought it up and now I can’t stop thinking about it ...
                    thaaanks pal
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 2500}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    I guess not being able to buy congee is just one of those
                    things huh?
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 2800}>
                  <p className={`${styles.chatBubble}`}>
                    What{" "}
                    <Nav text="thing" next={Next.Section} tag="continueThing" className={styles.darkText}/>
                    {"?"}
                  </p>
                </FadeIn>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <div className={styles.chatWrapper}>
                <div>
                  <p className={styles.chatBubble}>What thing?</p>
                </div>

                <FadeIn wrapper={animated("div")} delayTime={5 * 200}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    just one of those things we’ll have to get used to
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 600}>
                  <p className={`${styles.chatBubble} ${styles.other}`}>
                    gotta go, brb
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("p")} delayTime={5 * 1000}>
                  You turn off your phone - you should try to sleep. You pull
                  the covers up to your chin, although your head is still
                  throbbing.
                </FadeIn>

                <FadeIn wrapper={animated("p")} delayTime={5 * 1200}>
                  Bzzzzt
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 1800}>
                  <p>
                    The phone is vibrating - someone's calling. Should you
                    answer it? Probably not, as it’ll just keep you up. Or are
                    you{" "}
                    <Nav
                      text="forgetting something"
                      next={Next.Section}
                      tag="continuePhoneVibrating"
                    />
                    {"?"}
                  </p>
                </FadeIn>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col>
              <FadeIn wrapper={animated("p")} delayTime={5 * 200}>
                Oh yeah—you called mum a while back, didn’t you? You check your
                phone and you’ve missed a call from her. You should dial back.
              </FadeIn>

              <FadeIn wrapper={animated("div")} delayTime={5 * 800}>
                <p>She picks up on the third {" "}<Nav text="ring" next={Next.Section} tag="callMom" />{"."}</p>
              </FadeIn>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
            <Row>
                <Col>
                <FadeIn wrapper={animated("p")} delayTime={5 * 200}>
                "Hi, honey. I just saw your call, are you OK?"
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 800}>
                "Oh hi mum. No worries. Just wanted to check how you’re doing
                but I realised it was far too early for you. I can hang up."
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 1000}>
                "No no, I'm glad you called. Have you eaten yet?"
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 1700}>
                “Not yet but that's because I'm pretty tired. But don’t worry
                about me, I think it was just overdue sleep and I’m coming down
                with something. You know. Work.”
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 1900}>
                “Hmm, OK honey. You need to take care of yourself.”
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 2100}>
                “I will”
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 2500}>
                “Make sure you eat right and sleep well. No screens before bed.”
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 2900}>
                “Yeah, I know.”
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 3000}>
                “OK. I’m going to let you get on with your day.”
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 3300}>
                “You can call me anytime, you know.”
              </FadeIn>

              <FadeIn wrapper={animated("div")} delayTime={5 * 3600}>
                <p>“I know...
                <Nav text="Bye mom" next={Next.Section} tag="endMomCalling" />
                {'"'}</p>
              </FadeIn>
                </Col>
                <Col></Col>
            </Row>
        </Container>
      </Section>

      <Section>
        <Container>
            <Row>
                <Col>
                <FadeIn wrapper={animated("p")}>
                Hearing her voice makes you feel a little better, as if for a
                second there wasn’t ten thousand kilometres between you both.
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 800}>
                Drifting in and out of consciousness, you fall into a weak
                sleep.
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 1300}>
                *RIIIING.*
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 2000}>
                That’s the doorbell. You glance at your clock: 21:45.{" "}
                <Nav text="What is it?" next="open_door" tag="doorbellRing" />
              </FadeIn>
                </Col>
                <Col></Col>
            </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

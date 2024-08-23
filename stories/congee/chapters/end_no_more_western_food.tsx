import { Section, Chapter, NavBlock } from "core/components";
import { PageType } from "core/types";

import useChapter from "core/hooks/use-chapter";

import { Container, Row, Col } from "react-bootstrap";

import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";
import styles from 'public/stories/congee/styles/Index.module.scss';

export const Page: PageType = () => {
  const chapter = useChapter();

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col lg={4}></Col>
            <Col lg={4} style={{ position: "relative" }}>
              <div>
                <FadeIn wrapper={animated("div")} delayTime={5 * 600}>
                  <p>
                    "No more Western food day? That's great. But it does imply
                    that every other day IS a Western food day?"
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 1300}>
                  <p>“Don't make me lose my appetite.”</p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 1700}>
                  <p>You both smile.</p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 2000}>
                  <p>
                    Deep into the night, the wind still howls against the
                    windows and the cold floorboards nip at your heels.
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 2600}>
                  <p>
                    But the congee sits warm in your stomach. You feel better.
                  </p>
                </FadeIn>

                <FadeIn wrapper={animated("div")} delayTime={5 * 2900}>
                  <p>
                    And you have a fleeting thought that—just for a beautiful
                    moment—you’ve found a small part of home in this kitchen.
                  </p>
                </FadeIn>
                <NavBlock instructionClassName={styles.instruction}  text="" next="end" tag="endCongee" />
              </div>
            </Col>
            <Col lg={4}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

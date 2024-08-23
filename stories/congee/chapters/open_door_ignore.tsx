import { Section, Chapter, NavBlock } from "core/components";
import { PageType } from "core/types";

import { Container, Row, Col } from "react-bootstrap";

import useChapter from "core/hooks/use-chapter";
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
            <Col lg={6}>
              <p>
                You aren’t expecting anybody. It's probably some kids playing a
                prank. You roll over and close your eyes.
              </p>
              <FadeIn wrapper={animated("p")} delayTime={5 * 200}>
                *RING.*
              </FadeIn>
              <FadeIn wrapper={animated("p")} delayTime={5 * 400}>
                *RIING.*
              </FadeIn>
              <FadeIn wrapper={animated("p")} delayTime={5 * 600}>
                *RIIING.*
              </FadeIn>
              <FadeIn wrapper={animated("p")} delayTime={5 * 800}>
                *RIIIING.*
              </FadeIn>
              <FadeIn wrapper={animated("div")} delayTime={5 * 800}>
                <p>
                  Arghh... They really want you to open it.
                </p>
              </FadeIn>

              <NavBlock instructionClassName={styles.instruction} 
                    text=""
                    next="open_door_open"
                    tag="openTheDoorAnyway"
                  />
            </Col>

            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

import { Section, Chapter, Nav } from "core/components";
import { PageType } from "core/types";

import { Container, Row, Col } from "react-bootstrap";

import useChapter from "core/hooks/use-chapter";
import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";

export const Page: PageType = () => {
  const chapter = useChapter();

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col>
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
                  Arghh... They really want you to{" "}
                  <Nav
                    text="open it"
                    next="open_door_open"
                    tag="openTheDoorAnyway"
                  />
                  {"."}
                </p>
              </FadeIn>
            </Col>

            <Col></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

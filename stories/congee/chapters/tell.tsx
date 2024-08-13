import { Section, Chapter } from "core/components";
import { PageType } from "core/types";

import { Container, Row, Col } from "react-bootstrap";
import { choiceBlock } from "core/features/choice";

import colors from "public/themeColors.module.scss";
import { BulletedList } from "core/components/widgets";
import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";

export const Page: PageType = () => {
  const tag = "congee_tell";

  return (
    <Chapter filename="tell">
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <p>
                You fumble for your phone and call mom. It rings endlessly but
                she doesn’t pick up.
              </p>

              <FadeIn wrapper={animated("p")} delayTime={5*200}>
                Hmm...
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5*400}>
                Oh yeah, it's early morning at home. It's Saturday, so she is
                probably still sleeping in now. "Hmm, should I...
              </FadeIn>

              <FadeIn wrapper={animated("div")} delayTime={5*600}>
                {choiceBlock(
                  tag,
                  "handedness",
                  1,
                  `${colors.lightYellow}`,
                  `${colors.dark}`,
                  BulletedList
                )}
              </FadeIn>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

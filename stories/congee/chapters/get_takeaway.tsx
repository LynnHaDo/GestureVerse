import { Section, Chapter, Artwork } from "core/components";
import { choiceBlock } from "core/features/choice";
import { PageType } from "core/types";

import useChapter from "core/hooks/use-chapter";

import { Container, Row, Col } from "react-bootstrap";

import colors from "public/themeColors.module.scss";
import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";
import { BulletedList } from "core/components/widgets";

export const Page: PageType = () => {
  const chapter = useChapter();
  const tag = "congee_sub_options_takeaway";

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col>
              <p>
                You load up their website. It’s pretty clunky, and the menu is a
                .jpg on their website.
              </p>
              <FadeIn wrapper={animated("div")} delayTime={1000}>
                <p>Sigh. You zoom into the menu.</p>
              </FadeIn>

              <FadeIn wrapper={animated("div")} delayTime={2800}>
                <p>Wait... No congee?</p>
              </FadeIn>

              <FadeIn wrapper={animated("div")} delayTime={3000}>
                {choiceBlock(
                  tag,
                  "handedness",
                  1,
                  `${colors.lightYellow}`,
                  `${colors.dark}`,
                  BulletedList,
                  null,
                  true
                )}
              </FadeIn>
            </Col>
            <Col>
              <FadeIn wrapper={animated("div")} delayTime={1600}>
                <Artwork
                  link="https://i.imgur.com/you2Ff2.png"
                  source="https://imgur.com/you2Ff2"
                  name="Chinese local restaurant menu, Digital image"
                  width="350px"
                />
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

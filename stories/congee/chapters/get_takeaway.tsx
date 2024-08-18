import { Section, Chapter, Artwork, Nav } from "core/components";
import { choiceBlock } from "core/features/choice";
import { PageType, useAppDispatch } from "core/types";

import useChapter from "core/hooks/use-chapter";
import { useEffect, useMemo } from "react";
import { updateVariable } from "core/features/variable-manager";

import { Container, Row, Col } from "react-bootstrap";

import colors from "public/themeColors.module.scss";
import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";
import { BulletedList } from "core/components/widgets";
import { useVariable } from "core/hooks/use-variable";

export const Page: PageType = () => {
  const chapter = useChapter();
  const tag = "congee__sub_options_takeaway";

  const dispatch = useAppDispatch();
  const doordash = useVariable("congee__doordash");

  let displayText1: string =
    "You load up their website. It’s pretty clunky, and the menu is a .jpg on their website.";
  let displayText2: string = "Sigh. You zoom into the menu.";
  let displayText3: string = "Wait... No congee?";

  if (doordash) {
    displayText1 = "Hmm... Let's see";
    displayText2 = "You scroll through the whole list..."
  }

  useEffect(() => {
    dispatch(updateVariable("congee__takeaway", true));
  }, [])

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col lg={6} style={{position: 'relative'}}>
              <p>{displayText1}</p>
              <FadeIn wrapper={animated("div")} delayTime={1000}>
                <p>{displayText2}</p>
              </FadeIn>

              <FadeIn wrapper={animated("div")} delayTime={2800}>
                <p>{displayText3}</p>
              </FadeIn>

              <FadeIn wrapper={animated("div")} delayTime={3000}>
                {doordash ? (
                  <Nav
                    tag={tag}
                    text="No more searching today..."
                    next="get_finish"
                  />
                ) : (
                  choiceBlock(
                    tag,
                    "handedness",
                    1,
                    `${colors.lightYellow}`,
                    `${colors.dark}`,
                    BulletedList,
                    null,
                    false
                  )
                )}
              </FadeIn>
            </Col>
            <Col lg={6}>
              <FadeIn wrapper={animated("div")} delayTime={1600}>
                <Artwork
                  link="https://i.imgur.com/you2Ff2.png"
                  source="https://imgur.com/you2Ff2"
                  name="Chinese local restaurant menu, Digital image"
                  width="80%"
                  position={{
                    margin: '20px auto',
                    padding: 0
                  }}
                />
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

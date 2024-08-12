import { Section, Chapter, Nav, Artwork } from "core/components";
import { Next, PageType } from "core/types";
import { choiceBlock } from "core/features/choice";

import { Container, Row, Col } from "react-bootstrap";

import useChapter from "core/hooks/use-chapter";

import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";
import colors from "public/themeColors.module.scss";
import { BulletedList } from "core/components/widgets";

export const Page: PageType = () => {
  const chapter = useChapter();
  const tag = "congee_end";

  return (
    <Chapter filename={chapter.filename} showOnlyCurrentSection>
      <Section>
        <Container>
          <Row>
            <Col>
              <p>“Uh… hi.” You stare.</p>
              <FadeIn wrapper={animated("p")} delayTime={5 * 200}>
                It's Allison.
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 800}>
                "I wanted to make sure you really weren’t dying. I have an
                interest in your continued existence.", she said.
              </FadeIn>
              <FadeIn wrapper={animated("p")} delayTime={5 * 1000}>
                "Um ... yep, still alive. Is everything okay? Come in-"
              </FadeIn>
              <FadeIn wrapper={animated("div")} delayTime={5 * 1300}>
                <p>
                  "Wait...{" "}
                  <Nav
                    text="Is that congee?"
                    next={Next.Section}
                    tag="allisonBringCongee"
                  />
                  {'"'}
                </p>
              </FadeIn>
            </Col>

            <Col>
              <FadeIn wrapper={animated("p")} delayTime={5 * 400}>
                <Artwork
                  link="https://i.imgur.com/y3a2Eck.gif"
                  source="https://i.imgur.com/y3a2Eck"
                  name="Allison, GIF image"
                  width="350px"
                />
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col>
              <p>“Yep”, she replied.</p>
              <FadeIn wrapper={animated("p")} delayTime={5 * 600}>
                “I think ... you might be the best person alive.”
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 900}>
                “I agree.”
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 1200}>
                At the kitchen table, Allison removes the lid to the container.
                A hot steam rises into the air, softly curling into itself. You
                smell chicken, rice, salad onions, ginger, garlic. Congee.
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 1400}>
                “How did you... Where did you buy this?”
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 1600}>
                “I made it. I was feeling a little homesick myself and since you
                were ill too, well, I figured two birds one stone...”
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 1600}>
                <Nav
                  text="'Let's get some bowls...'"
                  next={Next.Section}
                  tag="startEatingCongee"
                />
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
              <p>
                You both sit in the kitchen, slurping at the congee. The rice is
                a bit chunkier than usual but it is unmistakeably familiar. The
                warmth of the congee makes you glow inside out.
              </p>

              <FadeIn wrapper={animated("p")} delayTime={5 * 600}>
                “Hey, Ally.”
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 900}>
                “Hmm?”
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 1200}>
                “Could we maybe cook congee together once a month ... or
                something?”
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 1400}>
                “That sounds good. We'll need to think of a name for it,
                though."
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 1600}>
                “Ha! How about ...
              </FadeIn>

              <FadeIn wrapper={animated("div")} delayTime={5 * 1800}>
                {choiceBlock(
                  tag,
                  "gesture",
                  1,
                  `${colors.lightYellow}`,
                  `${colors.dark}`,
                  BulletedList
                )}
              </FadeIn>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

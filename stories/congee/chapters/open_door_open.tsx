import { Section, Chapter, NavBlock, Artwork } from "core/components";
import { Next, PageType } from "core/types";
import { choiceBlock } from "core/features/choice";

import { Container, Row, Col } from "react-bootstrap";

import useChapter from "core/hooks/use-chapter";

import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";
import { BulletedList } from "core/components/widgets";

import styles from 'public/stories/congee/styles/Index.module.scss';

export const Page: PageType = () => {
  const chapter = useChapter();
  const tag = "congee__end";

  return (
    <Chapter filename={chapter.filename} showOnlyCurrentSection>
      <Section>
        <Container>
          <Row>
            <Col lg={6} style={{ position: "relative" }}>
              <p>“Uh… hi.” You stare.</p>
              <FadeIn wrapper={animated("p")} delayTime={5 * 200}>
                It's Allison.
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={5 * 800}>
                "I wanted to make sure you really weren’t dying. I have an
                interest in your continued existence.", she said.
              </FadeIn>
              <FadeIn wrapper={animated("p")} delayTime={5 * 1200}>
                "Um ... yep, still alive. Is everything okay? Come in...{" "}
                <span>Wait... Is that congee?</span>
              </FadeIn>

              <NavBlock instructionClassName={styles.instruction}  text="" next={Next.Section} tag="allisonBringCongee" />
            </Col>

            <Col lg={6}>
              <FadeIn wrapper={animated("div")} delayTime={5 * 400}>
                <Artwork
                  link="https://i.imgur.com/y3a2Eck.gif"
                  source="https://i.imgur.com/y3a2Eck"
                  name="Allison, GIF image"
                  width="80%"
                  position={{
                    margin: "0 auto",
                  }}
                />
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col lg={6} style={{ position: "relative" }}>
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

              <FadeIn wrapper={animated("p")} delayTime={5 * 1800}>
                'Let's get some bowls...'
              </FadeIn>

              <NavBlock instructionClassName={styles.instruction}  text="" next={Next.Section} tag="startEatingCongee" />
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col lg={6}>
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

              {choiceBlock(tag, "gesture", BulletedList, null,
                true,
                'navigation',
                '',
                '',
                null,
                `${styles.instruction}`)}
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

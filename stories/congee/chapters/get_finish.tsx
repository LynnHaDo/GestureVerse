import { Section, Chapter, NavBlock, R } from "core/components";
import { Next, PageType } from "core/types";

import useChapter from "core/hooks/use-chapter";

import { Container, Row, Col } from "react-bootstrap";
import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";

import styles from 'public/stories/congee/styles/Index.module.scss';

export const Page: PageType = () => {
  const chapter = useChapter();

  return (
    <Chapter filename={chapter.filename} showOnlyCurrentSection>
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <p>
                You pull the blanket over your head. You really wanted some
                congee. It would’ve brought you a lot of comfort.
              </p>
              <p>
                Sure, you're feeling extra sulky because your head is throbbing
                and you feel unwell.
              </p>
              <p>
                But this is a craving that just won't quit. It's all you can
                think about. Right now, all you want is something familiar.
              </p>
              <NavBlock instructionClassName={styles.instruction} 
                text=""
                next={Next.Section}
                tag="openSomethingFamiliar"
              />
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <p>You moved from Hong Kong to the US a year ago.</p>
              <p>
                Coming off the plane was weird. The air smelled different. The
                shops and restaurants in the airport were unfamiliar. You told
                yourself that these names would soon become so second nature in
                time, that they’d just roll off your tongue.
              </p>
              <p>
                There was also a distance when you spoke to people—you hadn't
                figured out whether it was an American thing or maybe it was something about you.
              </p>

              <NavBlock instructionClassName={styles.instruction} 
                  text=""
                  next={Next.Section}
                  tag="openSomethingAboutYou"
                />
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col lg={6} style={{ position: "relative" }}>
              <p>
                Allison, who went to the same school as you, came to the States
                the month after and you’ve kept in touch. She reminds you of how
                things were before. Sometimes that’s not a good thing.
              </p>
              <p>
                For months you kept trying to find *home* in little things, like
                the Chinese shops that sold chocolate pandas and seaweed and
                mochi and sweet tofu. You even took solace in instant noodles,
                which you hated back in Hong Kong.
              </p>
              <p>It was an adjustment period.</p>
              <p>Only, you’re not sure if you’re past it yet.</p>
              <FadeIn wrapper={animated("div")} delayTime={2800}>
                <NavBlock instructionClassName={styles.instruction} 
                  text="Hmm... Is Allison still online?"
                  next="get_text_allison"
                  tag="startTextingAllisonAgain"
                />
              </FadeIn>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

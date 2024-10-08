import { Section, Chapter, NavBlock } from "core/components";
import { PageType } from "core/types";
import { animated } from "@react-spring/web";
import { Image } from "react-bootstrap";
import styles from "public/stories/procrastinate/styles/Index.module.scss";

import FadeIn from "core/components/ui/fadein";
import useChapter from "core/hooks/use-chapter";

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const chapter = useChapter();

  return (
    <>
      <Chapter filename="nap">
        <Section>
          <Container>
            <Row>
              {/* Giphy */}
              <div
                style={{
                  width: "70%",
                  paddingBottom: "20px",
                }}
              >
                <Image src="/stories/procrastinate/images/nap.gif" fluid />
              </div>
              <p>
                <a href="https://giphy.com/gifs/nehumanesociety-sleep-nap-time-mD5OczI0Xyz5P0hy4Y">
                  via Giphy
                </a>
              </p>

              <FadeIn wrapper={animated("p")} delayTime={500}>
                Zzzzzz
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={800}>
                Zzzzzz
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={1100}>
                Zzzzzz
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={1400}>
                Zzzzzz
              </FadeIn>

              <FadeIn wrapper={animated("p")} delayTime={1700}>
                Wait, what time is it?
              </FadeIn>
              <NavBlock instructionClassName={styles.instruction} 
                text=""
                tag={`moveFrom${chapter.filename}toTime`}
                next="nap_time"
              />
            </Row>
          </Container>
        </Section>
      </Chapter>
    </>
  );
};

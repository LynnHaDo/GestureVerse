import { Section, Chapter, Nav } from "core/components";
import { PageType, useAppDispatch } from "core/types";
import { useEffect } from "react";
import { incrementScore } from "core/features/score";
import { animated } from "@react-spring/web";

import FadeIn from "core/components/ui/fadein";
import { updateVariable } from "core/features/variable-manager";
import useChapter from "core/hooks/use-chapter";

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  const chapter = useChapter();

  useEffect(() => {
    dispatch(incrementScore());
    dispatch(updateVariable("nap", true));
  }, []);

  return (
    <>
      <Chapter filename="nap_time">
        <Section>
          <Container>
            <Row>
              <p>
                That was a little longer than I hoped, but naps are so
                wonderful. I probably just destroyed my sleep schedule, but it
                was worth it.
              </p>

              <FadeIn wrapper={animated("p")} delayTime={600}>
                <Nav
                  text="Let's get out of bed..."
                  next="menu"
                  tag={`moveFrom${chapter.filename}toMenu`}
                />
              </FadeIn>
            </Row>
          </Container>
        </Section>
      </Chapter>
    </>
  );
};

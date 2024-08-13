import { Section, Chapter, Nav } from "core/components";
import { PageType, useAppDispatch } from "core/types";
import { FadeIn } from "core/components/ui";
import { useEffect } from "react";
import { incrementScore } from "core/features/score";
import { updateVariable } from "core/features/variable-manager";
import useChapter from "core/hooks/use-chapter";

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  const chapter = useChapter();

  useEffect(() => {
    dispatch(incrementScore());
    dispatch(updateVariable("game", true));
  }, []);

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <FadeIn>
              <p>Honk</p>
            </FadeIn>
            <FadeIn>
              <p>Honk</p>
            </FadeIn>
            <FadeIn>
              <p>Honk</p>
            </FadeIn>
            <FadeIn>
              <p>Honk</p>
            </FadeIn>

            <FadeIn>
              <p>
                I'm bored. Let's go{" "}
                <Nav
                  text="back"
                  next="menu"
                  tag={`moveFrom${chapter.filename}toMenu`}
                />
                {"."}
              </p>
            </FadeIn>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

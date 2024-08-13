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
    dispatch(updateVariable('game', true))
  }, []);

  return (

      <Chapter filename={chapter.filename}>
        <Section>
        <Container>
          <Row>
          <p>
            I don't know why I always get recommended articles about Tesla. I
            don't like them that much and I'll never be able to afford one. Yet
            somehow, I read these articles without fail everytime they are in my
            feed. Does Google know something about me that I don't know about
            myself? I hate it when I think about a very specific thing and then
            it shows up in an article a couple hours later. Like how do they
            know that?
          </p>

          <FadeIn>
            <p>
              My eyes are soaring from too much Internet. Let's do something{" "}
              <Nav
                text="else"
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

/** Static components */
import { Section, Chapter, Nav } from "core/components";
import FadeIn from "core/components/ui/fadein";

/** Hooks */
import { PageType, useAppDispatch } from "core/types";
import { useEffect } from "react";
import { incrementScore } from "core/features/score";
import useChapter from "core/hooks/use-chapter";
import { updateVariable } from "core/features/variable-manager";

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  const chapter = useChapter();

  useEffect(() => {
    dispatch(incrementScore());
    dispatch(updateVariable('clean', true));
  }, []);
  
  return (
    <Chapter filename="clean_start">
      <Section>
      <Container>
      <Row>
        <p>
          I spend an hour organizing everything and making sure to not do my
          homework. Cleaning your room is only fun when you have other things to
          do.
        </p>
        <FadeIn>
          <p>
            Hmm... Are there any{" "}
            <Nav
              text="todo items"
              next="menu"
              tag={`moveFrom${chapter.filename}toMenu`}
            />{" "}
            left
            {"?"}
          </p>
        </FadeIn>
        </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

import { Section, Chapter, Nav } from "core/components";
import FadeIn from "core/components/ui/fadein";
import { PageType, useAppDispatch } from "core/types";
import useChapter from "core/hooks/use-chapter";

import { updateVariable } from "core/features/variable-manager";

import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";

export const Page: PageType = () => {
  const chapter = useChapter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateVariable('desk', true));
  })
  
  return (
    <Chapter filename="clean_desk">
      <Section>
        <Container>
          <Row>
            <p>
              This is the worst part. My desk is made of black glass, so it
              shows dust like crazy. There's multiple glass cups, and tons of
              random things that I dont have a place for just sitting there,
              like my W-2 from last year and a Pacman amiibo.
            </p>
            <FadeIn>
              <p>
                Hmm... What{" "}
                <Nav
                  text="else"
                  next="clean"
                  tag={`moveFrom${chapter.filename}toClean`}
                />
                {"?"}
              </p>
            </FadeIn>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

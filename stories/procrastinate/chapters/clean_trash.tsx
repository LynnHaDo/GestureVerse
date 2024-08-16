import { Section, Chapter, Nav } from "core/components";
import FadeIn from "core/components/ui/fadein";
import { PageType, useAppDispatch } from "core/types";
import useChapter from "core/hooks/use-chapter";
import { useEffect } from "react";

import { Container, Row } from "react-bootstrap";
import { updateVariable } from "core/features/variable-manager";

export const Page: PageType = () => {
  const chapter = useChapter();
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(updateVariable('trash', true));
  })

  return (
    <Chapter filename={chapter.filename}>
      <Section>
      <Container>
      <Row>
        <p>
          My trashcan is overflowing from the loose paper and food wrappers I
          have shoved into it. Every day I stomp it down a little more, but if I
          don't empty it soon it will inevitably take over my room.
        </p>
        <FadeIn>
          <p>
            Hmm... What {" "}
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

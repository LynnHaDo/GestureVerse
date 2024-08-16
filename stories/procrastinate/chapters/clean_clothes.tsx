import { Section, Chapter, Nav } from "core/components";
import FadeIn from "core/components/ui/fadein";
import { PageType, useAppDispatch } from "core/types";
import { Container, Row } from "react-bootstrap";

import useChapter from "core/hooks/use-chapter";
import { useEffect } from "react";
import { updateVariable } from "core/features/variable-manager";

export const Page: PageType = () => {
  const chapter = useChapter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateVariable('clothes', true));
  })

  return (
    <Chapter filename={chapter.filename}>
      <Section>
      <Container>
      <Row>
        <p>
          There's a Ratatouille movie shirt and the same pair of pants I've been
          wearing every day just laying on the ground. I love my Ratatouille
          shirt, it's my favorite movie, and you never see people wearing
          Ratatouille stuff. It always gets tons of looks.
        </p>
        <FadeIn>
            <p>Hmm... What {" "}
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

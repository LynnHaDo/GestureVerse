import { Section, Chapter, Nav, C } from "core/components";
import FadeIn from "core/components/ui/fadein";
import { incrementScore } from "core/features/score";
import { updateVariable } from "core/features/variable-manager";
import { Next, PageType, useAppDispatch } from "core/types";

import { useEffect } from "react";
import useChapter from "core/hooks/use-chapter";

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  const chapter = useChapter();
  useEffect(() => {
    dispatch(incrementScore());
    dispatch(updateVariable("tv", true));
  }, []);

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row style={{ position: "relative" }}>
            <FadeIn>
              <p>...</p>
            </FadeIn>

            <FadeIn>
              <p>
                <C
                  options={[["Continue watching 'The Office'"]]}
                  tag="stayAtTheOffice"
                  last="Still watching"
                  next={Next.None}
                />{" "}
                or{" "}
                <Nav text="no" next={Next.Section} tag="notStayAtTheOffice" />
                {"?"}
              </p>
            </FadeIn>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row style={{ position: "relative" }}>
            <p>Binging a series is way more fun than doing homework.</p>

            <p>
              What should I do{" "}
              <Nav
                text="next"
                next="menu"
                tag={`moveFrom${chapter.filename}TheOffice`}
              />
              {"?"}
            </p>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

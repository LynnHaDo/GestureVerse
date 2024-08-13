/** Static components */
import { Section, Chapter, Nav } from "core/components";
import FadeIn from "core/components/ui/fadein";

/** Hooks */
import { PageType, useAppDispatch, Option } from "core/types";
import { useEffect } from "react";
import { incrementScore } from "core/features/score";
import { updateVariable } from "core/features/variable-manager";
import { useVariable } from "core/hooks/use-variable";
import useChapter from "core/hooks/use-chapter";
import { makeChoice } from "core/features/choice";

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  const chapter = useChapter();
  const chili = useVariable("chili");

  let tag = `moveFrom${chapter.filename}toMenu`;
  let next = "menu";
  let text = "things";

  let displayText: string = chili
    ? "I can't eat more chili, that's too depressing. Two cans in a day? One is bad enough."
    : "Perhaps I shall partake in a can of chili. Cracking open a can of chili and heating \
    it up slowly on the stove is the pinnacle of fine dining. Maybe I should crack a bottle \
    of wine to enjoy with my delicious meal. Perhaps a fine Zinfandel or Cabernet Sauvignon \
    (2009 was a good year) would make an excellent pairing for my beef morsels and slow cooked \
    bean medley in a hearty tomato and herb reduction. That hits the spot. Now I can get back to \
    procrastinating.";

  useEffect(() => {
    dispatch(incrementScore());
    dispatch(updateVariable("eat", true));
  });

  const updateChili = (option: Option): void => {
    dispatch(updateVariable("chili", true));
    dispatch(makeChoice(tag, option, next, next));
  };

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <p>{displayText}</p>
            <FadeIn>
              <p>
                Hmm... Are there any interesting{" "}
                <Nav
                  text={text}
                  next={next}
                  tag={`moveFrom${chapter.filename}toMenu`}
                  handler={updateChili}
                />{" "}
                left to do
                {"?"}
              </p>
            </FadeIn>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

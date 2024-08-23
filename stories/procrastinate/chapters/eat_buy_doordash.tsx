import { Section, Chapter, Nav, NavBlock } from "core/components";
import { PageType, useAppDispatch, Option } from "core/types";

import useChapter from "core/hooks/use-chapter";
import { useEffect } from "react";
import { useVariable } from "core/hooks/use-variable";
import { incrementScore } from "core/features/score";
import { updateVariable } from "core/features/variable-manager";
import { makeChoice } from "core/features/choice";

import { Container, Row } from "react-bootstrap";
import FadeIn from "core/components/ui/fadein";
import styles from 'public/stories/procrastinate/styles/Index.module.scss';

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  const chapter = useChapter();
  const doordash = useVariable("doordash");

  let tag = `moveFrom${chapter.filename}toMenu`;
  let next = "menu";
  let text = "things";

  let displayText: string = doordash
    ? "No... That's enough fast food for today."
    : "I select a burger and a large fry, with a medium coke (because a large is just too much for today). \
    Also I have to get hot mustard with it because that's my favorite sauce from there.";

  useEffect(() => {
    dispatch(incrementScore());
    dispatch(updateVariable("eat", true));
  });

  const updateDoordash = (option: Option): void => {
    dispatch(updateVariable("doordash", true));
    dispatch(makeChoice(tag, option, next, next));
  };

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <p>{displayText}</p>
            <FadeIn>
              <p>Hmm... Are there any interesting things left to do?</p>
            </FadeIn>
            <NavBlock instructionClassName={styles.instruction} 
              text=""
              next="menu"
              tag={`moveFrom${chapter.filename}toMenu`}
              handler={updateDoordash}
            />
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

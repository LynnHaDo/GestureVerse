/** Static components */
import { Section, Chapter, NavBlock } from "core/components";
import FadeIn from "core/components/ui/fadein";

/** Hooks */
import { PageType, useAppDispatch, Option } from "core/types";
import { useEffect } from "react";
import { makeChoice } from "core/features/choice";
import { incrementScore } from "core/features/score";
import { updateVariable } from "core/features/variable-manager";
import { useVariable } from "core/hooks/use-variable";
import useChapter from "core/hooks/use-chapter";

import { Container, Row } from "react-bootstrap";
import styles from 'public/stories/procrastinate/styles/Index.module.scss';

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  const chapter = useChapter();
  const freezer = useVariable("freezer");

  const tag = `moveFrom${chapter.filename}toMenu`;
  let next = "menu";

  let displayText: string = freezer
    ? "It is completeley barren."
    : "Mmmmm yes a frozen Amy's bean and cheese burrito. The organic beans and cheese lend themselves beautifully to the whole wheat tortilla they are so tenderly wrapped up in. I expertly pop one of these bad boys out of their packaging and slap it onto a plate, microwaving for NO MORE and NO LESS than 65 seconds, only to flip and repeat for the same amount of time. Afterwards, a heavy dousing of hot sauce is recommended. I am satiated. Now I can waste more time.";

  useEffect(() => {
    dispatch(incrementScore());
    dispatch(updateVariable("eat", true));
  });

  const updateFreezer = (option: Option) => {
    dispatch(updateVariable("freezer", true));
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
              handler={updateFreezer}
            />
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

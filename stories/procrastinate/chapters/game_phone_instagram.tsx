import { Section, Chapter, Nav, NavBlock } from "core/components";
import { PageType, useAppDispatch } from "core/types";
import { FadeIn } from "core/components/ui";
import { useEffect } from "react";
import { incrementScore } from "core/features/score";
import { updateVariable } from "core/features/variable-manager";
import useChapter from "core/hooks/use-chapter";

import { Container, Row } from "react-bootstrap";
import styles from 'public/stories/procrastinate/styles/Index.module.scss';

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
            <p>
              As I expected, I keep refreshing my feed to see the same photos. I
              begin the endless cycle of opening Instagram, then opening
              Snapchat, then Facebook, and starting again. I see for the 10th
              time on Instagram that an old friend I haven't talked to in years
              just got a new puppy. Nice.
            </p>

            <FadeIn>
              <p>Okay enough time on the Internet. What's next?</p>
            </FadeIn>

            <NavBlock instructionClassName={styles.instruction} 
              text=""
              next="menu"
              tag={`moveFrom${chapter.filename}toMenu`}
            />
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

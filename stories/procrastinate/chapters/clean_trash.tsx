import { Section, Chapter, NavBlock } from "core/components";
import FadeIn from "core/components/ui/fadein";
import { PageType, useAppDispatch } from "core/types";
import useChapter from "core/hooks/use-chapter";
import { useEffect } from "react";

import styles from "public/stories/procrastinate/styles/Index.module.scss";

import { Container, Row } from "react-bootstrap";
import { updateVariable } from "core/features/variable-manager";

export const Page: PageType = () => {
  const chapter = useChapter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateVariable("trash", true));
  });

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <p>
              My trashcan is overflowing from the loose paper and food wrappers
              I have shoved into it. Every day I stomp it down a little more,
              but if I don't empty it soon it will inevitably take over my room.
            </p>
            <FadeIn>
              <div className={styles.p}>Hmm... What else?</div>
            </FadeIn>
            <NavBlock instructionClassName={styles.instruction} 
              text=""
              next="clean"
              tag={`moveFrom${chapter.filename}toClean`}
            />
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

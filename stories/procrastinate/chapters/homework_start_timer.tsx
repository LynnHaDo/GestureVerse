import { Section, Chapter, NavBlock } from "core/components";
import { PageType, useAppDispatch } from "core/types";
import { choiceBlock, makeChoice } from "core/features/choice";

import useChapter from "core/hooks/use-chapter";
import { updateVariable } from "core/features/variable-manager";

import styles from "public/stories/procrastinate/styles/Index.module.scss";

import { Container, Row } from "react-bootstrap";
import { BulletedList } from "core/components/widgets";
import { useVariable } from "core/hooks/use-variable";

export const Page: PageType = () => {
  /** Current chapter */
  const chapter = useChapter();
  /** App dispatch */
  const dispatch = useAppDispatch();

  const tag = "procrastinate__grace_period";
  const mins = useVariable(tag);

  const handleCounterInput = () => {
    let valNum = parseInt(mins);

    dispatch(updateVariable("counterMins", valNum));
    dispatch(
      makeChoice("timeSet", "start_again", "homework_start", "homework_start")
    );
  };

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <div className={styles.timeDialog}>
              <p>Remind me how long the grace period is...</p>

              {choiceBlock(
                tag,
                "gesture",
                BulletedList,
                null,
                true,
                "variableSetter",
                "",
                "",
                null,
                `${styles.instruction}`
              )}

              {mins != null && mins != undefined && (
                <>
                  <p>Maybe college is still lenient with me...</p>
                  <NavBlock instructionClassName={styles.instruction} 
                    text=""
                    next="homework_start"
                    handler={handleCounterInput}
                  />
                </>
              )}
            </div>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

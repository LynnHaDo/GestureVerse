import { Section, Chapter } from "core/components";
import { PageType, useAppDispatch } from "core/types";
import { makeChoice } from "core/features/choice";

import useChapter from "core/hooks/use-chapter";
import { updateVariable } from "core/features/variable-manager";

import styles from "public/stories/procrastinate/styles/Index.module.scss";

import "@ionic/react/css/core.css";

import { IonInput } from "@ionic/react";

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  /** Current chapter */
  const chapter = useChapter();
  /** App dispatch */
  const dispatch = useAppDispatch();

  const handleCounterInput = (val: string | number) => {
    if (typeof val == "string" && val.match("[0-9]+")) {
      let valNum = parseInt(val);

      if (valNum < 0) {
        return;
      }

      dispatch(updateVariable("counterMins", valNum));
      dispatch(
        makeChoice("timeSet", "start_again", "homework_start", "homework_start")
      );
    }
  };

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <div className={styles.timeDialog}>
              <p>Remind me how long the grace period is...</p>

              <IonInput
                label="Duration (minutes)"
                type="number"
                placeholder="10"
                labelPlacement="stacked"
                fill="outline"
                onIonChange={(e) => handleCounterInput(e.target.value)}
                className={styles.gracePeriodInput}
                required
              ></IonInput>
            </div>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

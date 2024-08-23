import {
  Section,
  Chapter,
  NavBlock,
} from "core/components";
import { Next, PageType, useAppDispatch } from "core/types";
import { makeChoice } from "core/features/choice";

import { useEffect } from "react";
import { useVariable } from "core/hooks/use-variable";
import useChapter from "core/hooks/use-chapter";
import { updateVariable } from "core/features/variable-manager";

import styles from "public/stories/procrastinate/styles/Index.module.scss";
import { Container, Row } from "react-bootstrap";

import {
  TextReplacements,
} from "core/components/constants/options";

export const Page: PageType = () => {
  /** Current chapter */
  const chapter = useChapter();
  /** App dispatch */
  const dispatch = useAppDispatch();

  /** Number of minutes left */
  let counterMins: number = useVariable("counterMins");

  const textsZero = TextReplacements[chapter.filename];
  const textsOne = TextReplacements[`${chapter.filename}_one`];
  const textsTwo = TextReplacements[`${chapter.filename}_two`];

  useEffect(() => {
    if (counterMins > 0) {
      setTimeout(() => {
        counterMins--;
        dispatch(updateVariable("counterMins", counterMins));
      }, 1000);
    }

    if (counterMins <= 0) {
      dispatch(
        makeChoice(
          "timeOut",
          "fail",
          "homework_start_again",
          "homework_start_again"
        )
      );
    }
  }, [counterMins]);

  return (
    <Chapter filename={chapter.filename} showOnlyCurrentSection>
      <Section>
        <Container>
          <Row>
            <p>{counterMins} minutes left...</p>

            {textsZero && (
              <div className={styles.panicWrapper}>
                {Object.entries(textsZero).map(([initial, later], i) => {
                  return (
                    <div key={i} className={styles.choiceContent}>
                      <span>{`${initial} `}</span>
                      <span>{`${later} `}</span>
                    </div>
                  );
                })}
              </div>
            )}
            <p>
              It's all about tradeoffs. I relaxed earlier but I relaxed too much
              so now I will suffer for it.
            </p>

            <NavBlock instructionClassName={styles.instruction}  text="" next={Next.Section} tag="goToPanicSectionTwo" />
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <p>{counterMins} minutes left...</p>

            {textsOne && (
              <div className={styles.panicWrapper}>
                {Object.entries(textsOne).map(([initial, later], i) => {
                  return (
                    <div key={i} className={styles.choiceContent}>
                      <span>{`${initial} `}</span>
                      <span>{`${later} `}</span>
                    </div>
                  );
                })}
              </div>
            )}

            <p>Oh well, guess I won't get to relax more tonight.</p>

            <NavBlock instructionClassName={styles.instruction}  text="" next={Next.Section} tag="goToPanicSectionThree" />
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <p>{counterMins} minutes left...</p>

            {textsTwo && (
              <div className={styles.panicWrapper}>
                {Object.entries(textsTwo).map(([initial, later], i) => {
                  return (
                    <div key={i} className={styles.choiceContent}>
                      <span>{`${initial} `}</span>
                      <span>{`${later} `}</span>
                    </div>
                  );
                })}
              </div>
            )}

            <p>Just a bit more...</p>

            <NavBlock instructionClassName={styles.instruction}  text="" next={Next.Section} tag="goToPanicSectionFour" />
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <p>DONE 🎉 🎉 🎉</p>
            <NavBlock instructionClassName={styles.instruction}  text="" next="homework_done" tag="goToHomeworkDone" />
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

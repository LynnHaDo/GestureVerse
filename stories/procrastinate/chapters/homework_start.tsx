import { Section, Chapter, Nav, C } from "core/components";
import { Next, PageType, useAppDispatch } from "core/types";
import { choiceBlock, makeChoice } from "core/features/choice";
import { BulletedList } from "core/components/widgets";

import { useVariable } from "core/hooks/use-variable";
import useChapter from "core/hooks/use-chapter";
import { useEffect, useState } from "react";
import { updateVariable } from "core/features/variable-manager";

import styles from "public/stories/procrastinate/styles/Index.module.scss";
import colors from "public/themeColors.module.scss";
import { animated } from "@react-spring/web";

import { TextReplacements } from "core/components/constants/options";
import { IonInput, IonItem } from "@ionic/react";

export const Page: PageType = () => {
  /** Current chapter */
  const chapter = useChapter();
  /** App dispatch */
  const dispatch = useAppDispatch();

  /** Number of minutes left */
  let counterMins: number = useVariable("counterMins");

  /** Whether or not to open the time dialog */
  let [openTimeDialog, setOpenTimeDialog] = useState(false);

  const textsZero = TextReplacements[chapter.filename];
  const textsOne = TextReplacements[`${chapter.filename}_one`];
  const textsTwo = TextReplacements[`${chapter.filename}_two`];

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

  return (
    <>
      <Chapter filename={chapter.filename}>
        <Section>
          <p>{counterMins} minutes left...</p>
          {textsZero && (
            <div className={styles.panicWrapper}>
              {Object.entries(textsZero).map(([initial, later], i) => {
                return (
                  <span key={i}>
                    <C
                      options={[[`${initial} `]]}
                      last={`${later} `}
                      tag={`item${i}IsClickedInTextsZero`}
                      next={Next.None}
                      className={styles.choiceContent}
                    />
                  </span>
                );
              })}
            </div>
          )}

          <p>
            <Nav
              text="It's all about tradeoffs. I relaxed earlier but I relaxed too much so now I will suffer for it."
              next={Next.Section}
              tag="goToPanicSectionTwo"
            />
          </p>
        </Section>

        <Section>
          {textsOne && (
            <div className={styles.panicWrapper}>
              {Object.entries(textsOne).map(([initial, later], i) => {
                return (
                  <span key={i}>
                    <C
                      options={[[`${initial} `]]}
                      last={`${later} `}
                      tag={`item${i}IsClickedInTextsOne`}
                      next={Next.None}
                      className={styles.choiceContent}
                    />
                  </span>
                );
              })}
            </div>
          )}

          <p>
            <Nav
              text="Oh well, guess I won't get to relax more tonight."
              next={Next.Section}
              tag="goToPanicSectionThree"
            />
          </p>
        </Section>

        <Section>
          {textsTwo && (
            <div className={styles.panicWrapper}>
              {Object.entries(textsTwo).map(([initial, later], i) => {
                return (
                  <span key={i}>
                    <C
                      options={[[`${initial} `]]}
                      last={`${later} `}
                      tag={`item${i}IsClickedInTextsTwo`}
                      next={Next.None}
                      className={styles.choiceContent}
                    />
                  </span>
                );
              })}
            </div>
          )}

          <p>
            <Nav
              text="Just a bit more..."
              next={Next.Section}
              tag="goToPanicSectionFour"
            />
          </p>
        </Section>

        <Section>
          <p>
            <Nav
              text="DONE 🎉🎉🎉"
              next="homework_done"
              tag="goToHomeworkDone"
            />
          </p>
        </Section>
      </Chapter>
    </>
  );
};

import { Section, Chapter, Nav, NavBlock } from "core/components";
import { PageType, useAppDispatch } from "core/types";
import FadeIn from "core/components/ui/fadein";

import { animated } from "@react-spring/web";

import { Container, Row } from "react-bootstrap";

import { useVariable } from "core/hooks/use-variable";
import { useEffect } from "react";
import { updateVariable } from "core/features/variable-manager";

import styles from 'public/stories/procrastinate/styles/Index.module.scss';

const roundTime = (date: Date) => {
  date.setMinutes(Math.round(date.getMinutes() / 5) * 5);
  date.setSeconds(Math.round(date.getSeconds() / 1000) * 1000);
  return date;
};

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  /** Number of minutes left */
  let timePadding: number = 30;

  const [nap, clean] = useVariable(null, ["nap", "clean"]);

  let displayText: string = "Hmm... Let's see what we have...";

  /** Date time config */
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  if (nap && clean) {
    timePadding = timePadding / 2;
  } else if (nap) {
    timePadding = timePadding * 0.75;
    displayText =
      "I have taken a nap a feel so refreshed. Maybe I should start looking into the homework...";
  } else if (clean) {
    timePadding = timePadding * 0.75;
    displayText =
      "Now that the place is clean, I should check for any deadlines...";
  }

  let deadline: Date = new Date(new Date().getTime() + timePadding * 1000 * 60);
  deadline = roundTime(deadline);
  let counterMins = Math.round(
    (deadline.getTime() - new Date().getTime()) / (1000 * 60)
  );

  useEffect(() => {
    dispatch(updateVariable("counterMins", counterMins));
  });

  return (
    <Chapter filename="homework">
      <Section>
        <Container>
          <Row>
            <p>{displayText}</p>

            <ul>
              <li>
                Art homework due date:{" "}
                {`${Intl.DateTimeFormat("en-US", dateOptions).format(
                  roundTime(new Date(new Date().getTime() + 1000 * 60 * 60 * 2))
                )}`}
              </li>
              <li>
                Math homework due date:{" "}
                {`${Intl.DateTimeFormat("en-US", dateOptions).format(
                  roundTime(new Date(new Date().getTime() + 1000 * 60 * 60))
                )}`}
              </li>
              <li>
                Sociology homework due date:{" "}
                {`${Intl.DateTimeFormat("en-US", dateOptions).format(
                  deadline
                )}`}{" "}
                (!!!)
              </li>
            </ul>

            <FadeIn wrapper={animated("div")} delayTime={500}>
              <p>
                OH NO THE SOCIOLOGY HOMEWORK IS LITERALLY DUE IN {counterMins}{" "}
                MINUTES.
              </p>
            </FadeIn>

            <p>
              I should start ASAP.
            </p>

            <NavBlock instructionClassName={styles.instruction}  text="" next="homework_start" tag="startHomework" />{" "}
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

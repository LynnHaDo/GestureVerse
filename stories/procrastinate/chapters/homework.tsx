import { Section, Chapter, Nav } from "core/components";
import { PageType, useAppDispatch } from "core/types";
import FadeIn from "core/components/ui/fadein";

import { animated } from "@react-spring/web";

import colors from "public/themeColors.module.scss";
import { useVariable } from "core/hooks/use-variable";
import { useEffect } from "react";
import { updateVariable } from "core/features/variable-manager";

const roundTime = (date: Date) => {
    date.setMinutes(Math.round(date.getMinutes() / 5) * 5);
    date.setSeconds(Math.round(date.getSeconds() / 1000) * 1000);
    return date;
  }

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  /** Number of minutes left */
  let timePadding: number = 6;

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
    timePadding = 3;
  } else if (nap) {
    timePadding = 4;
    displayText =
      "I have taken a nap a feel so refreshed. Maybe I should start looking into the homework...";
  } else if (clean) {
    timePadding = 4;
    displayText =
      "Now that the place is clean, I should check for any deadlines...";
  }

  let deadline: Date = new Date(new Date().getTime() + timePadding * 1000 * 60);
  deadline = roundTime(deadline);
  let counterMins = Math.round(
    (deadline.getTime() - new Date().getTime()) / (1000 * 60)
  );

  useEffect(() => {
    dispatch(updateVariable("counterStarted", true));
    dispatch(updateVariable("counterMins", counterMins));
  });

  return (
    <>
      <Chapter filename="homework">
        <Section>
          <p>{displayText}</p>

          <ul>
            
            <li>
              Art homework due date:{" "}
              {`${Intl.DateTimeFormat("en-US", dateOptions).format(
                roundTime(new Date(new Date().getTime() + 1000 * 60 * 60 * 12))
              )}`}
            </li>
            <li>
              Math homework due date:{" "}
              {`${Intl.DateTimeFormat("en-US", dateOptions).format(deadline)}`}{" "}
              (!!!)
            </li>
          </ul>

          <FadeIn wrapper={animated("div")} delayTime={500}>
            <p>OH NO THE MATH HOMEWORK IS LITERALLY DUE IN {counterMins} MINUTES.</p>
          </FadeIn>

          <p>
            I should{" "}
            <Nav text="start" next="homework_start" tag="startHomework" /> ASAP.
          </p>
        </Section>
      </Chapter>
    </>
  );
};

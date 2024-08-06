import { Section, Chapter, Nav } from "core/components";
import { PageType, useAppDispatch } from "core/types";
import FadeIn from "core/components/ui/fadein";

import { animated } from "@react-spring/web";

import colors from "public/themeColors.module.scss";
import { useVariable } from "core/hooks/use-variable";
import { useEffect } from "react";
import { updateVariable } from "core/features/variable-manager";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  /** Number of minutes left */
  let counterMins: number = 6;

  const [nap, clean] = useVariable(null, ["nap", "clean"]);

  let displayText: string = "Hmm... Let's see what we have..."

  /** Date time config */
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  if (nap && clean) {
    counterMins = 3;
  }
  else if (nap) {
    counterMins = 4;
    displayText = "I have taken a nap a feel so refreshed. Maybe I should start looking into the homework..."
  }
  else if (clean) {
    counterMins = 4
    displayText = "Now that the place is clean, I should check for any deadlines..."
  }

  let deadline: Date = new Date(new Date().getTime() + counterMins * 1000 * 60);

  useEffect(() => {
    dispatch(updateVariable('counterStarted', true));
    dispatch(updateVariable('counterMins', counterMins));
    dispatch(updateVariable('deadline', deadline));
  })

  return (
    <>
      <Chapter filename="homework">
        <Section>
          <p>{displayText}</p>

          <FadeIn wrapper={animated("p")} delayTime={400}>
            OH NO THERE IS A PAPER DUE AT{" "}
            {`${Intl.DateTimeFormat("en-US", dateOptions).format(deadline)}`}!!!
          </FadeIn>

          <FadeIn wrapper={animated('div')} delayTime={600}>
            I should{" "}
            <Nav text="start" next="homework_start" tag="startHomework"/>
            ASAP.
          </FadeIn>
        </Section>
      </Chapter>
    </>
  );
};

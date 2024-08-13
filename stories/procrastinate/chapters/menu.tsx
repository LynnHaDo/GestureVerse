import { Section, Chapter } from "core/components";
import { BulletedList } from "core/components/widgets";
import { PageType } from "core/types";
import { Options } from "core/components/constants/options";

import { choiceBlock } from "core/features/choice";

import colors from "public/themeColors.module.scss";

import { useScore } from "core/hooks/use-score";
import { useVariable } from "core/hooks/use-variable";

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const tag = "procrastinate__menu";
  let [tv, game, eat, nap, clean] = useVariable(null, [
    "tv",
    "game",
    "eat",
    "nap",
    "clean",
  ]);

  let displayText: string;
  let score = useScore();

  switch (score) {
    case 0:
      displayText = "What should I do now?";
      break;
    case 1:
      displayText = "Nice that was fun, and plenty of time left in the day!";
      break;
    case 2:
      displayText = "Hmmm what else should I do? Anything but homework.";
      break;
    case 3:
      displayText =
        "I don't want to start homework yet. Maybe I won't even do it. Who knows.";
      break;
    case 4:
      displayText =
        "Hmmmm it's starting to get late... Time to do something fun!";
      break;
    case 5:
      displayText = "Am I hungry? All I know is I'm not hungry for homework.";
      break;
    case 6:
      displayText = "Sooooooo booooored.";
      break;
    case 7:
      displayText = "Maybe I should try and start my homework soon.";
      break;
    default:
      displayText = "Wow I really need to start, it's pretty late.";
  }

  if (tv && game && eat) {
    Options[tag]["homework"].disabled = false;
  }

  if (tv) {
    Options[tag]["tv"].description = "Watch more tv";
  }

  if (game) {
    Options[tag]["game"].description = "Play more games";
  }

  if (eat) {
    Options[tag]["eat"].description = "Eat more";
  }

  if (nap) {
    Options[tag]["nap"].description = "I feel refreshed";
    Options[tag]["nap"].disabled = true;
  }

  if (clean) {
    Options[tag]["clean"].description = "Now my room is nice and clean!";
    Options[tag]["clean"].disabled = true;
  }

  return (
    <Chapter filename="menu">
      <Section>
        <Container>
          <Row>
            <p>{displayText}</p>
            {choiceBlock(
              tag,
              "gesture",
              1,
              `${colors.orange}`,
              `${colors.lightYellow}`,
              BulletedList,
              null,
              true
            )}
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

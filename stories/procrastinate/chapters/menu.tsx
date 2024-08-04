import {
  Section,
  Chapter,
  ChoiceBlock,
  BackgroundFill,
  TextBlock,
  Artwork,
} from "core/components";
import { BulletedList } from "core/components/widgets";
import { PageType, RootState } from "core/types";

import { choiceBlock } from "core/features/choice";

import colors from "public/themeColors.module.scss";

import { useScore } from "core/hooks/use-score";

export const Page: PageType = (props) => {
  const tag = "procrastinate__menu";

  let displayText: string;
  let score = useScore();

  switch (score) {
    case 0:
        displayText = "What should I do now?"
        break;
    case 1:
        displayText = "Nice that was fun, and plenty of time left in the day!"
        break;
    case 2:
        displayText = "Hmmm what else should I do? Anything but homework."
        break;
    case 3: 
        displayText = "I don't want to start homework yet. Maybe I won't even do it. Who knows."
        break;
    case 4:
        displayText = "Hmmmm it's starting to get late... Time to do something fun!"
        break;
    case 5: 
        displayText = "Am I hungry? All I know is I'm not hungry for homework, YUCK!"
        break;
    case 6: 
        displayText = "Sooooooo booooored."
        break;
    case 7:
        displayText = "Maybe I should try and start my homework soon."
        break;
    default:
        displayText = "Wow I really need to start, it's pretty late."
  }

  return (
    <>
      <Chapter filename="menu">
        <Section>
          <p>{displayText}</p>
          {choiceBlock(
            tag,
            "gesture",
            1,
            `${colors.orange}`,
            `${colors.lightYellow}`,
            BulletedList
          )}
        </Section>
      </Chapter>
    </>
  );
};

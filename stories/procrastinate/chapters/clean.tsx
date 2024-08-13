import { Section, Chapter, Nav } from "core/components";
import { BulletedList } from "core/components/widgets";
import { choiceBlock } from "core/features/choice";
import { useVariable } from "core/hooks/use-variable";
import { PageType } from "core/types";
import colors from "public/themeColors.module.scss";

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const tag = "procrastinate__clean";
  let displayText: string;
  let numItemsDone: number = 0;

  if (localStorage.getItem(tag) != null) {
    let itemsArray: Array<string> = JSON.parse(localStorage.getItem(tag));
    numItemsDone = itemsArray.length;
  }

  switch (numItemsDone) {
    case 1:
      displayText = "Wow that's a lot more than I thought...";
      break;
    case 2:
      displayText = "Seems like there is only one thing left...";
      break;
    case 3:
      displayText = "Wow my concentration span is getting shorter...";
      break;
    default:
      displayText =
        "I never do this, but with desperate times come desperate measures. My room is only slightly messy, but now, when I happen to have homework that needs to get done, I have decided this is the perfect time to clean.";
  }

  return (
    <Chapter filename="clean">
      <Section>
        <Container>
          <Row>
            <p>{displayText}</p>
            {choiceBlock(
              tag,
              "gesture",
              1,
              `${colors.darkYellow}`,
              `${colors.dark}`,
              BulletedList,
              <Nav
                text="Start cleaning..."
                tag="moveFromCleantoCleanStart"
                next="clean_start"
              />,
              false
            )}
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

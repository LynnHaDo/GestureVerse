import { Section, Chapter, NavBlock } from "core/components";
import { BulletedList } from "core/components/widgets";
import { choiceBlock } from "core/features/choice";
import { PageType } from "core/types";
import styles from "public/stories/procrastinate/styles/Index.module.scss";

import { useVariable } from "core/hooks/use-variable";

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const tag = "procrastinate__clean";
  let displayText: string =
    "I never do this, but with desperate times come desperate measures. My room is only slightly messy, but now, when I happen to have homework that needs to get done, I have decided this is the perfect time to clean.";

  let itemsDone: Array<boolean> = useVariable(null, [
    "clothes",
    "desk",
    "trash",
  ]);

  let numItemsDone = itemsDone.filter((i) => i).length;

  switch (numItemsDone) {
    case 1:
      displayText = "Wow that's a lot more than I thought...";
      break;
    case 2:
      displayText = "Seems like there is only one thing left...";
      break;
    case 3:
      displayText = "Wow my concentration span is getting shorter...";
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
              BulletedList,
              <div className={styles.p}>
                <NavBlock instructionClassName={styles.instruction} 
                  text="Start cleaning..."
                  tag="moveFromCleantoCleanStart"
                  next="clean_start"
                />
              </div>,
              false,
              "navigation",
              null,
              `${styles.p}`,
              null,
              `${styles.instruction}`
            )}
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

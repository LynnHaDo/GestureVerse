/** Static components */
import { Section, Chapter, Nav, NavBlock } from "core/components";
import { BulletedList } from "core/components/widgets";
import { choiceBlock } from "core/features/choice";

/** Hooks */
import { Next, PageType } from "core/types";

/** Styling */
import styles from "public/stories/procrastinate/styles/Index.module.scss";
import useChapter from "core/hooks/use-chapter";

import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const chapter = useChapter();
  const tag = "procrastinate__eat_cook_fridge";
  return (
    <Chapter filename={chapter.filename} showOnlyCurrentSection>
      <Section>
        <Container>
          <Row>
            <p>
              There's absolutely nothing appetizing in there. However, out of
              the corner of my eye, I spot some goodies in the deli drawer. I
              reach my bare hand into a bag of salami to pull out a few slices,
              and I grab a string cheese to go along with it.
            </p>
            <p>Mmmmmmm... This is so good.</p>

            <p>I'm still hungry though...</p>
            <NavBlock instructionClassName={styles.instruction} 
              text=""
              next={Next.Section}
              tag={`lookForSomethingToEatIn${chapter.filename}`}
            />
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <p>Hmm... Which one?</p>
            {choiceBlock(
              tag,
              "handedness",
              BulletedList,
              null,
              true,
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

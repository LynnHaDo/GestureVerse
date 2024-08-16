import { Chapter, Section } from "core/components";
import { PageType } from "core/types";

import colors from "public/themeColors.module.scss";
import useChapter from "core/hooks/use-chapter";
import { choiceBlock } from "core/features/choice";
import { BulletedList } from "core/components/widgets";
import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  /** Current chapter */
  const chapter = useChapter();

  const tag = "procrastinate__homework_fail";

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <p>Wait the deadline has passed already??</p>
            <p>
              I don't think I can finish in time. Should I just give up or use
              the grace period?
            </p>
            {choiceBlock(
              tag,
              "gesture",
              1,
              `${colors.orange}`,
              `${colors.white}`,
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

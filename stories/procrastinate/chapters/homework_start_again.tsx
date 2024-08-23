import { Chapter, Section } from "core/components";
import { PageType, useAppDispatch } from "core/types";

import useChapter from "core/hooks/use-chapter";
import { choiceBlock } from "core/features/choice";
import { BulletedList } from "core/components/widgets";
import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { updateVariable } from "core/features/variable-manager";

import styles from 'public/stories/procrastinate/styles/Index.module.scss';

export const Page: PageType = () => {
  /** Current chapter */
  const chapter = useChapter();

  const dispatch = useAppDispatch();

  const tag = "procrastinate__homework_fail";

  useEffect(() => {
    dispatch(updateVariable("procrastinate__grace_period", null));
  })

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <p>Wait the deadline has passed already??</p>
            <p>
              I don't think I can finish in time. Should I just give up or stay up or use the grace period?
            </p>
            {choiceBlock(
              tag,
              "gesture",
              BulletedList,
              null,
              true,
              "navigation",
              "",
              "",
              null,
              `${styles.instruction}`
            )}
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

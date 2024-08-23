import { Section, Chapter } from "core/components";
import { PageType } from "core/types";

import { Container, Row, Col } from "react-bootstrap";
import { choiceBlock } from "core/features/choice";

import styles from 'public/stories/congee/styles/Index.module.scss';
import { BulletedList } from "core/components/widgets";
import useChapter from "core/hooks/use-chapter";
import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";

export const Page: PageType = () => {
  const tag = "congee__open_door";
  const chapter = useChapter();

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
                <FadeIn wrapper={animated("p")} delayTime={5 * 200}>
                *RIIIING.*
              </FadeIn>
              {choiceBlock(
                tag,
                "gesture",
                BulletedList,
                null,
                true,
                'navigation',
                '',
                '',
                null,
                `${styles.instruction}`
              )}
            </Col>

            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

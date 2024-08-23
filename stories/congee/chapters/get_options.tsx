import { Section, Chapter, Artwork } from "core/components";
import { PageType } from "core/types";

import { Container, Row, Col } from "react-bootstrap";
import { choiceBlock } from "core/features/choice";

import { BulletedList } from "core/components/widgets";
import styles from 'public/stories/congee/styles/Index.module.scss';

import useChapter from "core/hooks/use-chapter";

export const Page: PageType = () => {
  const tag = "congee__get_options";
  const chapter = useChapter();

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <p>
                She’s right. You live in a town - you should be able to find
                congee. Right?
              </p>
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

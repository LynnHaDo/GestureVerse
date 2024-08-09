import { Section, Chapter, Artwork } from "core/components";
import { PageType } from "core/types";

import { Container, Row, Col } from "react-bootstrap";
import { choiceBlock } from "core/features/choice";

import colors from "public/themeColors.module.scss";
import { BulletedList } from "core/components/widgets";
import useChapter from "core/hooks/use-chapter";

export const Page: PageType = () => {
  const tag = "congee_get_options";
  const chapter = useChapter();

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col>
              <p>
                She’s right. You live in a town - you should be able to find
                congee. Right?
              </p>
              {choiceBlock(
                tag,
                "gesture",
                1,
                `${colors.lightYellow}`,
                `${colors.dark}`,
                BulletedList
              )}
            </Col>

            <Col></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

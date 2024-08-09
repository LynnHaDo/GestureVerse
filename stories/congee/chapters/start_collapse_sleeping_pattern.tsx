import { Section, Chapter, Nav, Artwork } from "core/components";
import { Next, PageType } from "core/types";

import useChapter from "core/hooks/use-chapter";

import { Container, Row, Col } from "react-bootstrap";
import { choiceBlock } from "core/features/choice";

import colors from "public/themeColors.module.scss";
import { BulletedList } from "core/components/widgets";

export const Page: PageType = () => {
  const chapter = useChapter();
  const tag = "congee_disease";

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col>
              <p>
                But it isn't your fault. You felt really bad and you still feel
                awful. You’re pretty sure you’ve come down with:
              </p>

              {choiceBlock(
                tag,
                "gesture",
                1,
                `${colors.lightYellow}`,
                `${colors.dark}`,
                BulletedList,
                null,
                true,
                "variableSetter"
              )}

              <p>
                Maybe you should{" "}
                <Nav text="tell someone" next="tell" tag="tellSomeone" />
                {"."}
              </p>
            </Col>

            <Col></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

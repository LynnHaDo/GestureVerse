import { Section, Chapter, Nav, Artwork } from "core/components";
import { Next, PageType } from "core/types";

import useChapter from "core/hooks/use-chapter";

import { Container, Row, Col } from "react-bootstrap";
import { choiceBlock } from "core/features/choice";

import colors from "public/themeColors.module.scss";
import { BulletedList } from "core/components/widgets";
import { useVariable } from "core/hooks/use-variable";

export const Page: PageType = () => {
  const chapter = useChapter();
  const tag = "congee_disease";

  let navBlock: JSX.Element = null;

  if (useVariable(tag)) {
    navBlock = (
      <p style={{marginTop: '15px'}}>
        Maybe you should{" "}
        <Nav text="tell someone" next="tell" tag="tellSomeone" />
        {"."}
      </p>
    );
  }

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <p>
                But it isn't your fault. You felt really bad and you still feel
                awful. You’re pretty sure you’ve come down with a...
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

              {navBlock}
            </Col>

            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

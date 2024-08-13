import {
  Section,
  Chapter,
  BackgroundFill,
  TextBlock,
  Artwork,
} from "core/components";
import { PageType } from "core/types";

import { choiceBlock } from "core/features/choice";
import { InlineListEN } from "core/components/widgets/inline-list";

import { Container, Col, Row } from "react-bootstrap";
import colors from "public/themeColors.module.scss";
import styles from "public/stories/a-beach-walk/styles/Index.module.scss";

export const Page: PageType = () => {
  const tag = "right";
  return (
    <BackgroundFill color={colors.darkYellow}>
      <Chapter filename="right">
        <Section>
          <Container>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4}>
                <Artwork
                  link="/stories/a-beach-walk/images/02_right.png"
                  source="https://interstellar-bird.itch.io/beach-walk"
                  name="Beach footpath with flowers on the sides, Digital art, 600x400 pixel"
                  position={{
                    backgroundColor: `${colors.white}`,
                  }}
                />
                <TextBlock
                  className={styles.textBlock}
                  textWrapperClassName={styles.textWrapper}
                >
                  {choiceBlock(
                    tag,
                    "gesture",
                    1,
                    "transparent",
                    `${colors.white}`,
                    InlineListEN,
                    null,
                    false
                  )}
                </TextBlock>
              </Col>
              <Col lg={4}></Col>
            </Row>
          </Container>
        </Section>
      </Chapter>
    </BackgroundFill>
  );
};

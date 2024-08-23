import {
  Section,
  Chapter,
  ChoiceBlock,
  BackgroundFill,
  TextBlock,
  Artwork,
} from "core/components";
import { PageType } from "core/types";

import styles from "public/stories/a-beach-walk/styles/Index.module.scss";
import colors from "public/themeColors.module.scss";

import { choiceBlock } from "core/features/choice";
import { InlineListEN } from "core/components/widgets/inline-list";
import { Col, Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  const tag = "a-beach-walk__leftOrRight";

  return (
    <BackgroundFill color={colors.orange}>
      <Chapter filename="choice">
        <Section>
          <Container>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4}>
                <Artwork
                  link="/stories/a-beach-walk/images/02.png"
                  source="https://interstellar-bird.itch.io/beach-walk"
                  name="Left or right, Digital art, 600x400 pixel"
                  position={{
                    margin: "0 auto",
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
                    InlineListEN,
                    null,
                    false,
                    'navigation',
                    '',
                    '',
                    null,
                    `${styles.instruction}`
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

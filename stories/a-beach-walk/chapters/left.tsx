import {
  Section,
  Chapter,
  BackgroundFill,
  TextBlock,
  Artwork,
} from "core/components";
import { PageType } from "core/types";

import { choiceBlock } from "core/features/choice";

/** Style */
import { Container, Row, Col } from "react-bootstrap";
import colors from "public/themeColors.module.scss";
import styles from "public/stories/a-beach-walk/styles/Index.module.scss";
import { InlineListEN } from "core/components/widgets/inline-list";

export const Page: PageType = () => {
  let tag = "a-beach-walk__left";

  return (
    <BackgroundFill color={colors.blue}>
      <Chapter filename="left">
        <Section>
          <Container>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4}>
                <Artwork
                  link="/stories/a-beach-walk/images/02_left.png"
                  source="https://interstellar-bird.itch.io/beach-walk"
                  name="Two-way path, Digital art, 600x400 pixel"
                  position={{
                    margin: '0 auto',
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

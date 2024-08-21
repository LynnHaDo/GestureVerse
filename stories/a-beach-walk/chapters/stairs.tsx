import {
  Section,
  Chapter,
  TextBlock,
  BackgroundFill,
  Artwork,
  NavBlock,
} from "core/components";
import { PageType } from "core/types";

import { Container, Row, Col } from "react-bootstrap";

import colors from "public/themeColors.module.scss";
import styles from "public/stories/a-beach-walk/styles/Index.module.scss";

export const Page: PageType = () => {
  return (
    <BackgroundFill color={colors.brown}>
      <Chapter filename="stairs">
        <Section>
          <Container>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4}>
                <Artwork
                  link="/stories/a-beach-walk/images/02_left_stairs.png"
                  source="https://interstellar-bird.itch.io/beach-walk"
                  name="Stairs leading down to the beach, Digital art, 600x400 pixel"
                  position={{
                    margin: "0 auto",
                    backgroundColor: `${colors.white}`,
                  }}
                />
                <TextBlock
                  className={styles.textBlock}
                  textWrapperClassName={styles.textWrapper}
                >
                  <div>
                    Walk into the{"  "}
                    <NavBlock text="sand." next="sand" tag="back" />
                  </div>
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

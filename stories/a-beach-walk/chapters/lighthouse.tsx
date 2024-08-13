import {
  Section,
  Chapter,
  Nav,
  TextBlock,
  BackgroundFill,
  Artwork,
} from "core/components";
import { PageType } from "core/types";

import { Container, Row, Col } from "react-bootstrap";

import colors from "public/themeColors.module.scss";
import styles from "public/stories/a-beach-walk/styles/Index.module.scss";

export const Page: PageType = () => {
  return (
    <BackgroundFill color={colors.red}>
      <Chapter filename="lighthouse">
        <Section>
          <Container>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4}>
                <Artwork
                  link="/stories/a-beach-walk/images/02_left_lighthouse.png"
                  source="https://interstellar-bird.itch.io/beach-walk"
                  name="Lighthouse light, Digital art, 600x400 pixel"
                  position={{
                    margin: "0 auto",
                    backgroundColor: `${colors.white}`,
                  }}
                />
                <TextBlock
                  className={styles.textBlock}
                  textWrapperClassName={styles.textWrapper}
                >
                  <p>
                    The lighthouse is old and the lantern is taller than you
                    are. You watch the light glint off the glass for a while
                    before making your way
                    {"  "}
                    <Nav text="back" next="left" tag="back" />.
                  </p>
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

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
    <BackgroundFill color={colors.beige}>
      <Chapter filename="trees">
        <Section>
          <Container>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4}>
                <Artwork
                  link="/stories/a-beach-walk/images/02_right_trees.png"
                  source="https://interstellar-bird.itch.io/beach-walk"
                  name="Coastline with trees and flowers on the left side, Digital art, 600x400 pixel"
                  position={{
                    backgroundColor: `${colors.white}`,
                  }}
                />
                <TextBlock
                  className={styles.textBlock}
                  textWrapperClassName={styles.textWrapper}
                >
                  <div>
                    Going through the tree bushes, you see the{"  "}
                    <NavBlock
                      text="coastline."
                      next="shells"
                      tag="coastline"
                      instructionClassName={styles.instruction}
                    />
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

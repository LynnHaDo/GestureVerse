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
    <BackgroundFill color={colors.lightYellow}>
      <Chapter filename="fence">
        <Section>
          <Container>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4}>
                <Artwork
                  link="/stories/a-beach-walk/images/02_right_fence.png"
                  source="https://interstellar-bird.itch.io/beach-walk"
                  name="Flowers growing on coastal rocks, Digital art, 600x400 pixel"
                  position={{
                    backgroundColor: `${colors.white}`,
                  }}
                />
                <TextBlock
                  className={styles.textBlock}
                  textWrapperClassName={styles.textWrapper}
                >
                  <div style={{ color: colors.dark }}>
                    You duck through the fence and sit on the shrubbery. You
                    watch the waves for a while and enjoy the sweet-smelling
                    flowers before climbing back up to the{"  "}
                    <NavBlock
                      text="path."
                      next="right"
                      tag="path"
                      textColor={colors.dark}
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

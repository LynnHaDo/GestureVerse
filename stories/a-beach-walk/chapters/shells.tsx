import {
  Section,
  Chapter,
  NavBlock,
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
    <BackgroundFill color={colors.lightOrange}>
      <Chapter filename="shells">
        <Section>
          <Container>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4}>
                <Artwork
                  link="/stories/a-beach-walk/images/02_right_shells.png"
                  source="https://interstellar-bird.itch.io/beach-walk"
                  name="Entrance to the cave, Digital art, 600x400 pixel"
                  position={{
                    backgroundColor: `${colors.white}`,
                  }}
                />
                <TextBlock
                  className={styles.textBlock}
                  textWrapperClassName={styles.textWrapper}
                >
                  <div>
                    Walk past the{"  "}
                    <NavBlock text="shells." next="cave" tag="shells" instructionClassName={styles.instruction}/>
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

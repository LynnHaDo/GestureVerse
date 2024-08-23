import {
  Section,
  Chapter,
  Nav,
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
    <BackgroundFill color={colors.retroGreen}>
      <Chapter filename="further">
        <Section>
          <Container>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4}>
                <Artwork
                  link="/stories/a-beach-walk/images/02_right_further.png"
                  source="https://interstellar-bird.itch.io/beach-walk"
                  name="Footpath with tree branches, Digital art, 600x400 pixel"
                  position={{
                    backgroundColor: `${colors.white}`,
                  }}
                />
                <TextBlock
                  className={styles.textBlock}
                  textWrapperClassName={styles.textWrapper}
                >
                  <div>
                    Walk through the {"  "}
                    <NavBlock text="trees." next="trees" tag="trees" instructionClassName={styles.instruction}/>
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

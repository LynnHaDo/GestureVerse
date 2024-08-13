import {
  Section,
  Chapter,
  Nav,
  TextBlock,
  Artwork,
  BackgroundFill,
} from "core/components";
import { PageType } from "core/types";

import styles from "public/stories/a-beach-walk/styles/Index.module.scss";
import colors from "public/themeColors.module.scss";

import { Col, Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  return (
    <BackgroundFill color={colors.darkBlue}>
      <Chapter filename="intro">
        <Section>
          <Container>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4}>
                <Artwork
                  link="/stories/a-beach-walk/images/bg.gif"
                  source="#"
                  name="Sunset at the beach, Digital art, 12x12 in"
                  width="300px"
                  position={{
                    margin: "0 auto",
                    backgroundColor: `${colors.white}`,
                  }}
                />
                <TextBlock
                  className={styles.textBlock}
                  textWrapperClassName={styles.textWrapper}
                  textWrapperWidth={300}
                >
                  <h2>a beach walk</h2>
                  <p>
                    Embark on a peaceful exploration along the coast. {"  "}
                    <Nav text="Let's start" next="start" tag="intro" />.
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

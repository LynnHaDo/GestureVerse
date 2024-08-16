import {
  Section,
  Chapter,
  TextBlock,
  BackgroundFill,
  Artwork,
} from "core/components";
import End from "core/components/end";

import { PageType } from "core/types";

import { Container, Row, Col } from "react-bootstrap";

import colors from "public/themeColors.module.scss";
import styles from "public/stories/a-beach-walk/styles/Index.module.scss";

export const Page: PageType = () => {
  return (
    <BackgroundFill color={colors.darkBlue}>
      <Chapter filename="rest">
        <Section>
          <Container>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4}>
                <Artwork
                  link="/stories/a-beach-walk/images/05_rest.png"
                  source="https://interstellar-bird.itch.io/beach-walk"
                  name="Image of sand with 'Thank you for playing' text"
                  position={{
                    backgroundColor: `${colors.white}`,
                  }}
                />
                <TextBlock
                  className={styles.textBlock}
                  textWrapperClassName={styles.textWrapper}
                >
                  <End
                    storyName="a beach walk"
                    sources={[
                      "interstellar-bird (n.d.). Beach Walk by interstellar-bird. [online] itch.io. Available at: https://interstellar-bird.itch.io/beach-walk [Accessed 16 Jul. 2024].",
                    ]}
                    additionalButtonStyle={{
                        width: '80px',
                        height: '35px'
                    }}
                    modalVariant={styles.customModal}
                    modalHeaderClass={styles.customModalHeader}
                    modalBodyClass={styles.customModalBody}
                    modalFooterClass={styles.customModalFooter}
                  />
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

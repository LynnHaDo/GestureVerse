import { Section, Chapter, NavBlock, Artwork } from "core/components";
import { animated } from "@react-spring/web";
import { PageType } from "core/types";
import FadeIn from "core/components/ui/fadein";

import { Container, Row, Col } from "react-bootstrap";
import styles from 'public/stories/congee/styles/Index.module.scss';

export const Page: PageType = () => {
  return (
    <Chapter filename="intro">
      <Section>
        <Container>
          <Row>
            <Col lg={2}></Col>
            <Col lg={4}>
              <h1>congee</h1>

              <p>
                (in Chinese cooking) broth or porridge made from rice. Meat,
                fish, and flavorings are added while preparing the congee, and
                it is most often served as a meal on its own, especially for
                those who are feeling unwell.
              </p>

              <FadeIn wrapper={animated("p")} delayTime={300}>
                start
              </FadeIn>
              <NavBlock instructionClassName={styles.instruction}  text="" next="start" tag="startCongee" />
            </Col>

            <Col lg={4}>
              <Artwork
                link="https://i.imgur.com/8xsVCZi.gif"
                name="A bowl of congee, GIF image"
                source="https://imgur.com/8xsVCZi"
                width="80%"
                position={{
                  margin: "10px auto",
                }}
              />
            </Col>
            <Col lg={2}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

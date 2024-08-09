import { Section, Chapter, Nav, Artwork } from "core/components";
import { animated } from "@react-spring/web";
import { PageType } from "core/types";
import FadeIn from "core/components/ui/fadein";

import { Container, Row, Col } from "react-bootstrap";

export const Page: PageType = () => {
    return <Chapter filename="intro">
    <Section>
      <Container>
        <Row>
          <Col>
            <h1>congee</h1>

            <p>
              (in Chinese cooking) broth or porridge made from rice. Meat, fish,
              and flavorings are added while preparing the congee, and it is
              most often served as a meal on its own, especially for those who
              are feeling unwell.
            </p>

            <FadeIn wrapper={animated("p")} delayTime={300}>
              <Nav text="start" next="start" tag="startCongee" />
            </FadeIn>
          </Col>

          <Col>
          <Artwork
            link="https://i.imgur.com/8xsVCZi.gif"
            name="A bowl of congee, GIF image"
            source="https://imgur.com/8xsVCZi"
            width="350px"
          />
          </Col>
        </Row>
      </Container>
    </Section>
  </Chapter>
};

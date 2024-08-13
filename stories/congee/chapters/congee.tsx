import { Section, Chapter, Nav, Artwork } from "core/components";
import { PageType } from "core/types";

import { Container, Row, Col } from "react-bootstrap";

export const Page: PageType = () => {
  return (
    <Chapter filename="congee">
      <Section>
        <Container>
          <Row>
            <Col lg={6}>
              <Artwork
                link="https://i.imgur.com/djFIUi4.gif"
                name="A bowl of congee, GIF image"
                source="https://i.imgur.com/djFIUi4"
                width="350px"
                position={{
                    margin: '10px auto'
                }}
              />
            </Col>
            <Col lg={6}>
              <p>
                You know congee. It’s delicious mushy rice in a soup form, the
                equivalent of chicken soup. The best part of feeling ill as a
                kid was getting a hot bowl of congee to slurp on. It made you
                feel warm inside out – like glowing embers gently simmering in
                your stomach. If only it was easier to {" "}
                <Nav text="get" next="get" tag="getCongee" />{"."}
              </p>
            </Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

import { Section, Chapter, Nav, Artwork } from "core/components";
import { PageType } from "core/types";

import { Container, Row } from "react-bootstrap";

import colors from "public/themeColors.module.scss";
import End from "core/components/end";

export const Page: PageType = () => {
  return (
    <Chapter filename="congee">
      <Section>
        <Container>
          <Row>
            <Artwork
              link="https://i.imgur.com/rsZ7ilx.png"
              name="Allison and 'you' eating congee, Digital image"
              source="https://i.imgur.com/rsZ7ilx"
            />

            <br></br>
            <End
              storyName="congee"
              sources={[
                "Becci (2020). Congee. [online] itch.io. Available at: https://becciness.itch.io/congee [Accessed 12 Aug. 2024].",
              ]}
              additionalButtonStyle={{
                backgroundColor: `${colors.lightYellow}`,
                color: `${colors.dark}`,
              }}
            />
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

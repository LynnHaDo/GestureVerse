import { Section, Chapter, Nav, Artwork } from "core/components";
import { PageType } from "core/types";

import { Container, Row } from "react-bootstrap";

import colors from "public/themeColors.module.scss";
import styles from "public/stories/congee/styles/Index.module.scss";

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
                "Becci (n.d.). Congee. [online] itch.io. Available at: https://becciness.itch.io/congee [Accessed 12 Aug. 2024].",
                "Slom (2019). 2:13AM. [Streamed] YouTube: Slom. Available at: https://www.youtube.com/watch?v=922lzAd_XpM [Accessed 15 Aug. 2024].",
                "Slom (2022). LETTER SENT TO YOU. [Streamed] YouTube: STANDARD FRIENDS, under license to Dreamus. Available at: https://www.youtube.com/watch?v=Z9s2KGV_bKI [Accessed 15 Aug. 2024].",
                "Cosmic Boy and Fisherman (2019). Love. [Streamed] YouTube: STONESHIP. Available at: https://www.youtube.com/watch?v=Q_DOtvl5LNo [Accessed 15 Aug. 2024].",
                "Colde (2023). Star (Instrumental). [Streamed] YouTube: Stone Music Entertainment. Available at: https://www.youtube.com/watch?v=PQ8fm3aO-B8 [Accessed 15 Aug. 2024]."
              ]}
              instructionClassName={styles.instruction}
            />
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

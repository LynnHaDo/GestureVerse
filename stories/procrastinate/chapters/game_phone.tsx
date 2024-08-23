import { Section, Chapter, Nav } from "core/components";
import { choiceBlock } from "core/features/choice";

import { PageType } from "core/types";
import { BulletedList } from "core/components/widgets";

import { Container, Row } from "react-bootstrap";
import styles from 'public/stories/procrastinate/styles/Index.module.scss';


export const Page: PageType = () => {
  const tag = "procrastinate__games_phone";
  return (
    <>
      <Chapter filename="game_phone">
        <Section>
          <Container>
            <Row>
              <p>
                Ah yes, mobile games, the pinnacle of quality design and
                narrative. When it comes to my phone, I only do a few things:
                Read random articles, go on social media, or play stupid phone
                games. Games are fun, but I also love the rush I get from
                refreshing my instagram feed repeatedly and looking at the same
                pictures over and over.
              </p>

              {choiceBlock(
                tag,
                "gesture",
                BulletedList,
                null,
                true,
                "navigation",
                "",
                "",
                null,
                `${styles.instruction}`
              )}
            </Row>
          </Container>
        </Section>
      </Chapter>
    </>
  );
};

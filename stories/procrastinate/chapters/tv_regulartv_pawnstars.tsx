import { Section, Chapter, Nav, NavBlock } from "core/components";
import { PageType } from "core/types";

import { Container, Row } from "react-bootstrap";
import styles from 'public/stories/procrastinate/styles/Index.module.scss';

import useChapter from "core/hooks/use-chapter";

export const Page: PageType = () => {
  const chapter = useChapter();
  return (
      <Chapter filename={chapter.filename}>
        <Section>
          <Container>
            <Row>
              <p>
                I'M RICK HARRISON, AND THIS IS MY PAWN SHOP. I WORK HERE WITH MY
                OLD MAN AND MY SON, "BIG HOSS". EVERYTHING IN HERE HAS A STORY
                AND A PRICE. ONE THING I'VE LEARNED AFTER 21 YEARS - YOU NEVER
                KNOW WHAT IS GONNA COME THROUGH THAT DOOR.
              </p>

              <div className={styles.p}>
                I can't handle this. I'm going to watch the{" "}
                <NavBlock instructionClassName={styles.instruction} 
                  text="car show."
                  next="tv_regulartv_carshow"
                  tag={`moveFrom${chapter.filename}ToCarShow`}
                />
              </div>
            </Row>
          </Container>
        </Section>
      </Chapter>
  );
};

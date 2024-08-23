import { Section, Chapter, Nav, NavBlock } from "core/components";
import useChapter from "core/hooks/use-chapter";
import { PageType } from "core/types";

import { Container, Row } from "react-bootstrap";
import styles from 'public/stories/procrastinate/styles/Index.module.scss';

export const Page: PageType = () => {
  const chapter = useChapter();
  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <div className={styles.p}>
              I open Netflix and endlessly scroll for 30 minutes before
              inevitably watching The Office from where I left off.
              
              I usually don't pay attention to it because
              I've already seen every episode a number of times. It still makes
              good background noise for going on my
              {" "}
              <NavBlock instructionClassName={styles.instruction} 
                text="phone."
                next="tv_netflix_theoffice"
                tag={`moveFrom${chapter.filename}ToTheOffice`}
              />
            </div>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

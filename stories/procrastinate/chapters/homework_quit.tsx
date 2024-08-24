import { Section, Chapter } from "core/components";
import { PageType } from "core/types";

import styles from "public/stories/procrastinate/styles/Index.module.scss";

import useChapter from "core/hooks/use-chapter";
import End from "core/components/end";
import { Container, Row } from "react-bootstrap";

export const Page: PageType = () => {
  /** Current chapter */
  const chapter = useChapter();
  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <p>
              I give up. I'm just gonna skip it. I just can't do it. I need to
              relax...
            </p>

            <End
              storyName="procrastinate"
              sources={[
                "j-mo (n.d.). Procrastinate. [online] itch.io. Available at: https://j-mo.itch.io/procrastinate [Accessed 6 Aug. 2024].",
                "Coogie, SUPERBEE , D.Ark and CHANGMO (2018). saimsaim (Instrumental). [Streamed] YouTube: Stone Music Entertainment. Available at: https://www.youtube.com/watch?v=xwcYCgPgVWI [Accessed 15 Aug. 2024].",
                "CODE KUNST and Kid Milli (2018). Change (Instrumental). [Streamed] YouTube: Stone Music Entertainment. Available at: https://www.youtube.com/watch?v=4t1c1-jWCG8 [Accessed 15 Aug. 2024].",
                "Slom (2014). Moonlite. [mp3] SoundCloud. Available at: https://soundcloud.com/sanaislom/moonlite-2014 [Accessed 15 Aug. 2024].",
                "Slom (2018). overdue. [mp3] SoundCloud. Available at: https://soundcloud.com/sanaislom/180120-due [Accessed 15 Aug. 2024]."
              ]}
              instructionClassName={styles.instruction}
            />
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

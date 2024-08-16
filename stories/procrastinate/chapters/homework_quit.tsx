import { Section, Chapter } from "core/components";
import { PageType } from "core/types";

import colors from "public/themeColors.module.scss";
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
                "j-mo (2024). Procrastinate. [online] itch.io. Available at: https://j-mo.itch.io/procrastinate [Accessed 6 Aug. 2024].",
              ]}
              additionalButtonStyle={{
                backgroundColor: `${colors.orange}`,
                color: `${colors.white}`,
                marginLeft: "15px",
              }}
              modalVariant={styles.customModal}
              modalHeaderClass={styles.customModalHeader}
              modalBodyClass={styles.customModalBody}
              modalFooterClass={styles.customModalFooter}
            />
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

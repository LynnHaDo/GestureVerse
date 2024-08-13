import { Section, Chapter } from "core/components";
import { PageType, useAppDispatch } from "core/types";

import colors from "public/themeColors.module.scss";
import useChapter from "core/hooks/use-chapter";
import { useEffect } from "react";
import { updateVariable } from "core/features/variable-manager";
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
                marginLeft: '15px'
              }}
            />
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

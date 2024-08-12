import { Section, Chapter, Artwork, C } from "core/components";
import { choiceBlock } from "core/features/choice";
import { Next, PageType } from "core/types";

import useChapter from "core/hooks/use-chapter";

import { Container, Row, Col } from "react-bootstrap";

import styles from "public/stories/congee/styles/Index.module.scss";
import colors from "public/themeColors.module.scss";
import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";
import { BulletedList } from "core/components/widgets";
import { TextReplacements } from "core/components/constants/options";

export const Page: PageType = () => {
  const chapter = useChapter();
  const tag = "congee_sub_options_doordash";

  const texts = TextReplacements[chapter.filename];

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col>
              <p>You scroll through the app.</p>
              <FadeIn wrapper={animated("div")} delayTime={1000}>
                {texts && (
                  <div>
                    {Object.entries(texts).map(([initial, later], i) => {
                      return (
                        <p key={i}>
                          <C
                            options={[[`${initial} `]]}
                            last={`${later} `}
                            tag={`item${i}IsClickedInTexts`}
                            next={Next.None}
                            className={styles.choiceContent}
                          />
                        </p>
                      );
                    })}
                  </div>
                )}
              </FadeIn>

              <FadeIn wrapper={animated("div")} delayTime={2000}>
                {choiceBlock(
                  tag,
                  "handedness",
                  1,
                  `${colors.lightYellow}`,
                  `${colors.dark}`,
                  BulletedList,
                  null,
                  true
                )}
              </FadeIn>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

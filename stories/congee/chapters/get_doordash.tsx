import { Section, Chapter, Artwork, C, NavBlock } from "core/components";
import { choiceBlock } from "core/features/choice";
import { Next, PageType, useAppDispatch } from "core/types";

import useChapter from "core/hooks/use-chapter";
import { useEffect, useMemo } from "react";

import { Container, Row, Col } from "react-bootstrap";

import styles from "public/stories/congee/styles/Index.module.scss";
import FadeIn from "core/components/ui/fadein";
import { animated } from "@react-spring/web";

import { BulletedList } from "core/components/widgets";
import { TextReplacements } from "core/components/constants/options";
import { useVariable } from "core/hooks/use-variable";
import { updateVariable } from "core/features/variable-manager";

export const Page: PageType = () => {
  const chapter = useChapter();
  const tag = "congee__sub_options_doordash";

  const dispatch = useAppDispatch();
  const takeaway = useVariable("congee__takeaway");
  let displayText: string =
    "Wait... Isn't this the local Chinese takeaway place? Wow my head is not working properly today.";

  const texts = TextReplacements[chapter.filename];

  useEffect(() => {
    dispatch(updateVariable("congee__doordash", true));
  }, []);

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <Container>
          <Row>
            <Col lg={6} style={{ position: "relative" }}>
              <p>You scroll through the app.</p>
              <FadeIn wrapper={animated("div")} delayTime={1000}>
                {texts && (
                  <div>
                    {Object.entries(texts).map(([initial, later], i) => {
                      return <p key={i}>{`${initial} (${later})`}</p>;
                    })}
                  </div>
                )}
              </FadeIn>

              {takeaway ? (
                <>
                  <FadeIn wrapper={animated("div")} delayTime={2000}>
                    <p>{displayText}</p>
                  </FadeIn>
                  <NavBlock instructionClassName={styles.instruction} 
                    tag={tag}
                    text="No more searching today..."
                    next="get_finish"
                  />
                </>
              ) : (
                choiceBlock(tag, "handedness", BulletedList, null, false)
              )}
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </Section>
    </Chapter>
  );
};

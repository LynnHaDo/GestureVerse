import { Section, Chapter, NavBlock } from "core/components";
import { updateVariable } from "core/features/variable-manager";
import { PageType, useAppDispatch } from "core/types";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import styles from "public/stories/procrastinate/styles/Index.module.scss";
import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const actions: Array<string> = [
      "tv",
      "game",
      "eat",
      "nap",
      "clean",
      "freezer",
      "chili",
      "doordash",
    ];
    /** Init the states to be false */
    for (var action of actions) {
      dispatch(updateVariable(action, false));
    }
  }, []);

  return (
      <Chapter filename="start">
        <Section>
          <Container>
            <Row>
              <div className={styles.p}>
                I've had a very long day at school. None of my classes were
                interesting and I just wasted 7 hours of my day sitting and
                staring at a wall. I have some homework but I don't remember
                when it's due. Oh well. Now's the time to{"  "}
                <NavBlock
                    text="relax."
                    next="menu"
                    tag="startProcrastinate"
                    instructionClassName={styles.instruction}
                  />
              </div>
            </Row>
          </Container>
        </Section>
      </Chapter>
  );
};

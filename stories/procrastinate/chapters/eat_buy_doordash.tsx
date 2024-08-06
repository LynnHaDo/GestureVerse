import { Section, Chapter, Nav } from "core/components";
import { PageType, useAppDispatch } from "core/types";

import colors from "public/themeColors.module.scss";
import useChapter from "core/hooks/use-chapter";
import { useEffect } from "react";
import { useVariable } from "core/hooks/use-variable";
import { incrementScore } from "core/features/score";
import { updateVariable } from "core/features/variable-manager";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  const chapter = useChapter();
  const doordash = useVariable("doordash");
  let displayText: string = doordash
    ? "No... That's enough fast food for today."
    : "I select a burger and a large fry, with a medium coke (because a large is just too much for today). \
    Also I have to get hot mustard with it because that's my favorite sauce from there.";

  useEffect(() => {
    dispatch(incrementScore());
    dispatch(updateVariable("eat", true));
    dispatch(updateVariable("doordash", true));
  });

  return (
    <>
      <Chapter filename={chapter.filename}>
        <Section>
          <p>{displayText}</p>
          <p>
            Hmm... Are there any interesting{" "}
            <Nav
              text="things"
              next="menu"
              tag={`moveFrom${chapter.filename}toMenu`}
            />{" "}
            left to do
            {"?"}
          </p>
        </Section>
      </Chapter>
    </>
  );
};

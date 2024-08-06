import { Section, Chapter, Nav } from "core/components";
import { PageType, useAppDispatch } from "core/types";
import { FadeIn } from "core/components/ui";
import { useEffect } from "react";
import { incrementScore } from "core/features/score";
import { updateVariable } from "core/features/variable-manager";
import useChapter from "core/hooks/use-chapter";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  const chapter = useChapter();

  useEffect(() => {
    dispatch(incrementScore());
    dispatch(updateVariable("game", true));
  }, []);

  return (
    <>
      <Chapter filename={chapter.filename}>
        <Section>
          <p>
            Wow I forgot this is addicting, it's been nearly 2 hours. This game
            isn't even fun, it just drives me to keep playing, it's kind of
            scary? Is this good design? Or something far more dangerous?
          </p>

          <FadeIn>
            <p>
              Okay game over. What's{" "}
              <Nav
                text="next"
                next="menu"
                tag={`moveFrom${chapter.filename}toMenu`}
              />
              {"?"}
            </p>
          </FadeIn>
        </Section>
      </Chapter>
    </>
  );
};

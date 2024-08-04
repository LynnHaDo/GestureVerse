import { Section, Chapter, Nav } from "core/components";
import { PageType, useAppDispatch } from "core/types";
import { FadeIn } from "core/components/ui";
import { useEffect } from "react";
import { incrementScore } from "core/features/score";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(incrementScore());
  }, []);

  return (
    <>
      <Chapter filename="game_relaxing_goosegame">
        <Section>
          <FadeIn><p>Honk</p></FadeIn>
          <FadeIn><p>Honk</p></FadeIn>
          <FadeIn><p>Honk</p></FadeIn>
          <FadeIn><p>Honk</p></FadeIn>

          <FadeIn>
            <p>
            I'm bored. Let's go {" "}
            <Nav
              text="back"
              next="menu"
              tag={`moveFrom${__filename}toMenu`}
            />
            {"."}
            </p>
          </FadeIn>
        </Section>
      </Chapter>
    </>
  );
};

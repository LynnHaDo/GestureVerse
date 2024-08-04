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
      <Chapter filename="game_phone_phonegame">
        <Section>
          <p>
          Wow I forgot this is addicting, it's been nearly 2 hours. This game isn't even fun, it just drives me to keep playing, it's kind of scary? Is this good design? Or something far more dangerous?
          </p>

          <FadeIn>
            <p>Okay game over. What's {" "}
            <Nav
              text="next"
              next="menu"
              tag={`moveFrom${__filename}toMenu`}
            />
            {"?"}
            </p>
          </FadeIn>
        </Section>
      </Chapter>
    </>
  );
};

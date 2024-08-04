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
      <Chapter filename="game_relaxing_supermarioodyssey">
        <Section>
          <p>
          An incredible 3d platformer! Nintendo outdid themselves with this one. The mechanics are great, the game looks good, and there's so much to do and collect!
          </p>

          <FadeIn>
            <p>Hmm... Is there anything else left to {" "}
            <Nav
              text="do"
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

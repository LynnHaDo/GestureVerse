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
      <Chapter filename="game_relaxing_breathofthewild">
        <Section>
          <p>
            A Fabulously relaxing game. I love just walking around and exploring
            the beautiful world. It makes me happy. But then I glide down from a
            mountain top and land with a striking blow on a lynel. I jump into
            the air and fire a flurry of arrows straight into its chiseled
            Lion/Centaur abs. It's haunting bellow has so much power it knocks
            me off my feet. Then it hits me once and I die.
          </p>

          <FadeIn>
            <p>
            <Nav
              text="GAME OVER"
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

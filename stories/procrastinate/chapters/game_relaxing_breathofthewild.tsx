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
    dispatch(updateVariable('game', true))
  }, []);

  return (
    <>
      <Chapter filename={chapter.filename}>
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
              tag={`moveFrom${chapter.filename}toMenu`}
            />
            {"."}
            </p>
          </FadeIn>
        </Section>
      </Chapter>
    </>
  );
};

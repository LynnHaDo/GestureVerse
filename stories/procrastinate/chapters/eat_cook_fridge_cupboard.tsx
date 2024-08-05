/** Static components */
import { Section, Chapter, Nav } from "core/components";
import FadeIn from "core/components/ui/fadein";

/** Hooks */
import { PageType, useAppDispatch } from "core/types";
import { useEffect } from "react";
import { incrementScore } from "core/features/score";
import { updateVariable } from "core/features/variable-manager";
import { useVariable } from "core/hooks/use-variable";
import useChapter from "core/hooks/use-chapter";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  const chapter = useChapter();

  let displayText: string =
    "Perhaps I shall partake in a can of chili. Cracking open a can of chili and heating \
    it up slowly on the stove is the pinnacle of fine dining. Maybe I should crack a bottle \
    of wine to enjoy with my delicious meal. Perhaps a fine Zinfandel or Cabernet Sauvignon \
    (2009 was a good year) would make an excellent pairing for my beef morsels and slow cooked \
    bean medley in a hearty tomato and herb reduction. That hits the spot. Now I can get back to \
    procrastinating.";

  const chili = useVariable("chili");

  if (chili) {
    displayText =
      "I can't eat more chili, that's too depressing. Two cans in a day? One is bad enough.";
  }

  useEffect(() => {
    dispatch(incrementScore());
    dispatch(updateVariable("eat", true));
    dispatch(updateVariable('chili', true));
  });

  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <p>{displayText}</p>
        <FadeIn>
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
        </FadeIn>
      </Section>
    </Chapter>
  );
};

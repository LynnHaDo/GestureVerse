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
      <Chapter filename="game_phone_instagram">
        <Section>
          <p>
          As I expected, I keep refreshing my feed to see the same photos. I begin the endless cycle of opening Instagram, then opening Snapchat, then Facebook, and starting again. I see for the 10th time on Instagram that an old friend I haven't talked to in years just got a new puppy. Nice.
          </p>

          <FadeIn>
            <p>Okay enough time on the Internet. What's {" "}
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

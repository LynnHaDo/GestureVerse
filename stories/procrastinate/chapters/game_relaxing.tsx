import { Section, Chapter, Nav } from "core/components";
import { choiceBlock } from "core/features/choice";
import colors from "public/themeColors.module.scss";
import { PageType } from "core/types";
import { BulletedList } from "core/components/widgets";

export const Page: PageType = () => {
  const tag = "procrastinate__games_relaxing";
  return (
    <>
      <Chapter filename="game_relaxing">
        <Section>
          <p>
            This sounds like a nice way to unwind, something low-pressure and
            not competetive. Maybe a puzzle game, or just something casual.
          </p>

          {choiceBlock(
            tag,
            "gesture",
            1,
            `${colors.vanilla}`,
            `${colors.dark}`,
            BulletedList
          )}
        </Section>
      </Chapter>
    </>
  );
};

import { Section, Chapter, Nav } from "core/components";
import { choiceBlock } from "core/features/choice";
import colors from "public/themeColors.module.scss";
import { PageType } from "core/types";
import { BulletedList } from "core/components/widgets";

export const Page: PageType = () => {
  const tag = "procrastinate__games_phone";
  return (
    <>
      <Chapter filename="game_phone">
        <Section>
          <p>
          Ah yes, mobile games, the pinnacle of quality design and narrative. When it comes to my phone, I only do a few things: Read random articles, go on social media, or play stupid phone games. Games are fun, but I also love the rush I get from refreshing my instagram feed repeatedly and looking at the same pictures over and over.
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

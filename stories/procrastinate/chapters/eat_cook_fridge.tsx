/** Static components */
import { animated } from "@react-spring/web";
import { Section, Chapter, Nav } from "core/components";
import FadeIn from "core/components/ui/fadein";
import { BulletedList } from "core/components/widgets";
import { choiceBlock } from "core/features/choice";

/** Hooks */
import { Next, PageType } from "core/types";

/** Styling */
import colors from "public/themeColors.module.scss";
import useChapter from "core/hooks/use-chapter";

export const Page: PageType = () => {
  const chapter = useChapter();
  const tag = "procrastinate__eat_cook_fridge";
  return (
    <Chapter filename={chapter.filename}>
      <Section>
        <p>
          There's absolutely nothing appetizing in there. However, out of the
          corner of my eye, I spot some goodies in the deli drawer. I reach my
          bare hand into a bag of salami to pull out a few slices, and I grab a
          string cheese to go along with it.
        </p>
        <p>Mmmmmmm... This is so good.</p>

        <p>
        <Nav
          text="I'm still hungry though..."
          next={Next.Section}
          tag={`lookForSomethingToEatIn${chapter.filename}`}
        />
        </p>
      </Section>

      <Section>
        <p>Hmm... Which one?</p>
        {choiceBlock(
          tag,
          "handedness",
          1,
          `${colors.blue}`,
          `${colors.white}`,
          BulletedList
        )}
      </Section>
    </Chapter>
  );
};

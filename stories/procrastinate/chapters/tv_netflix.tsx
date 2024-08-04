import { Section, Chapter, Nav } from "core/components";
import { BulletedList } from "core/components/widgets";
import { choiceBlock } from "core/features/choice";
import { PageType } from "core/types";

import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  const tag = "procrastinate__tv";
  return (
    <>
      <Chapter filename="tv_netflix">
        <Section>
          <p>
            I open netflix and endlessly scroll for 30 minutes before inevitably
            watching{" "}
            <Nav
              text="The Office"
              next="tv_netflix_theoffice"
              tag="moveToTheOffice"
            />{" "}
            from where I left off. I usually don't pay attention to it because
            I've already seen every episode a number of times. It still makes
            good background noise for going on my phone.
          </p>
        </Section>
      </Chapter>
    </>
  );
};

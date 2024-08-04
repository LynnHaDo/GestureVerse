import { Section, Chapter, Nav } from "core/components";
import { BulletedList } from "core/components/widgets";
import { choiceBlock } from "core/features/choice";
import { PageType } from "core/types";

import colors from "public/themeColors.module.scss";

export const Page: PageType = () => {
  return (
    <>
      <Chapter filename="tv_regulartv_pawnstars">
        <Section>
          <p>
            I'M RICK HARRISON, AND THIS IS MY PAWN SHOP. I WORK HERE WITH MY OLD
            MAN AND MY SON, "BIG HOSS". EVERYTHING IN HERE HAS A STORY AND A
            PRICE. ONE THING I'VE LEARNED AFTER 21 YEARS - YOU NEVER KNOW WHAT
            IS GONNA COME THROUGH THAT DOOR.
          </p>

          <p>
            I can't handle this. I'm gonna watch the{" "}
            <Nav
              text="car show"
              next="tv_regulartv_carshow"
              tag="moveToCarShow"
            />
            {"."}
          </p>
        </Section>
      </Chapter>
    </>
  );
};

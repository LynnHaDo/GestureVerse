import { Section, Chapter, Nav } from "core/components";
import useInventory from "core/hooks/use-inventory";
import { PageType } from "core/types";
import FadeIn from "core/components/ui/fadein";

export const Page: PageType = () => {
  const [walk] = useInventory(["walk"]);

  return (
    <Chapter filename="start">
      <Section>
        <div className="row">
          <p>
            It is a lovely day to go for a {" "}
            <Nav text="walk" next="choice" tag="walk" persist={false} />
          </p>
          <FadeIn
            children={<img src="/stories/my-story/images/01.png" />}
          ></FadeIn>
        </div>
      </Section>
    </Chapter>
  );
};

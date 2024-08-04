import { Section, Chapter, Nav, C } from "core/components";
import FadeIn from "core/components/ui/fadein";
import { incrementScore } from "core/features/score";
import { Next, PageType, useAppDispatch } from "core/types";

import { useEffect } from "react";

export const Page: PageType = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(incrementScore());
  }, []);

  return (
    <>
      <Chapter filename="tv_netflix_theoffice">
        <Section>
          <FadeIn>
            <p>...</p>
          </FadeIn>

          <FadeIn>
            <p>
              <C
                options={[["Continue watching 'The Office'"]]}
                tag="stayAtTheOffice"
                last="Still watching"
                next={Next.None}
              />{" "}
              or <Nav text="no" next={Next.Section} tag="notStayAtTheOffice" />
              {"?"}
            </p>
          </FadeIn>
        </Section>

        <Section>
          <p>Screw homework, binging a series is way more fun.</p>

          <p>
            What should I do{" "}
            <Nav text="next" next="menu" tag="moveFromTheOffice" />
            {"?"}
          </p>
        </Section>
      </Chapter>
    </>
  );
};

import { Section, Chapter, Nav } from "core/components";
import FadeIn from "core/components/ui/fadein";
import { PageType, useAppDispatch } from "core/types";
import { useEffect } from "react";

export const Page: PageType = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(incrementScore());
    }, []);
  return (
    <Chapter filename="clean_start">
      <Section>
        <p>
        I spend an hour organizing everything and making sure to not do my homework. Cleaning your room is only fun when you have other things to do.
        </p>
        <FadeIn>
            <p>Hmm... Are there any{" "}
            <Nav
              text="todos"
              next="menu"
              tag={`moveFrom${__filename}toMenu`}
            />
            {" "}
            left
            {"?"}
            </p>
          </FadeIn>
      </Section>
    </Chapter>
  );
};
function incrementScore(): any {
    throw new Error("Function not implemented.");
}


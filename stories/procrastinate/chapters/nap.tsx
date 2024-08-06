import { Section, Chapter, Nav } from "core/components";
import { PageType } from "core/types";
import { animated } from "@react-spring/web";

import FadeIn from "core/components/ui/fadein";
import useChapter from "core/hooks/use-chapter";
import { useVariable } from "core/hooks/use-variable";

export const Page: PageType = () => {
  const chapter = useChapter();
  const nap = useVariable("nap");

  if (nap) {
    return (
      <Chapter filename="nap">
        <Section>
          <Nav
            text="Oh no is it already time to do homework??"
            next="menu"
            tag="endNap"
          />
        </Section>
      </Chapter>
    );
  }

  return (
    <>
      <Chapter filename="nap">
        <Section>
          {/* Giphy */}
          <div
            style={{
              width: "100%",
              height: 0,
              paddingBottom: "56%",
              position: "relative",
            }}
          >
            <iframe
              src="https://giphy.com/embed/mD5OczI0Xyz5P0hy4Y"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
          <p>
            <a href="https://giphy.com/gifs/nehumanesociety-sleep-nap-time-mD5OczI0Xyz5P0hy4Y">
              via Giphy
            </a>
          </p>

          <FadeIn wrapper={animated("p")} delayTime={500}>
            Zzzzzz
          </FadeIn>

          <FadeIn wrapper={animated("p")} delayTime={800}>
            Zzzzzz
          </FadeIn>

          <FadeIn wrapper={animated("p")} delayTime={1100}>
            Zzzzzz
          </FadeIn>

          <FadeIn wrapper={animated("p")} delayTime={1400}>
            Zzzzzz
          </FadeIn>

          <FadeIn wrapper={animated("p")} delayTime={1700}>
            <Nav
              text="Wait, what time is it?"
              tag={`moveFrom${chapter.filename}toTime`}
              next="nap_time"
            />
          </FadeIn>
        </Section>
      </Chapter>
    </>
  );
};

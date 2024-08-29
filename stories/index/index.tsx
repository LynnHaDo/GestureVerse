import * as React from "react";

import { ReactFCC } from "core/types";

import styles from "public/stories/index/styles/Index.module.scss";

import { Camera } from "core/components";
import { createGestureRecognizer, reloadScreen } from "core/components/chapter";
import { HandGesture } from "core/components/camera";
import {
  optionItem,
  optionItemProps,
  Options,
} from "core/components/constants/options";

import { useRouter } from "next/router";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { Gestures } from "core/components/constants/gesture";

const Index: ReactFCC = ({ children }) => {
  const tag = "index__menu";

  const [gestureRecognizer, gestureRecognizerSetter] = React.useState(null);
  const [modelLoaded, setModelLoaded] = React.useState(false);

  const [result, resultSetter] = React.useState<HandGesture>(null); // save the state of the tag

  const options = Options[tag];

  const optionKeys: string[] = Object.keys(options);
  const optionValues: Array<optionItemProps> = Object.values(options);

  const router = useRouter();

  React.useEffect(() => {
    reloadScreen();
    createGestureRecognizer(gestureRecognizerSetter);
    setModelLoaded(true);
  }, [modelLoaded]);

  React.useEffect(() => {
    if (result && result.category == "Pointing_Up") {
      const form = document.forms["menuList"];
      const radios: RadioNodeList = form.elements["slider"];
      const checkedItem = Array.from(radios).find((radio) => radio["checked"]);

      const index = Array.from(radios).indexOf(checkedItem);
      let nextIndex = index + 1;

      if (nextIndex === 3) {
        nextIndex = 0;
      }

      setTimeout(() => {
        Array.from(radios).at(nextIndex)["checked"] = true;
        setModelLoaded(false);
      }, 4000);
    } else if (result && result.category != 'Pointing_Up') {
      let answer = optionKeys.find((k) => options[k].action == result.category);

      let selectedIndex = optionKeys.indexOf(answer);
      let lis = document.getElementsByTagName("li");

      lis.item(selectedIndex).classList.add(`${styles.selected}`);

      // Get the answer
      let url = "/" + router.basePath + answer;

      setTimeout(() => {
        window.location.replace(url);
        lis.item(selectedIndex).classList.remove(`${styles.selected}`);
        setModelLoaded(false);
      }, 4000);
    }
  }, [result]);

  const [width, setWidth] = React.useState(window.innerWidth);
  const [canvasWidth, setCanvasWidth] = React.useState(230);
  const [canvasHeight, setCanvasHeight] = React.useState(130);

  React.useEffect(() => {
    /** Code referenced from https://www.dhiwise.com/post/react-get-screen-width-everything-you-need-to-know */
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (width < 500) {
      setCanvasWidth(canvasWidth * 0.5);
      setCanvasHeight(canvasHeight * 0.5);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>gestureverse</h1>
      </div>
      <main>
        <Camera
          gestureRecognizer={gestureRecognizer}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
          resultSetter={resultSetter}
          availableOptions={[...optionValues, optionItem("Pointing_Up")]}
        />

        <form className={styles.wrapper} name="menuList">
          <input type="radio" id="home" name="slider" defaultChecked={true} />
          <input type="radio" id="about" name="slider" />
          <input type="radio" id="reference" name="slider" />

          <span className={styles.formInstruction}>
            {Gestures["Pointing_Up"]} (any) to move to the next section
          </span>

          <div className={styles.labels}>
            <label htmlFor="home" className={styles.main}>
              <div className={styles.story}>
                <Container>
                  <h2 className={styles.heading}>Choose your own adventure</h2>

                  <ul className={styles.menuList}>
                    {optionKeys.map((k, i) => {
                      return (
                        <li key={i}>
                          <Container>
                            <Row>
                              <Col lg={6}>
                                <span className={styles.storyName}>
                                  {options[k].description}
                                </span>
                              </Col>
                              <Col lg={6}>
                                <span className={styles.instruction}>
                                  {Gestures[options[k].action]}
                                </span>
                              </Col>
                            </Row>
                          </Container>
                        </li>
                      );
                    })}
                  </ul>
                </Container>
              </div>
            </label>

            <label htmlFor="about" className={styles.main}>
              <div className={styles.story}>
                <Container>
                  <h2 className={styles.heading}>about</h2>

                  <p>
                    Built upon{" "}
                    <a
                      href="https://github.com/lizadaly/windrift"
                      target="_blank"
                    >
                      Windrift
                    </a>
                    , a JavaScript framework for writing interactive stories,
                    gestureverse guides users through an immersive
                    choose-your-own-adventure experience.
                  </p>

                  <p>
                    However, unlike{" "}
                    <a
                      href="https://itch.io/games/html5/tag-twine"
                      target="_blank"
                    >
                      other
                    </a>{" "}
                    interactive stories (you can try some to get a sense of what
                    this is), you will <em>mostly</em> engage with the stories
                    using hand gestures via the web camera (Don't worry, the
                    application does not save any images of you making weird
                    gestures in front of the camera—feel free to dig into the{" "}
                    <a
                      href="https://github.com/LynnHaDo/GestureVerse"
                      target="_blank"
                    >
                      source code
                    </a>{" "}
                    if you don't believe).
                  </p>

                  <p>
                    Also, note that all the stories included in this project are
                    not owned by me (I just adapted the original hypertext
                    versions into <em>gesture-vers(e)</em>ions). You will find
                    the source of the stories, as well as any music accompanied
                    down below (Yes, definitely turn on the music if allowed).
                  </p>

                  <p>Hope you will find the stories engaging. Enjoy ~</p>
                </Container>
              </div>
            </label>

            <label htmlFor="reference" className={styles.main}>
              <div className={styles.story}>
                <Container>
                  <h2 className={styles.heading}>reference</h2>

                  <Accordion
                    defaultActiveKey="0"
                    flush
                    bsPrefix={`${styles.customAccordion}`}
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h3>a beach walk</h3>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className={styles.smallerText}>
                          interstellar-bird (n.d.). Beach Walk. [online]
                          itch.io. Available at:
                          https://interstellar-bird.itch.io/beach-walk [Accessed
                          16 Jul. 2024].
                        </p>
                        <p className={styles.smallerText}>
                          Slom (2019). overkill. [Streamed] SoundCloud.
                          Available at:
                          https://soundcloud.com/sanaislom/190328-overkill
                          [Accessed 15 Aug. 2024].
                        </p>

                        <p className={styles.smallerText}>
                          Fisherman (2024). re·nu. [Stream] YouTube: STANDARD
                          FRIENDS, under license to Dreamus. Available at:
                          https://www.youtube.com/watch?v=eHyPNaoMMjQ [Accessed
                          15 Aug. 2024].
                        </p>

                        <p className={styles.smallerText}>
                          Wonstein (2020). Infrared Camera (Inst.). [Streamed]
                          YouTube: Stone Music Entertainment. Available at:
                          https://www.youtube.com/watch?v=MzL8GvA7Kjk [Accessed
                          15 Aug. 2024].
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <h3>congee</h3>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className={styles.smallerText}>
                          Becci (n.d.). Congee. [online] itch.io. Available at:
                          https://becciness.itch.io/congee [Accessed 12 Aug.
                          2024].
                        </p>

                        <p className={styles.smallerText}>
                          Slom (2019). 2:13AM. [Streamed] YouTube: Slom.
                          Available at:
                          https://www.youtube.com/watch?v=922lzAd_XpM [Accessed
                          15 Aug. 2024].
                        </p>

                        <p className={styles.smallerText}>
                          Slom (2022). LETTER SENT TO YOU. [Streamed] YouTube:
                          STANDARD FRIENDS, under license to Dreamus. Available
                          at: https://www.youtube.com/watch?v=Z9s2KGV_bKI
                          [Accessed 15 Aug. 2024].
                        </p>

                        <p className={styles.smallerText}>
                          Cosmic Boy and Fisherman (2019). Love. [Streamed]
                          YouTube: STONESHIP. Available at:
                          https://www.youtube.com/watch?v=Q_DOtvl5LNo [Accessed
                          15 Aug. 2024].
                        </p>

                        <p className={styles.smallerText}>
                          Colde (2023). Star (Instrumental). [Streamed] YouTube:
                          Stone Music Entertainment. Available at:
                          https://www.youtube.com/watch?v=PQ8fm3aO-B8 [Accessed
                          15 Aug. 2024].
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <h3>procrastinate</h3>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className={styles.smallerText}>
                          j-mo (n.d.). Procrastinate. [online] itch.io.
                          Available at: https://j-mo.itch.io/procrastinate
                          [Accessed 6 Aug. 2024].
                        </p>

                        <p className={styles.smallerText}>
                          Coogie, SUPERBEE , D.Ark and CHANGMO (2018). saimsaim
                          (Instrumental). [Streamed] YouTube: Stone Music
                          Entertainment. Available at:
                          https://www.youtube.com/watch?v=xwcYCgPgVWI [Accessed
                          15 Aug. 2024].
                        </p>

                        <p className={styles.smallerText}>
                          CODE KUNST and Kid Milli (2018). Change
                          (Instrumental). [Streamed] YouTube: Stone Music
                          Entertainment. Available at:
                          https://www.youtube.com/watch?v=4t1c1-jWCG8 [Accessed
                          15 Aug. 2024].
                        </p>

                        <p className={styles.smallerText}>
                          Slom (2014). Moonlite. [mp3] SoundCloud. Available at:
                          https://soundcloud.com/sanaislom/moonlite-2014
                          [Accessed 15 Aug. 2024].
                        </p>

                        <p className={styles.smallerText}>
                          Slom (2018). overdue. [mp3] SoundCloud. Available at:
                          https://soundcloud.com/sanaislom/180120-due [Accessed
                          15 Aug. 2024].
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Container>
              </div>
            </label>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Index;

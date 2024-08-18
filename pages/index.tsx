import { GetStaticProps } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";

import { useEffect, useRef } from "react";

import styles from "public/stories/index/styles/Index.module.scss";

import { NeatConfig, NeatGradient } from "@firecms/neat";
import { backgroundFillStyle } from "core/components/backgroundFill";
import { Loader } from "core/components/loader";

import { Container, Row, Col, Accordion } from "react-bootstrap";

import emailjs from "@emailjs/browser";

interface StoryProps {
  paths: string[];
}

export const getStaticProps: GetStaticProps = async () => {
  const storyDirs = path.join(process.cwd(), "public/stories");
  const paths = fs
    .readdirSync(storyDirs, { withFileTypes: true })
    .filter(
      (dir) =>
        dir.isDirectory() &&
        (dir.name.includes("procrastinate") ||
          dir.name.includes("a-beach-walk") ||
          dir.name.includes("congee"))
    )
    .map((dir) => dir.name)
    .flat();
  return {
    props: {
      paths,
    },
  };
};

export const config: NeatConfig = {
  colors: [
    {
      color: "#99F9D2",
      enabled: true,
    },
    {
      color: "#FFE39B",
      enabled: true,
    },
    {
      color: "#A5D8F3",
      enabled: true,
    },
    {
      color: "#D55833",
      enabled: true,
    },
    {
      color: "#f5e1e5",
      enabled: false,
    },
  ],
  speed: 4,
  horizontalPressure: 5,
  verticalPressure: 6,
  waveFrequencyX: 0,
  waveFrequencyY: 0,
  waveAmplitude: 6,
  shadows: 9,
  highlights: 0,
  colorBrightness: 1,
  colorSaturation: 4,
  wireframe: false,
  colorBlending: 8,
  backgroundColor: "#8322CE",
  backgroundAlpha: 1,
  resolution: 1.2,
};

const Index = ({ paths }: StoryProps): JSX.Element => {
  const gradient = useRef<HTMLCanvasElement>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const emailSubmitBtn = useRef<HTMLButtonElement>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailSubmitBtn.current.value = "Sending...";

    const serviceID = process.env.SERVICE_ID;
    const templateID = process.env.TEMPLATE_ID;
    const publicKey = process.env.PUBLIC_KEY;

    console.log(serviceID, templateID, publicKey);

    emailjs
      .sendForm(serviceID, templateID, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          emailSubmitBtn.current.innerText = "Send Email";
        },
        (err) => {
          emailSubmitBtn.current.innerText = "Send Email";
        }
      );
  };

  useEffect(() => {
    const neat = new NeatGradient({
      ref: gradient.current,
      ...config,
    });

    return () => neat.destroy();
  }, []);

  return (
    <>
      <Head>
        <title lang="en">gestureverse</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/Storytelling_Logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/Storytelling_Logo_transparent.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/Storytelling_Logo_transparent.png"
        />
      </Head>
      <Loader />
      <div className="gradient">
        <canvas ref={gradient} style={{ ...backgroundFillStyle, zIndex: -1 }} />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>gestureverse</h1>
        </div>
        <form className={styles.wrapper} ref={formRef}>
          <input type="radio" id="home" name="slider" defaultChecked={true} />
          <input type="radio" id="about" name="slider" />
          <input type="radio" id="reference" name="slider" />
          <input type="radio" id="contact" name="slider" />

          <div className={styles.labels}>
            <label htmlFor="home" className={styles.main}>
              <div className={styles.story}>
                <Container>
                  <h2 className={styles.heading}>Choose your own adventure</h2>

                  <ul>
                    {paths.map((s) => (
                      <li key={s}>
                        <a href={`${s}`}>{s.replaceAll("-", " ")}</a>
                      </li>
                    ))}
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
                    versions into <em>gesture-vers(e)</em>ions). You will find the
                    source of the stories, as well as any music accompanied down
                    below (Yes, definitely turn on the music if allowed).
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

            <label htmlFor="contact" className={styles.main}>
              <div className={styles.story}>
                <Container>
                  <h2 className={styles.heading}>contact</h2>

                  <Row className={styles.field}>
                    
                      <label htmlFor="from_name">
                        <h3>Name</h3>
                      </label>
                    
                      <input type="text" name="from_name" id="from_name" />
                  
                  </Row>
                  <Row className={styles.field}>
                    
                      <label htmlFor="from_name">
                        <h3>Email</h3>
                      </label>
                    
                    
                      <input type="email" name="user_email" id="user_email" />
                    
                  </Row>
                  <Row className={styles.field}>
                    
                      <label htmlFor="message">
                        <h3>Message</h3>
                      </label>
                   
                    
                      <textarea name="message" id="message" />
                    
                  </Row>
                  <Row className={styles.field}>
                  <button
                    type="submit"
                    id="button"
                    ref={emailSubmitBtn}
                    onSubmit={sendEmail}
                    className={styles.submitBtn}
                  >
                    <h3>Send email</h3>
                  </button>
                  </Row>

                  <div className={styles.footer}>
                    <a
                      href="https://github.com/LynnHaDo/GestureVerse"
                      target="_blank"
                    >
                      <img src="/images/github.svg" alt="Github" />
                    </a>
                    <a href="mailto:do24l@mtholyoke.edu">
                      <img src="/images/mail.svg" alt="Gmail" />
                    </a>
                  </div>
                </Container>
              </div>
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default Index;

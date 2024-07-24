import { GetStaticProps } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";

import styles from "public/stories/index/styles/Index.module.scss";

import { NeatConfig, NeatGradient } from "@firecms/neat";
import { useEffect, useRef } from "react";

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
        (dir.name.includes("my-story") || dir.name.includes("my-game"))
    )
    .map((dir) => dir.name)
    .flat();
  return {
    props: {
      paths,
    },
  };
};

const backgroundGradient: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: -1
}

export const config: NeatConfig = {
    colors: [
        {
            "color": "#1B5D38",
            "enabled": true
        },
        {
            "color": "#FFC858",
            "enabled": true
        },
        {
            "color": "#67A9D7",
            "enabled": true
        },
        {
            "color": "#D55833",
            "enabled": true
        },
        {
            "color": "#f5e1e5",
            "enabled": false
        }
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
    resolution: 1.2
}

function Index({ paths }: StoryProps): JSX.Element {
   const gradient = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
    const neat = new NeatGradient({
        ref: gradient.current,
        ...config
    });

    return (() => neat.destroy())
   })
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
      <div className="loader"></div>
      <div className="gradient">
        <canvas ref={gradient} style={backgroundGradient}/>
      </div>
      <header className={styles.header}>
        <nav>
          <div></div>
          <h1>gestureverse</h1>
          <div> </div>
        </nav>
      </header>
      <main className={styles.main} lang="en">
        <nav className={styles.left}></nav>
        <article className={styles.story}>
          <p>Choose your own adventure</p>
          <ul>
            {paths.map((s) => (
              <li key={s}>
                <a href={`${s}`}>{s}</a>
              </li>
            ))}
          </ul>
        </article>
        <nav className={styles.right}></nav>
      </main>
    </>
  );
}

export default Index;

import { GetStaticProps } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";

import styles from "public/stories/index/styles/Index.module.scss";

import { NeatConfig, NeatGradient } from "@firecms/neat";
import { useEffect, useRef, useState } from "react";
import { backgroundFillStyle } from "core/components/backgroundFill";
import { Loader } from "core/components/loader";

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

function Index({ paths }: StoryProps): JSX.Element {
  const gradient = useRef<HTMLCanvasElement>(null);

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
        <canvas ref={gradient} style={backgroundFillStyle} />
      </div>
      <header className={styles.header}>
        <nav>
          <div></div>
          <h1>gestureverse</h1>
          <div> </div>
        </nav>
      </header>
      <main
        className={styles.main}
        lang="en"
      >
        <nav className={styles.left}></nav>
        <article className={styles.story}>
          <p>Choose your own adventure</p>
          <div className="row">
            <ul>
              {paths.map((s) => (
                <li key={s}>
                  <a href={`${s}`}>{s.replaceAll("-", " ")}</a>
                </li>
              ))}
            </ul>
          </div>
        </article>
        <nav className={styles.right}></nav>
      </main>
    </>
  );
}

export default Index;

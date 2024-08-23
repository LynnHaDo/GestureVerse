import { GetStaticProps } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";

import { useEffect, useRef } from "react";

import { NeatConfig, NeatGradient } from "@firecms/neat";
import { backgroundFillStyle } from "core/components/backgroundFill";
import { Loader } from "core/components/loader";

import dynamic, { DynamicOptions } from "next/dynamic";

interface StoryProps {
  paths: string[];
}

export const getStaticProps: GetStaticProps = async () => {
  const storyDirs = path.join(process.cwd(), "public/stories");
  const paths = fs
    .readdirSync(storyDirs, { withFileTypes: true })
    .filter(
      (dir) =>
        dir.isDirectory() 
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

  const Index = dynamic(
    import("../stories/index/index") as DynamicOptions<Record<string, unknown>>,
    {}
  );

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
      <Index />
    </>
  );
};

export default Index;

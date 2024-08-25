import * as React from "react";

import { ReactFCC } from "core/types";

import styles from "public/stories/procrastinate/styles/Index.module.scss";
import stylesIndex from "public/stories/index/styles/Index.module.scss";

import Head from "next/head";
import { GridProps } from "core/components/ui/layouts/grid";
import { Gestures } from "core/components/constants/gesture";
import { MusicPlayer } from "core/components";

const Index: ReactFCC = ({ children }: GridProps) => {
  let [hideMenu, hideMenuSetter] = React.useState(false);

  return (
    <>
      <Head>
        <title lang="en">procrastinate</title>
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
      <main className={styles.main}>{hideMenu && <>{children}</>}</main>
      <MusicPlayer
        dir="/audio/procrastinate"
        hideMenu={hideMenu}
        hideSetter={hideMenuSetter}
        className={styles.musicContainer}
        instructionClassName={styles.instruction}
      />
      <span className={stylesIndex.formInstruction}>
        {Gestures["Pointing_Up"]} to go back to home
      </span>
    </>
  );
};

export default Index;

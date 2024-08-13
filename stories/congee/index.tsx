import * as React from "react";

import { ReactFCC } from "core/types";

import styles from "public/stories/congee/styles/Index.module.scss";
import colors from "public/themeColors.module.scss";

import { setupIonicReact } from "@ionic/react";
import Head from "next/head";
import MusicPlayer from "core/components/musicPlayer";
import { Header } from "core/components";

const Index: ReactFCC = ({ children }) => {
  React.useEffect(() => {
    setupIonicReact();
  });
  return (
    <>
      <Head>
        <title lang="en">congee</title>
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
      <Header
        className={styles.header}
        controlsClassName={styles.controls}
        backButtonClassName={styles.backButton}
        backgroundColor='rgb(0, 0, 0)'
        position="right"
      />
      <main className={styles.main}>{children}</main>
      <MusicPlayer
        source="https://open.spotify.com/embed/playlist/63dbhcfrs5DyCRxmoZc0VS?utm_source=generator"
        color={`${colors.lightYellow}`}
      />
    </>
  );
};

export default Index;

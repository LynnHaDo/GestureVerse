import * as React from "react";

import { ReactFCC } from "core/types";
import Grid from "core/components/ui/layouts/grid";

import styles from "public/stories/congee/styles/Index.module.scss";
import colors from "public/themeColors.module.scss";

import ResetButton from "core/components/ui/reset-button";
import { setupIonicReact } from "@ionic/react";
import Head from "next/head";
import MusicPlayer from "core/components/musicPlayer";

const headerEl = React.createElement(
  "header",
  { className: styles.header },
  <nav>
    <div className={styles.controls}>
      <button
        className={styles.backButton}
        onClick={() => window.location.replace(window.location.origin)}
      >
        home
      </button>
      <ResetButton
        message="Do you want to reset the story?"
        style={{ fontSize: "1rem" }}
      />
    </div>
  </nav>
);

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
      <Grid styles={styles} header={headerEl}>{children}</Grid>
      <MusicPlayer source="https://open.spotify.com/embed/playlist/63dbhcfrs5DyCRxmoZc0VS?utm_source=generator" color={`${colors.lightYellow}`}/>
    </>
  );
};

export default Index;

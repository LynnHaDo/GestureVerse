import * as React from "react";

import { ReactFCC } from "core/types";

import styles from "public/stories/congee/styles/Index.module.scss";
import colors from "public/themeColors.module.scss";

import Head from "next/head";
import MusicPlayer from "core/components/musicPlayer";
import { Header } from "core/components";

const Index: ReactFCC = ({ children }) => {
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
        modalVariant={styles.customModal}
        modalHeaderClass={styles.customModalHeader}
        modalBodyClass={styles.customModalBody}
        modalFooterClass={styles.customModalFooter}
      />
      <main className={styles.main}>{children}</main>
      <MusicPlayer
        dir="/audio/congee"
        iconColor={colors.lightYellow}
        playlistBackgroundColor={colors.white}
        iconStyling={{
          backgroundColor: 'transparent',
          border: `1.5px solid ${colors.lightYellow}`,
        }}
      />
    </>
  );
};

export default Index;

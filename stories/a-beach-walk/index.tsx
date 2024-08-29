import * as React from "react";

import { ReactFCC } from "core/types";

import styles from "public/stories/a-beach-walk/styles/Index.module.scss";
import stylesIndex from "public/stories/index/styles/Index.module.scss";
import { Gestures } from "core/components/constants/gesture";
import colors from "public/themeColors.module.scss";
import Head from "next/head";
import { MusicPlayer } from "core/components";

const Index: ReactFCC = ({ children }) => {
  let [hideMenu, hideMenuSetter] = React.useState(false);
  return (
    <>
      <Head>
        <title lang="en">a beach walk</title>
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
        dir="/audio/a-beach-walk"
        hideMenu={hideMenu}
        hideSetter={hideMenuSetter}
        className={styles.musicContainer}
        instructionClassName={styles.instruction}
      />
      <span
        className={stylesIndex.formInstruction}
        style={{ color: `${colors.white}` }}
      >
        {Gestures["Pointing_Up"]} (left) to go back to home |{" "}
        {Gestures["Pointing_Up"]} (right) to scroll up |{" "}
        {Gestures["Closed_Fist"]} (left) to scroll down
      </span>
    </>
  );
};

export default Index;

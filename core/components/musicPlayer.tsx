import path from "path";

import { Dispatch, useEffect, useRef, useState } from "react";
import styles from "./MusicPlayer.module.scss";
import Camera, { HandGesture } from "./camera";
import { Col, Container, Row } from "react-bootstrap";
import { Gestures } from "./constants/gesture";
import { createGestureRecognizer, reloadScreen } from "./chapter";

import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import MusicOffRoundedIcon from "@mui/icons-material/MusicOffRounded";
import { useVariable } from "core/hooks/use-variable";
import { useAppDispatch } from "core/types";
import { updateVariable } from "core/features/variable-manager";

export interface MusicPlayerProps {
  /** Path to the playlist */
  dir: string;
  /** Classname applied to the widget */
  className?: string;
  /** Classname applied to the instruction */
  instructionClassName?: string;
  /** Whether to hide the menu */
  hideMenu?: boolean;
  hideSetter?: Dispatch<boolean>;
}

const MusicPlayer = ({
  dir,
  className = "",
  instructionClassName = "",
  hideMenu = false,
  hideSetter = null,
}: MusicPlayerProps) => {
  const dispatch = useAppDispatch();
  /** Music states */
  let audioRef = useRef(null);
  let [data, setData] = useState(null);
  let musicConfigItem: { [key: string]: any } | undefined = useVariable(
    "procrastinate__MUSIC_CONFIG"
  );

  let [play, setPlay] = useState(false);

  /** Model states */
  const acceptedOptions = [
    "Closed_Fist",
    "Open_Palm",
    "Thumb_Down",
    "Victory",
    "Pointing_Up",
  ];
  const [gestureRecognizer, gestureRecognizerSetter] = useState(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  const [result, resultSetter] = useState<HandGesture>(null); // save the state of the tag

  const fetchData = async () => {
    try {
      const response = await fetch(path.join(process.cwd(), dir, "info.json"));

      if (!response.ok) {
        return console.log(`Response status: ${response.status}`);
      }

      let musicData = await response.json();

      if (musicData) {
        setData({
          songs: [...musicData],
          currentSong: musicData[0],
          songCurrentTime: 0,
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const playPrev = () => {
    if (data?.currentSong.id == 0) {
      data.currentSong = data.songs[data.songs.length - 1];
    } else {
      data.currentSong = data.songs[data.currentSong.id - 1];
    }
    data.songCurrentTime = 0;
    setData({ ...data });
    playSong();
  };

  const playSong = () => {
    setPlay(true);
    dispatch(
      updateVariable("procrastinate__MUSIC_CONFIG", {
        on: true,
        currentSong: data.currentSong,
      })
    );
    audioRef.current.src = path.join(process.cwd(), dir, data.currentSong.path);
    audioRef.current.title = data.currentSong.title;
    audioRef.current.currentTime = data.songCurrentTime;
    audioRef.current.play();
  };

  const pauseSong = () => {
    setPlay(false);
    dispatch(
      updateVariable("procrastinate__MUSIC_CONFIG", {
        on: false,
        currentSong: null,
      })
    );
    data.songCurrentTime = audioRef.current.currentTime;
    audioRef.current.pause();
  };

  const playNext = () => {
    let currentSongIndex = data?.currentSong.id;
    if (
      data?.currentSong == null ||
      data?.songs.length == 1 ||
      currentSongIndex == data?.songs.length - 1
    ) {
      data.currentSong = data.songs[0];
    } else {
      data.currentSong = data.songs[currentSongIndex + 1];
    }

    data.songCurrentTime = 0;
    setData({ ...data });
    playSong();
  };

  useEffect(() => {
    fetchData();

    if (musicConfigItem == null || musicConfigItem == undefined) {
      hideSetter(false);
    } else {
      hideSetter(true);
    }
  }, []);

  useEffect(() => {
    if (data && musicConfigItem) {
      data.currentSong = musicConfigItem["currentSong"]
        ? musicConfigItem["currentSong"]
        : data.songs[0];
      musicConfigItem["on"] && playSong();
    }
  }, [data]);

  useEffect(() => {
    reloadScreen();
    createGestureRecognizer(gestureRecognizerSetter);
    setModelLoaded(true);
  }, [modelLoaded]);

  useEffect(() => {
    if (result) {
      switch (result.category) {
        case acceptedOptions[0]:
          playSong();
          setModelLoaded(false);
          break;
        case acceptedOptions[1]:
          pauseSong();
          setModelLoaded(false);
          break;
        case acceptedOptions[2]:
          dispatch(
            updateVariable("procrastinate__MUSIC_CONFIG", {
              on: play,
              currentSong: data.currentSong,
            })
          );
          hideSetter(true);
          break;
        case acceptedOptions[3]:
          playNext();
          setModelLoaded(false);
          break;
        case acceptedOptions[4]:
          playPrev();
          setModelLoaded(false);
      }
    }
  }, [result]);

  return (
    <>
      <audio onEnded={playNext} ref={audioRef} />
      {!hideMenu && (
        <div className={styles.container}>
          <Camera
            gestureRecognizer={gestureRecognizer}
            canvasWidth={230}
            canvasHeight={130}
            resultSetter={resultSetter}
            availableOptions={acceptedOptions}
          />
          <Container>
            <Row>
              <Col lg={4}></Col>
              <Col lg={4}>
                <div
                  className={className}
                  style={{ padding: "1rem", marginTop: "5em" }}
                >
                  <div className={styles.musicWrapper}>
                    <div className={styles.musicHeader}>
                      <h3>Playlist</h3>
                      <div className={styles.musicHeaderButtons}>
                        {play ? (
                          <span className={styles.selected}>
                            <MusicNoteRoundedIcon />
                          </span>
                        ) : (
                          <span className={styles.selected}>
                            <MusicOffRoundedIcon />
                          </span>
                        )}
                      </div>
                    </div>
                    <div className={styles.player}>
                      {data && (
                        <>
                          <div className={styles.playlistWrapper}>
                            {Object.values(data?.songs).map((song, i) =>
                              song["title"] === data?.currentSong?.title ? (
                                <div
                                  key={i}
                                  className={`${styles.song} ${styles.current}`}
                                >
                                  <h4>{data?.currentSong?.title}</h4>
                                  <p>{data?.currentSong?.artist}</p>
                                </div>
                              ) : (
                                <div key={i} className={styles.song}>
                                  <h4>{song["title"]}</h4>
                                  <p>{song["artist"]}</p>
                                </div>
                              )
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className={`${styles.modal} ${instructionClassName}`}>
                    <ul>
                      <li>
                        {Gestures["Thumb_Down"]} to <span>exit menu</span>
                      </li>
                      <li>
                        {Gestures["Closed_Fist"]} to <span>play music</span>
                      </li>
                      <li>
                        {Gestures["Victory"]} to <span>play next song</span>
                      </li>
                      <li>
                        {Gestures["Pointing_Up"]} to{" "}
                        <span>play previous song</span>
                      </li>
                      <li>
                        {Gestures["Open_Palm"]} to <span>turn off music</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={4}></Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

{
  /**
    <MusicPlayer
        dir="/audio/congee"
        iconColor={colors.lightYellow}
        playlistBackgroundColor={colors.white}
        iconStyling={{
          backgroundColor: 'transparent',
          border: `1.5px solid ${colors.lightYellow}`,
        }}
      />
    */
}

export default MusicPlayer;

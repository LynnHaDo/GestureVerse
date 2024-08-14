import path from "path";

import { useEffect, useState, useRef } from "react";

import styles from "./MusicPlayer.module.scss";

import { IonIcon } from "@ionic/react";
import { playSkipBack, play, playSkipForward, pause } from "ionicons/icons";

export const MusicPlaylist = (
  dir: string,
  backgroundColor: string = "rgb(34, 33, 31)"
): JSX.Element => {
  let audioRef = useRef(null);
  let [data, setData] = useState(null);

  let [isSongPlaying, setIsSongPlaying] = useState(false);

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
    setIsSongPlaying(false);
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
    audioRef.current.src = path.join(process.cwd(), dir, data.currentSong.path);
    audioRef.current.title = data.currentSong.title;
    audioRef.current.currentTime = data.songCurrentTime;
    audioRef.current.play();
    setIsSongPlaying(true);
  };

  const pauseSong = () => {
    data.songCurrentTime = audioRef.current.currentTime;
    audioRef.current.pause();
    setIsSongPlaying(false);
  };

  const playNext = () => {
    let currentSongIndex = data?.currentSong.id;
    setIsSongPlaying(false);
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
  }, []);

  return (
    data && <div
      className={styles.playlistWrapper}
      style={{ backgroundColor: backgroundColor }}
    >
      <audio onEnded={playNext} ref={audioRef}/>
      <div className={styles.songInfo}>
        <h4>{data?.currentSong?.title}</h4>
        <p>{data?.currentSong?.artist}</p>
      </div>
      <div className={styles.buttons}>
        <button onClick={playPrev}>
          <IonIcon icon={playSkipBack} />
        </button>

        {isSongPlaying ? (
          <button onClick={pauseSong}>
            <IonIcon icon={pause} />
          </button>
        ) : (
          <button onClick={playSong}>
            <IonIcon icon={play} />
          </button>
        )}

        <button onClick={playNext}>
          <IonIcon icon={playSkipForward} />
        </button>
      </div>
    </div>
  );
};

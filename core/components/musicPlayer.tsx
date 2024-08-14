import { Image } from "react-bootstrap";
import styles from "./MusicPlayer.module.scss";
import { MusicPlaylist } from "./musicPlaylist";

import { IonIcon } from "@ionic/react";
import { musicalNotesOutline } from "ionicons/icons";

export interface MusicPlayerProps {
  /** Path to the playlist */
  dir: string;
  /** Color of icon */
  iconColor?: string;
  /** Style applied to the icon */
  iconStyling?: React.CSSProperties;
  /** Color of playlist wrapper */
  playlistBackgroundColor?: string;
  /** Position of the widget */
  position?: React.CSSProperties;
}


const MusicPlayer = ({ dir, iconColor, iconStyling, playlistBackgroundColor, position }: MusicPlayerProps) => {  
  return (
    <div className={styles.container} style={{ ...position }}>
      <div className={styles.flexWrapper}>
        <div className={styles.icon} style={iconStyling}>
          <IonIcon icon={musicalNotesOutline} style={{color: iconColor}}/>
        </div>
        <div className={styles.player}>
            {MusicPlaylist(dir, playlistBackgroundColor)}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;

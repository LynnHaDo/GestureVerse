import { useDispatch } from "react-redux";
import ResetButton, { resetStory } from "./ui/reset-button";
import { useContext, useEffect, useState } from "react";
import { HandGesture } from "./camera";
import { GestureRecognizerContext } from "./chapter";
import NavBlock from "./navBlock";
import { StoryContext } from "core/containers/store-container";
import { useRouter } from "next/router";

const highlighter: React.CSSProperties = {
  fontWeight: 600,
};

export interface EndProps {
  /** Name of the story */
  storyName: string;
  /** Whether or not the story includes citations */
  reference?: boolean;
  /** List of sources to display */
  sources?: string[];
  /** Classname of the instruction block */
  instructionClassName?: string;
}

const End = ({
  storyName,
  reference = true,
  sources = [],
  instructionClassName = ''
}: EndProps): JSX.Element => {
  /** Decision-making-related states/handlers */
  const dispatch = useDispatch<any>();

  const { persistor, config } = useContext(StoryContext);
  const router = useRouter();

  const [restart, setRestart] = useState(false);

  useEffect(() => {
    if (restart) {
        resetStory(true, config, persistor, router);
    }
  }, [restart])

  return (
    <>
      <div>
        <p  style={{ lineHeight: 'inherit' }}>
          Thank you for playing <span style={highlighter}>{storyName}</span>. Now go back to the start.
        </p>
        {
          <NavBlock
            text=""
            next="intro"
            handler={() => setRestart(true)}
            tag={`goBackFrom${storyName}toTheStart`}
            instructionClassName={instructionClassName}
          />
        }
      </div>

      {reference && (
        <>
          <h5>Reference</h5>
          {...sources.map((source) => {
            return <p style={{ fontStyle: "italic", lineHeight: 'inherit' }}>{source}</p>;
          })}
        </>
      )}
    </>
  );
};

export default End;

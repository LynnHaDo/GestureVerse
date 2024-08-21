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

const resetButtonStyle: React.CSSProperties = {
  textTransform: "uppercase",
  width: "auto",
  border: "none",
};

export interface EndProps {
  /** Name of the story */
  storyName: string;
  /** Whether or not the story includes citations */
  reference?: boolean;
  /** List of sources to display */
  sources?: string[];
  /** Styling applied to the reset button */
  additionalButtonStyle?: React.CSSProperties;
  /** Styling for modal */
  modalVariant?: string;
  modalHeaderClass?: string;
  modalBodyClass?: string;
  modalFooterClass?: string;
}

const End = ({
  storyName,
  reference = true,
  sources = [],
  additionalButtonStyle,
  modalVariant,
  modalHeaderClass,
  modalBodyClass,
  modalFooterClass,
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
        <p>
          Thank you for playing <span style={highlighter}>{storyName}</span>
          {". "}
        </p>
        {
          <NavBlock
            text="Go back to the start."
            next="intro"
            handler={() => setRestart(true)}
          />
        }
      </div>

      {reference && (
        <>
          <h5>Reference</h5>
          {...sources.map((source) => {
            return <p style={{ fontStyle: "italic" }}>{source}</p>;
          })}
        </>
      )}
    </>
  );
};

export default End;

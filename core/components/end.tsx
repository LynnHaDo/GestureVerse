import ResetButton from "./ui/reset-button";

const highlighter: React.CSSProperties = {
  fontWeight: 600,
};

const resetButtonStyle: React.CSSProperties = {
  textTransform: "uppercase",
  width: "auto",
  border: "none"
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
}

const End = ({
  storyName,
  reference = true,
  sources = [],
  additionalButtonStyle,
}: EndProps): JSX.Element => {
  return (
    <>
      <p>
        Thank you for playing <span style={highlighter}>{storyName}</span>{". "}
        To play again press{" "}
        <ResetButton
          children="start"
          message="Do you want to restart the story?"
          style={{ ...resetButtonStyle, ...additionalButtonStyle }}
        />
      </p>

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

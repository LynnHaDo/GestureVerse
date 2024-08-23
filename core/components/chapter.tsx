import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";

import { setSectionCount } from "core/features/navigation";
import { getChapter } from "core/util";
import { ReactFCC, RootState, TocItem } from "core/types";

import { FilesetResolver, GestureRecognizer } from "@mediapipe/tasks-vision";

type ContextProps = {
  filename: string;
};

type GestureRecognizerContextProps = {
  gestureRecognizer: GestureRecognizer;
  gestureRecognizerSetter: React.Dispatch<GestureRecognizer>;
};

export const ChapterContext = React.createContext<Partial<ContextProps>>({});
export const GestureRecognizerContext = React.createContext<
  Partial<GestureRecognizerContextProps>
>({
  gestureRecognizer: null,
  gestureRecognizerSetter: (model) => {},
});

const createGestureRecognizer = async (
  modelSetter: React.Dispatch<GestureRecognizer>
) => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.12/wasm"
  );

  let MODEL = await GestureRecognizer.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
      delegate: "CPU",
    },
    runningMode: "VIDEO",
    numHands: 1,
    minHandDetectionConfidence: 0.6,
    minHandPresenceConfidence: 0.6
  });

  modelSetter(MODEL);
};

export interface ChapterSetup {
  item: TocItem;
}
/**
 * Initialize a chapter and dispatch initial events.
 * @return the TocItem for this chapter
 */
export const useChapterSetup = (filename: string, count: number): TocItem => {
  const item = useSelector((state: RootState) =>
    getChapter(state.navigation.present.toc, filename)
  );

  const dispatch = useDispatch();

  // On first render, record the number of sections and scroll to top
  React.useEffect(() => {
    dispatch(setSectionCount({ filename, count }));
    document.querySelector("body").scrollIntoView();
  }, [dispatch]);
  return item;
};

export interface ChapterType {
  filename: string;
  showOnlyCurrentSection?: boolean;
}
/**
 * Render a chapter containing some number of child nodes, usually Sections.
 * @param filename The filename of this chapter
 * @param sectionWrapper Wrapper for any Section nodes found in the chapter. Can be <></> for no wrapping.
 * @param showOnlyCurrentSection Whether to show all sections up to the current (the default) or to only show the current
 * @returns the chapter
 */
const Chapter: ReactFCC<ChapterType> = ({
  children,
  filename,
  showOnlyCurrentSection = false,
}) => {
  const [thisFilename] = React.useState({ filename });
  const chapterRef = React.useRef(null);

  const item = useChapterSetup(filename, React.Children.count(children));

  const [gestureRecognizer, gestureRecognizerSetter] =
    React.useState<GestureRecognizer>(null);

  const [modelLoaded, setModelLoaded] = React.useState(false);

  React.useEffect(() => {
    let numScreenLoads = sessionStorage.getItem('screenReload');
    if (numScreenLoads && parseInt(numScreenLoads) < 2) {
        sessionStorage.setItem('screenReload', String(numScreenLoads + 1))
        window.location.reload();
    }
    else {
        sessionStorage.removeItem('screenReload');
    }
    createGestureRecognizer(gestureRecognizerSetter);
    setModelLoaded(true);
  }, [modelLoaded]);

  return (
    <ChapterContext.Provider value={thisFilename}>
      <GestureRecognizerContext.Provider
        value={{ gestureRecognizer, gestureRecognizerSetter }}
      >
        <TransitionGroup component={null}>
          {renderChapterContent(children, item, showOnlyCurrentSection, {
            component: CSSTransition,
            props: { ...SectionTransition, nodeRef: chapterRef },
          })}
        </TransitionGroup>
      </GestureRecognizerContext.Provider>
    </ChapterContext.Provider>
  );
};

/**
 * Return currently-visible chapter content containing any number of child nodes, usually Sections. Sections are checked
 * for visibility and wrapped in a wrapper node, which could be null (</>).
 * @param children The child nodes of the chapter
 * @param item The TOC item represented by this chapter
 * @param showOnlyCurrentSection Whether to show all sections up to the current (the default) or to only show the current
 * @param sectionWrapper Wrapper for any Section nodes found in the chapter; defaults to </>

 * @returns
 */

export const renderChapterContent = (
  children: React.ReactNode,
  item: TocItem,
  showOnlyCurrentSection: boolean,
  sectionWrapper = { component: null, props: {} }
): React.ReactNode[] => {
  // Display all visible child nodes, only checking Sections for bookmark counts
  let index = -1;

  const kids = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const fc = child.type as React.FunctionComponent;

      if (fc.displayName === "Section") {
        index += 1;
        const condition = showOnlyCurrentSection
          ? index === item.bookmark
          : index <= item.bookmark;

        if (condition) {
          const Wrapper = sectionWrapper.component;
          return <Wrapper {...sectionWrapper.props}>{child}</Wrapper>;
        }
      } else {
        return <>{child}</>;
      }
    }
  });

  return kids;
};

// Wraps the "new section" display in a CSS transformation
const SectionTransition = {
  classNames: "windrift--section",
  timeout: {
    appear: 500,
    enter: 500,
    exit: 300,
  },
  ariaLive: "polite",
};
export default Chapter;

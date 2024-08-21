/**
 * A special case of a Choice that provides navigation between chapters.
 *
 * Use a full Choice component if you want the name of the link to change
 * after clicking.
 */
import React, { useContext, useEffect, useState } from "react";

import { BaseList } from "core/components/widgets";
import { Camera, Choice } from "core/components";
import { Tag, Next, Option } from "core/types";
import { ChapterContext } from "core/components/chapter";

import { useDispatch } from "react-redux";

import { GestureRecognizer } from "@mediapipe/tasks-vision";
import { HandGesture } from "./camera";
import { makeChoice } from "core/features/choice";

export interface NavProps {
  /** The displayed text for the link */
  text: string;
  /** The chapter name or section */
  next: string;
  /** Whether to continue to display the hyperlink or not */
  persist?: boolean;
  /** Tag to be supplied if the text string is non-unique */
  tag?: Tag;
  /** Class name to based to the widget */
  className?: string;
  /** Color of the hyperlinks */
  textColor?: string;
  /** Handler for clicking event */
  handler?: Function;
}

export interface NavBlockProps {
  gestureRecognizer: GestureRecognizer;
  /** The displayed text for the link */
  text: string;
  /** The chapter name or section */
  next: string;
  /** Whether to continue to display the hyperlink or not */
  persist?: boolean;
  /** Tag to be supplied if the text string is non-unique */
  tag?: Tag;
  /** Class name to based to the widget */
  className?: string;
  /** Color of the hyperlinks */
  textColor?: string;
  /** Handler for clicking event */
  handler?: Function;
}

const Nav = ({
  text = "More...",
  next = Next.Section,
  persist = true,
  tag = undefined,
  className = undefined,
  textColor = "",
  handler = undefined,
}: NavProps): JSX.Element => {
  const { filename } = useContext(ChapterContext);

  return (
    <Choice
      options={[[text]]}
      widget={BaseList}
      tag={
        tag ||
        `${filename || "story"}-${next}-${text
          .replaceAll(" ", "-")
          .toLowerCase()}`
      }
      next={next}
      persist={persist}
      className={className}
      extra={{ textColor: textColor }}
      handler={handler}
    />
  );
};

export default Nav;

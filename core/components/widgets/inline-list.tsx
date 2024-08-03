/**
 * An inline list of choice options, the default widget.
 * @example Will produce: "foo, bar, and baz"
 *
 */
import * as React from "react";

import { WidgetProps } from "core/components/widgets";
import Link from "core/components/link";

export interface InlineListProps extends WidgetProps {
  /** The separator between list items
   * @default ","
   */
  separator: string;
  /** The conjunction terminating a list of items
   * @default "or"
   */
  conjunction: string;
  /**
   * Color of text
   * @default ''
   */
  textColor?: string;
}
declare function InlineListType(props: InlineListProps): JSX.Element;

export const InlineList: typeof InlineListType = ({
  separator = ", ",
  conjunction = "or",
  group = null,
  optionList = null,
  handler = null,
  tag = null,
  className = null,
  textColor = "",
  type = "link",
}: InlineListProps): JSX.Element => {
  if (conjunction.length > 0) {
    conjunction = ` ${conjunction} `;
  }

  return (
    <>
      {optionList == null || optionList.length == 0? (
      <span>
        {[...group]
          .filter((c) => c !== null && c !== undefined)
          .map((t, i) => (
            <span key={i} className={className}>
              {group.length > 1 && i === group.length - 1 ? conjunction : ""}
              {type == "link" ? (
                <Link
                  handler={handler}
                  text={t}
                  tag={tag}
                  color={textColor}
                />
              ) : (
                t
              )}
              {i < group.length - 1 && group.length > 2 ? separator : ""}
            </span>
          ))}
      </span>
      ) : (
      <span>
        {[...group]
          .filter((c) => c !== null && c !== undefined)
          .map((t, i) => (
            <span key={i} className={className}>
              {group.length > 1 && i === group.length - 1 ? conjunction : ""}
              {type == "link" ? (
                <Link handler={() => handler(t)} text={optionList.at(i).description} tag={tag} color={textColor} />
              ) : (
                optionList.at(i).description
              )}
              {i < group.length - 1 && group.length > 2 ? separator : ""}
            </span>
          ))}
      </span>
      )
    }
    </>
    
  );
  
};

export const InlineListEN: typeof InlineList = ({
  separator = ", ",
  conjunction = "or",
  group = null,
  handler = null,
  tag = null,
  className = null,
  textColor = "",
  optionList = null,
  type = 'link'
}: InlineListProps): JSX.Element =>
  InlineList({
    separator,
    conjunction,
    group,
    handler,
    tag,
    className,
    textColor,
    optionList,
    type
  });

/** Portuguese version of an inline list with an "or" conjunction */
export const InlineListPT: typeof InlineList = ({
  separator = ", ",
  conjunction = "e",
  group = null,
  handler = null,
  tag = null,
  className = null,
  optionList = null,
  type = 'link'
}: InlineListProps): JSX.Element =>
  InlineList({ separator, conjunction, group, handler, tag, className, optionList, type });

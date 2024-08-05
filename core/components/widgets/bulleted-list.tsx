/**
 * A bulleted list presentation where the unpicked items remain in the list
 * @example will produce "<ul><li>Item 1</li><li>Item 2</li></ul>"
 *
 * It's recommended to implement your own custom version of this component to match
 * the desired HTML.
 */

import * as React from "react";
import { isEqual } from "lodash";

import Link from "core/components/link";
import { WidgetProps } from ".";

declare function BulletedListType(props: WidgetProps): JSX.Element;

// Passing initialChoices means you can leave the existing ones there
const InlineList: typeof BulletedListType = ({
  group = [],
  handler = null,
  tag = null,
  initialOptions = [],
  optionList = [],
  className = null,
  type = "link",
}: WidgetProps): JSX.Element => {
  return (
    <>
      {optionList && (
        <ul>
          {[...initialOptions[0]].map((t, i) => (
            <li key={i} className={className}>
              {optionList.at(i).disabled ? (
                <p style={{ textDecoration: "line-through" }}>
                  {optionList.at(i).description}
                </p>
              ) : (
                <>
                  {type == "link" ? (
                    <Link
                      handler={() => handler(t)}
                      text={optionList.at(i).description}
                      tag={tag}
                    />
                  ) : (
                    <p>{optionList.at(i).description}</p>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default InlineList;

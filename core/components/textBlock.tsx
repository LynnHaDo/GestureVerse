import { useEffect } from 'react';

import { padding, size, 
    positionBottomLeft, positionBottomMiddle, positionBottomRight, 
    positionUpperLeft, positionUpperMiddle, positionUpperRight } from './constants/positions';

export interface TextBlockProps {
    /** Position of the box on the page (bottom_left, bottom_right, upper_left, upper_right) */
    position?: string,
    /** Color of the blur of the background */
    backgroundColor?: string,
    /** Color of the text on top of the background */
    textColor?: string,
    /** Position of the text within the box (left, center, right) */
    textAlign?: string,
    children: React.ReactNode
}

const TextBlock = ({position, 
                    backgroundColor, 
                    textColor, 
                    textAlign,
                    children}: TextBlockProps) => {

    let positionStyle: React.CSSProperties;
    let colorStyle: React.CSSProperties;
    let textPositionStyle: React.CSSProperties;

    switch(position) {
        case "bottom_right":
            positionStyle = positionBottomRight;
            break;
        case "upper_left":
            positionStyle = positionUpperLeft;
            break;
        case "upper_right":
            positionStyle = positionUpperRight;
            break;
        case "upper_middle":
            positionStyle = positionUpperMiddle;
            break;
        case "bottom_middle":
            positionStyle = positionBottomMiddle;
            break;
        default: 
            positionStyle = positionBottomLeft;
    }

    switch (textAlign) {
        case "right":
            textPositionStyle = {
                textAlign: "right"
            }
            break;
        case "center":
            textPositionStyle = {
                textAlign: "center"
            }
            break;
        default: 
            textPositionStyle = {
                textAlign: "left"
            }
            break;
    }

    if (backgroundColor) {
        colorStyle = {
            backgroundColor: backgroundColor,
            color: textColor
        }
    }

    return (
        <div style={{...positionStyle, 
                    ...padding,
                    ...size}}>
            <div style={{...colorStyle, ...textPositionStyle}}>
                {children}
            </div>            
        </div>
    );
}

export default TextBlock;
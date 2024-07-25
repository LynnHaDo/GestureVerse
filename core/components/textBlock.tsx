import { useEffect } from 'react';
import styles from './TextBlock.module.scss'

const DISTANCE_MARGIN = 0;
const DISTANCE_PADDING = '2rem'

const padding: React.CSSProperties = {
    padding: DISTANCE_PADDING
}

const position: React.CSSProperties = {
    position: 'fixed',
    zIndex: 2
}

const size: React.CSSProperties = {
    width: '50%',
}

const positionBottomLeft: React.CSSProperties = {
    ...position,
    bottom: DISTANCE_MARGIN,
    left: DISTANCE_MARGIN
}

const positionBottomRight: React.CSSProperties = {
    ...position,
    bottom: DISTANCE_MARGIN,
    right: DISTANCE_MARGIN
}

const positionUpperLeft: React.CSSProperties = {
    ...position,
    top: DISTANCE_MARGIN,
    left: DISTANCE_MARGIN
}

const positionUpperRight: React.CSSProperties = {
    ...position,
    top: DISTANCE_MARGIN,
    right: DISTANCE_MARGIN
}

export interface TextBlockProps {
    /** Position of the box on the page (bottom_left, bottom_right, upper_left, upper_right) */
    position?: string,
    /** Color of the blur of the background */
    backgroundColor?: string,
    /** Color of the text on top of the background */
    textColor?: string,
    children: React.ReactNode
}

const TextBlock = ({position = 'bottom_left', 
                    backgroundColor, 
                    textColor, 
                    children}: TextBlockProps) => {

    let positionStyle: React.CSSProperties;
    let colorStyle: React.CSSProperties;

    useEffect(() => {
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
            default: 
                positionStyle = positionBottomLeft;
        }

        if (backgroundColor) {
            colorStyle = {
                backgroundColor: backgroundColor,
                color: textColor
            }
        }

        console.log(colorStyle);
    }, [])

    return (
        <div style={{...positionStyle, 
                    ...padding,
                    ...size}}>
            <div className = {styles.content} style={{...colorStyle}}>
                {children}
            </div>            
            <div className = {styles.gradientBlur}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default TextBlock;
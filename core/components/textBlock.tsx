import { useEffect } from 'react';
import styles from './TextBlock.module.scss'

const DISTANCE_MARGIN = 0;

const padding: React.CSSProperties = {
    padding: DISTANCE_MARGIN
}

const position: React.CSSProperties = {
    position: 'fixed',
    zIndex: 2
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
    backgroundBlurColor?: string,
    /** Color of the text on top of the background */
    textColor?: string,
    children: React.ReactNode
}

const TextBlock = ({position = 'bottom_left', backgroundBlurColor, textColor, children}: TextBlockProps) => {
    let positionStyle: React.CSSProperties = positionBottomLeft;

    useEffect(() => {
        switch(position) {
            case "bottom_right":
                positionStyle = positionBottomRight
                break 
            case "upper_left":
                positionStyle = positionUpperLeft
                break 
            case "upper_right":
                positionStyle = positionUpperRight 
        }
    }, [])

    return (
        <div style={{...positionStyle, 
                    ...padding}}>
                        
            <div className = {styles.content}>
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
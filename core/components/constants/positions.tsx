const DISTANCE_MARGIN = 0;
const DISTANCE_PADDING = '2rem'

export const padding: React.CSSProperties = {
    padding: DISTANCE_PADDING
}

export const position: React.CSSProperties = {
    position: 'fixed',
    zIndex: 2
}

export const positionBottomLeft: React.CSSProperties = {
    ...position,
    bottom: DISTANCE_MARGIN,
    left: DISTANCE_MARGIN
}

export const positionBottomRight: React.CSSProperties = {
    ...position,
    bottom: DISTANCE_MARGIN,
    right: DISTANCE_MARGIN
}

export const positionUpperLeft: React.CSSProperties = {
    ...position,
    top: DISTANCE_MARGIN,
    left: DISTANCE_MARGIN
}

export const positionUpperRight: React.CSSProperties = {
    ...position,
    top: DISTANCE_MARGIN,
    right: DISTANCE_MARGIN
}

export const positionUpperMiddle: React.CSSProperties = {
    ...position,
    top: "calc(20vh)",
    left: "34%",
}

export const positionBottomMiddle: React.CSSProperties = {
    ...position,
    top: "calc(60vh)",
    left: "34%",
}
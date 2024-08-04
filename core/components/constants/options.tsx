/**
 * const Gestures = {
    0: "None", 
    1: "Closed_Fist", 
    2: "Open_Palm", 
    3: "Pointing_Up", 
    4: "Thumb_Down", 
    5: "Thumb_Up", 
    6: "Victory", 
    7: "ILoveYou"
    }
 */

export interface optionItemProps {
    /** Gesture corresponding to the item */
    action: 'Closed_Fist' | 'Open_Palm' | 'Pointing_Up' | "Thumb_Down" | "Thumb_Up" | "Victory" | "ILoveYou" | null
    /** Handedness of the gesture */
    handedness: 'Left' | 'Right' | null
    /** Detailed description of the text representing the link */
    description: string
    /** Whether or not the choice should be disabled (default false) */
    disabled?: boolean
}

export const optionItem = ( action: optionItemProps['action'] = null, 
                            handedness: optionItemProps['handedness'] = null,
                            description: optionItemProps['description'] = '',
                            disabled: optionItemProps['disabled'] = false) => {
    return {
        'action': action,
        'handedness': handedness,
        'description': description,
        'disabled': disabled
    }
}

export interface OptionProps {
    [tag: string]: {
        [key: string]: optionItemProps
    }
}

/**
 * List of tags and the corresponding options
 */
export const Options: OptionProps = {
    "leftOrRight": {
        "left": optionItem('Thumb_Up', null, 'turn left'), // thumbs up
        "right": optionItem('Thumb_Down', null, 'turn right'), // thumbs down
    },
    "left": {
        "lighthouse": optionItem('Pointing_Up', null, 'visit the lighthouse'), // point up
        "stairs": optionItem('Closed_Fist', null, 'go down the stairs') // closed fist
    },
    "right": {
        "fence": optionItem('Open_Palm', null, 'look through the broken fence'), // open palm
        "further": optionItem("Victory", null, 'go further') // victory (v sign)
    },
    "procrastinate__menu": {
        "homework": optionItem('Thumb_Down', null, 'Start on some homework', true),
        "tv": optionItem("Thumb_Up", null, 'Watch TV'),
        "nap": optionItem("Victory", null, 'Take a nap'),
        "game": optionItem("Open_Palm", null, 'Play video games'),
        "eat": optionItem("Pointing_Up", null, 'Eat something'),
        "clean": optionItem("Closed_Fist", null, 'Clean my room')
    },
    "procrastinate__tv": {
        "tv_regulartv": optionItem(null, 'Left', 'Regular tv'),
        "tv_netflix": optionItem(null, 'Right', 'Netflix')
    },
    "procrastinate__tv_regulartv": {
        "tv_regulartv_pawnstars": optionItem(null, 'Left', 'Pawn Stars'),
        "tv_regulartv_carshow": optionItem(null, 'Right', 'car restoration show'),
    },
    'procrastinate__tv_netflix_theoffice': {
        
    }
}
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
    action: 'Closed_Fist' | 'Open_Palm' | 'Pointing_Up' | "Thumb_Down" | "Thumb_Up" | "Victory" | "ILoveYou"
    /** Detailed description of the text representing the link */
    description: string
    /** Whether or not the choice should be disabled (default false) */
    disabled?: boolean
}

export const optionItem = ( action: optionItemProps['action'], 
                            description: optionItemProps['description'],
                            disabled: optionItemProps['disabled'] = false) => {
    return {
        'action': action,
        'description': description,
        'disabled': disabled
    }
}

/**
 * List of tags and the corresponding options
 */
export const Options = {
    "leftOrRight": {
        "left": optionItem('Thumb_Up', 'turn left'), // thumbs up
        "right": optionItem('Thumb_Down', 'turn right'), // thumbs down
    },
    "left": {
        "lighthouse": optionItem('Pointing_Up', 'visit the lighthouse'), // point up
        "stairs": optionItem('Closed_Fist', 'go down the stairs') // closed fist
    },
    "right": {
        "fence": optionItem('Open_Palm', 'look through the broken fence'), // open palm
        "further": optionItem("Victory", 'go further') // victory (v sign)
    },
    "menuPro": {
        "homework": optionItem('Thumb_Down', 'start on some homework', true),
        "tv": optionItem("Thumb_Up", 'watch TV'),
        "nap": optionItem("Victory", 'take a nap'),
        "game": optionItem("Open_Palm", 'play video games'),
        "eat": optionItem("Pointing_Up", 'eat something'),
        "clean": optionItem("Closed_Fist", 'clean my room')
    }
}
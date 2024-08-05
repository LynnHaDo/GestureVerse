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
    "procrastinate__games": {
        "game_relaxing": optionItem(null, 'Left', 'Relaxing'),
        "game_phone": optionItem(null, 'Right', 'Something on my phone')
    },
    "procrastinate__games_relaxing": {
        "game_relaxing_breathofthewild": optionItem('Open_Palm', null, 'Breath of the Wild'),
        "game_relaxing_supermarioodyssey": optionItem('Pointing_Up', null, 'Super Mario Odyssey'),
        "game_relaxing_goosegame": optionItem('Closed_Fist', null, 'Untitled goose game')
    },
    "procrastinate__games_phone": {
        "game_phone_phonegame": optionItem('Open_Palm', null, 'Play a boring (?) phone game'),
        "game_phone_instagram": optionItem('Pointing_Up', null, 'Instagram time'),
        "game_phone_article": optionItem('Closed_Fist', null, "Educate myself on why Tesla's stock is dropping."),
    },
    "procrastinate__clean": {
        "clean_clothes": optionItem('Thumb_Up', null, 'Collect the clothes on the floor'),
        "clean_trash": optionItem('Thumb_Down', null, 'Empty the trash'),
        "clean_desk": optionItem('ILoveYou', null, "Let's clean the desk")
    },
    "procrastinate__eat": {
        "eat_cook": optionItem(null, 'Left', 'Cook'),
        "eat_buy": optionItem(null, 'Right', 'Go get something')
    },
    "procrastinate__eat_cook": {
        "eat_cook_fridge": optionItem(null, 'Left', 'fridge'),
        "eat_cook_fridge_cupboard": optionItem(null, 'Right', 'cupboard')
    },
    "procrastinate__eat_cook_fridge": {
        "eat_cook_fridge_freezer": optionItem(null, 'Left', 'Check the freezer'),
        "eat_cook_fridge_cupboard": optionItem(null, 'Right', 'Check the cupboard')
    },
    "procrastinate__eat_buy": {
        "eat_cook_fridge_freezer": optionItem(null, 'Left', 'Check the freezer'),
        "eat_buy_doordash": optionItem(null, 'Right', 'Open the phone to order something on Doordash')
    },
}
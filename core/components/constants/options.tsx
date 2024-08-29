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
    /** MENU */
    "index__menu": {
        'a-beach-walk': optionItem('Thumb_Up', null, 'a beach walk'),
        'congee': optionItem('Thumb_Down', null, 'congee'),
        'procrastinate': optionItem('ILoveYou', null, 'procrastinate')
    },
    /** A BEACH WALK */
    "a-beach-walk__leftOrRight": {
        "left": optionItem('Thumb_Up', null, 'turn left'), 
        "right": optionItem('Thumb_Down', null, 'turn right'), 
    },
    "a-beach-walk__left": {
        "lighthouse": optionItem('Open_Palm', null, 'visit the lighthouse'), 
        "stairs": optionItem("Victory", null, 'go down the stairs') 
    },
    "a-beach-walk__right": {
        "fence": optionItem('Open_Palm', null, 'look through the broken fence'), 
        "further": optionItem("Victory", null, 'go further') 
    },

    /** PROCRASTINATE */
    "procrastinate__menu": {
        "homework": optionItem('Thumb_Down', null, 'Start on some homework', true),
        "tv": optionItem("Thumb_Up", null, 'Watch TV'),
        "nap": optionItem("Victory", null, 'Take a nap'),
        "game": optionItem("Open_Palm", null, 'Play video games'),
        "eat": optionItem("ILoveYou", null, 'Eat something'),
        "clean": optionItem("Closed_Fist", 'Right', 'Clean my room')
    },
    "procrastinate__tv": {
        "tv_regulartv": optionItem(null, 'Left', 'Regular tv'),
        "tv_netflix": optionItem(null, 'Right', 'Netflix')
    },
    "procrastinate__tv_regulartv": {
        "tv_regulartv_pawnstars": optionItem(null, 'Left', 'Pawn Stars'),
        "tv_regulartv_carshow": optionItem(null, 'Right', 'car restoration show'),
    },
    "procrastinate__tv_netflix": {
        "tv_netflix_theoffice_continue": optionItem(null, 'Left', 'Continue watching'),
        "menu": optionItem(null, 'Right', 'no'),
    },
    "procrastinate__games": {
        "game_relaxing": optionItem(null, 'Left', 'Relaxing'),
        "game_phone": optionItem(null, 'Right', 'Something on my phone')
    },
    "procrastinate__games_relaxing": {
        "game_relaxing_breathofthewild": optionItem('Open_Palm', null, 'Breath of the Wild'),
        "game_relaxing_supermarioodyssey": optionItem('Victory', null, 'Super Mario Odyssey'),
        "game_relaxing_goosegame": optionItem('Closed_Fist', 'Right', 'Untitled goose game')
    },
    "procrastinate__games_phone": {
        "game_phone_phonegame": optionItem('Open_Palm', null, 'Play a boring (?) phone game'),
        "game_phone_instagram": optionItem('Victory', null, 'Instagram time'),
        "game_phone_article": optionItem('Closed_Fist', 'Right', "Educate myself on why Tesla's stock is dropping"),
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
    "procrastinate__homework_fail": {
        "homework_start_timer": optionItem('Thumb_Up', null, 'Try again'),
        "homework_quit": optionItem('Thumb_Down', null, 'Quit')
    },

    /** CONGEE */
    "congee__start": {
        "start_kick_blanket": optionItem('Open_Palm', null, 'Kick your blanket off'),
        "start_curl": optionItem('Victory', null, 'Curl up into a ball')
    },
    "congee__tell": {
        "tell_internet": optionItem(null, 'Left', 'Look up your symptoms on the internet'),
        "tell_allison": optionItem(null, 'Right', 'Text Allison, your best friend')
    },
    "congee__tell_allison": {
        "tell_allison_response_death": optionItem('Victory', null, "I'm not being melodramatic but I think death is near dfdsfdf"),
        "tell_allison_response_netflix": optionItem('ILoveYou', null, 'I need a very distracting Netflix recommendation'),
        'tell_allison_response_vessel': optionItem('Closed_Fist', 'Right', 'The body is but a weak vessel')
    },
    "congee__get_options": {
        "get_takeaway": optionItem('Thumb_Up', null, 'Check your local Chinese takeaway'),
        "get_doordash": optionItem('Thumb_Down', null, 'Check Doordash')
    },
    "congee__sub_options_takeaway": {
        "get_doordash": optionItem(null, 'Left', 'Check Doordash'),
        "get_finish": optionItem(null, 'Right', "No more searching today...")
    },
    "congee__sub_options_doordash": {
        "get_takeaway": optionItem(null, 'Left', 'Check the Chinese Palace place out'),
        "get_finish": optionItem(null, 'Right', "Too tired... no more searching today...")
    },
    "congee__open_door": {
        "open_door_ignore": optionItem('Open_Palm', null, 'Just ignore it'),
        "open_door_open": optionItem('Closed_Fist', 'Right', 'Open the door')
    },
    "congee__end": {
        "end_congee_club": optionItem('Thumb_Up', null, "Congee Club?"),
        "end_asian_celebration": optionItem('Victory', null, "Asian celebration?"),
        "end_no_more_western_food": optionItem('ILoveYou', null, "No more Western food day?")
    }
}

export const Variables: OptionProps = {   
    /** Procrastinate */
    "procrastinate__grace_period": {
        '10': optionItem('Victory', null, '10 minutes'),
        '20': optionItem('Open_Palm', null, '20 minutes'),
        '30': optionItem('Closed_Fist', 'Right', '30 minutes')
    },
    /** CONGEE */
    "congee__disease": {
        'fever': optionItem('Thumb_Up', null, 'fever'),
        "food_poisoning": optionItem('Thumb_Down', null, 'food poisoning thing'),
        "lurgy": optionItem('Victory', null, 'general sense of lurgy'),
        "rare_illness": optionItem('Open_Palm', null, 'rare illness from swimming in that river in the jungle last month. Bad idea')
    }
}

export interface TextReplacementProps {
    [filename: string]: {
        [initialSentence: string]: string
    }
}

export const TextReplacements: TextReplacementProps = {
    "homework_start": {
        "Oh god I gotta grab my school stuff I think I can still finish in time.": "No, I need to focus.",
        "Let's see, I have a chapter to read and a response to write on it, which I really don't want to do but it needs to get done.": "I can't keep doing this to myself.",
        "I have art I need to make but that's due tommorow evening I think I can get that done tonight too so I can relax tommorow.": "Why can't I just make myself do work.",
        "I gotta figure out what to do first.": "..."
    },
    "homework_start_one": {
        "Ok good, one thing out of the way.": "Argh... I dont want to do this anymore.",
        "So now I should probably start my art homework.": "I'm tired from doing nothing.",
        "I've been holding off on that one because I just haven't been inspired.": "Ughhhhhhhhhhhhhh.",
        "OH NO I HAD MATH TOO!!! I THOUGHT I WAS ALMOST DONE. NOW I'M GOING TO STAY UP SUPER LATE TO FINISH THAT.": "I DONT WANT TO PRACTICE INTEGRATION TECHNIQUES.",
        "Ugh ok I'll do that now it's more important and probably takes longer.": "What a long day (sigh)..."
    },
    "homework_start_two": {
        "I'm so close.": "Almost done.",
        "Keep going!": "I can do this.",
        "Boom, math done!": "Now for art.",
        "I'm suddenly inspired, I'm forcing myself to be.": "So closeeeee..."
    },
    "get_doordash": {
        "Nandos": "You don't really feel like that right now.",
        "KFC": "Definitely not.",
        "Five Guys": "Greasy burger? No thanks.",
        "Mission Burrito": "Nahh",
        "China Palace": "Looks promising"
    }
}
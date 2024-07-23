import { Gestures } from "./gesture";
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
/**
 * List of tags and the corresponding options
 */
export const Options = {
    "leftOrRight": {
        "left": Gestures["Thumb_Up"], // thumbs up
        "right": Gestures["Thumb_Down"], // thumbs down
    },
    "left": {
        "lighthouse": Gestures["Pointing_Up"], // point up
        "stairs": Gestures["Closed_Fist"] // closed fist
    },
    "right": {
        "fence": Gestures["Open_Palm"], // open palm
        "further": Gestures["Victory"] // victory (v sign)
    }
}
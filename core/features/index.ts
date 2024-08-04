import { combineReducers } from 'redux'
import inventory from './inventory'
import choices from './choice'
import counter from './counter'
import navigation from './navigation'
import log from './log'
import score from './score'

const rootReducer = combineReducers({
    inventory,
    counter,
    choices,
    navigation,
    log,
    score
})

export default rootReducer

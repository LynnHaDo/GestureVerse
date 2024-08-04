import { createSlice } from '@reduxjs/toolkit'
import undoable from 'redux-undo'

interface ScoreState {
    value: number
}

const initialState = { value: 0 } satisfies ScoreState as ScoreState

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        incrementScore(state) {
            state.value++
        }
    }
})

export const { incrementScore } = scoreSlice.actions
export default undoable(scoreSlice.reducer)
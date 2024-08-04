import * as React from 'react'

import { ActionCreators } from 'redux-undo'
import { connect, ConnectedProps } from 'react-redux'

import { Counter } from 'core/components'
import { Config, RootState } from 'core/types'
import { increment } from 'core/features/score'
import Score from 'core/components/score'

interface StoryProps extends PropsFromRedux {
    config: Config
    children: React.ReactNode
}

class StoryContainer extends React.Component<StoryProps> {
    constructor(props: StoryProps) {
        super(props)
        this.jumpFromHistory = this.jumpFromHistory.bind(this)
        if (props.config.enableUndo) {
            // If we received a browser forward/back, jump to the relevant point in history
            window.addEventListener('popstate', this.jumpFromHistory)
        }
    }
    componentDidMount() {
        // On the first mount, also jump from the history
        if (this.props.config.enableUndo) {
            this.jumpFromHistory()
        }
    }
    jumpFromHistory() {
        const browserState = window.history.state
        const { config, counter } = this.props
        if (config.identifier in browserState) {
            const timeOffset = browserState[config.identifier] - counter
            console.log(`jumping from counter ${counter} offset ${timeOffset}`)
            this.props.jump(timeOffset)
        }
    }

    render() {
        return (
            <div id="container">
                <Counter identifier={this.props.config.identifier} counter={this.props.counter} />
                <Score identifier={this.props.config.identifier} score={this.props.score} />
                {this.props.children}
            </div>
        )
    }
}

const mapState = (state: RootState) => ({
    counter: state.counter.present.value,
    score: state.score.present.value
})
const mapDispatch = (dispatch) => ({
    jump: (offset: number) => dispatch(ActionCreators.jump(offset)),
    incrementScore: () => dispatch(increment())
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(StoryContainer)

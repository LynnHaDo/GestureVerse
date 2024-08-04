import * as React from 'react'
// TODO update this to an FC + effects

interface ScoreProps {
    identifier: string
    score: number
}

interface BrowserState {
    [identifier: string]: number
}

export default class Score extends React.Component<ScoreProps> {
    constructor(props: ScoreProps) {
        super(props)
        const { score = 0, identifier } = props
        this.updateReplaceState(score, identifier)
    }
    UNSAFE_componentWillReceiveProps(newProps: ScoreProps): void {
        this.updateReplaceState(newProps.score, this.props.identifier)
    }
    updateReplaceState(Score: number, identifier: string): void {
        const s: BrowserState = {}
        s[identifier] = Score
        window.history.replaceState(s, '', '')
    }
    render(): React.ReactNode {
        return null
    }
}

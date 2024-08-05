import * as React from 'react'

import { GenericVariableState } from 'core/features/variable-manager'

interface VariableManagerProps {
    identifier: string
    value: GenericVariableState
}

interface BrowserState {
    [identifier: string]: GenericVariableState
}

export default class VariableManager extends React.Component<VariableManagerProps> {
    constructor(props: VariableManagerProps) {
        super(props)
        const { value = null, identifier } = props
        this.updateReplaceState(value, identifier)
    }
    UNSAFE_componentWillReceiveProps(newProps: VariableManagerProps): void {
        this.updateReplaceState(newProps.value, this.props.identifier)
    }
    updateReplaceState(value: Object, identifier: string): void {
        const s: BrowserState = {}
        s[identifier] = value
        window.history.replaceState(s, '', '')
    }
    render(): React.ReactNode {
        return null
    }
}

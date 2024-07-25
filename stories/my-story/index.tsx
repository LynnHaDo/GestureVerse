import * as React from 'react'

import { ReactFCC } from 'core/types'

import styles from 'public/stories/my-story/styles/Index.module.scss'

const Index: ReactFCC = ({ children }) => {
    return (
        <div style={styles}>
            {children}
        </div>
    )
}

export default Index

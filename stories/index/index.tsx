import * as React from 'react'

import { ReactFCC } from 'core/types'
import Grid from 'core/components/ui/layouts/grid'

import styles from 'public/stories/index/styles/Index.module.scss'

const Index: ReactFCC = ({ children }) => {
    return (
        <Grid styles={styles}>
            {children}
        </Grid>
    )
}

export default Index

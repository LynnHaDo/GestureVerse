import * as React from 'react'

import { ReactFCC } from 'core/types'
import Grid from 'core/components/ui/layouts/grid'

import styles from 'public/stories/my-story/styles/Index.module.scss'

const Index: ReactFCC = ({ children }) => {
    return (
        <Grid styles={styles}
              head={
                <>
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/images/Storytelling_Logo_transparent.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/images/Storytelling_Logo_transparent.png"
                    />
                </>
              }>
            {children}
        </Grid>
    )
}

export default Index

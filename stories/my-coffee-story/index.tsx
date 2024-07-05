import * as React from 'react'

import { ReactFCC } from 'core/types'
import Grid from 'core/components/ui/layouts/grid'

import styles from 'public/stories/my-coffee-story/styles/Index.module.scss'

const Index: ReactFCC = ({ children }) => {
    return (
        <Grid 
            styles={styles}
            head={
                <>
                  <link rel = "icon"
                        type="image/x-icon"
                        href = "/stories/my-coffee-story/images/Storytelling_logo_transparent.png" />
                  <link rel = "shortcut icon" href = "/stories/my-coffee-story/images/Storytelling_logo_transparent.png" />
                </>
            }>
            
            {children}
        </Grid>
    )
}

export default Index

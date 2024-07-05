import { C, R, Section, Chapter, Nav } from 'core/components'
import { PageType } from 'core/types'

import styles from 'public/stories/my-coffee-story/styles/Index.module.scss';

export const Page: PageType = () => (
    <Chapter filename="menu">
        <Section className={styles.wrapper}>
            <p className={styles.text_center}>Choose your own adventure</p>
            <div className = {styles.text_center}>
                <Nav    text = "my coffee story" 
                        next = "my-coffee-story" 
                        tag = "my-story" />
                <br />
                <Nav    text = "my little game" 
                        next = "my-little-game" 
                        tag = "my-game" />
            </div>
        </Section>
        
    </Chapter>
)

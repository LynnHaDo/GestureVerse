import { C, R, Section, Chapter, Nav } from 'core/components'
import { PageType } from 'core/types'

import styles from 'public/stories/my-coffee-story/styles/Index.module.scss';

export const Page: PageType = () => (
    <Chapter filename="chapter1">
        <Section className={styles.wrapper}>
            <p className={styles.text_center}>Choose your own adventure</p>
        </Section>
    </Chapter>
)

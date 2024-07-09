import { C, R, Section, Chapter, Nav } from 'core/components'
import { PageType } from 'core/types'

export const Page: PageType = () => (
    <Chapter filename="chapter1">
        <Section>
            <h1>index</h1>
        </Section>
    </Chapter>
)

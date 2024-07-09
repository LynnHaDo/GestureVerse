import { C, R, Section, Chapter, Nav } from 'core/components'
import { PageType } from 'core/types'
import Camera from 'stories/my-story/camera'

export const Page: PageType = () => (
    <Chapter filename="chapter1">
        <Section>
            <h1>Chapter 1</h1>
            <Camera />
        </Section>
    </Chapter>
)

import { C, R, Section, Chapter, Nav, Camera } from 'core/components'
import { PageType } from 'core/types'

export const Page: PageType = () => (
    <Chapter filename="chapter1">
        <Section>
            <h1>Chapter 1</h1>
            <Camera canvasWidth={640}
                    canvasHeight={360}
                    btnBackgroundColor='rgb(34, 33, 31)'
                    textColor='rgb(250, 250, 250)'
                    numHands={1}/>
        </Section>
    </Chapter>
)

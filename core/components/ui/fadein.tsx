import { Transition, AnimatedComponent, animated, config } from '@react-spring/web'
import { ReactFCC } from 'core/types'

interface Props {
    wrapper?: AnimatedComponent<any>,
    children: React.ReactNode,
    delayTime?: number
}
/**
 * Animate a fade-in transition for a single React node. This is typically used inside a <Response>.
 *
 * If overriding the wrapper, you must pass this as the result of an animated() call.
 *
 * @param wrapper The animated HTML element type that will wrap the children; defaults to <span>
 * @returns
 */
const FadeIn: ReactFCC<Props> = ({ children, wrapper = animated('span'), delayTime = 50 }) => {
    const AnimatedContent = wrapper
    return (
        <Transition
            items={children}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ 
                opacity: 0,
                /** To stop the component from jumping downward */
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
             }}
            delay={delayTime}
            config={config.molasses}>
            {(styles, item) => item && <AnimatedContent style={styles}>{item}</AnimatedContent>}
        </Transition>
    )
}

export default FadeIn

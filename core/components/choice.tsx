import * as React from 'react'

import {
    WidgetType,
    Next,
    Option,
    Options,
    NextType,
    useAppDispatch,
    useAppSelector
} from 'core/types'

import { ChapterContext } from 'core/components/chapter'
import { InlineListEN } from 'core/components/widgets/inline-list'

import { init, makeChoice } from 'core/features/choice'
import { init as initInventory } from 'core/features/inventory'

import useInventory from 'core/hooks/use-inventory'

import { optionItemProps } from './constants/options'

export interface ChoiceProps {
    tag: string
    type?: 'link' | 'string'
    options: Options
    optionList?: Array<optionItemProps>
    /** At completion of the choice list, go to the Next section/chapter, go to the named chapter (if a string) or do nothing */
    next?: NextType
    widget?: WidgetType
    /** Arbitrary arguments passed unchanged to the underlying widget */
    extra?: Record<string, unknown>
    /** Text to display last (when resolved) instead of the default last-chosen item  */
    last?: Option
    /** Default option to prepopulate the inventory */
    defaultOption?: Option
    /** Whether to retain the last choice as a hyperlink, as for navigation. @defaultValue false */
    persist?: boolean
    /** Optional className to be passed through to the outer-most element rendering the Choice */
    className?: string
    handler?: Function
}

const Choice = ({
    options,
    tag,
    type = 'link',
    extra,
    optionList = null,
    widget = InlineListEN,
    next = Next.Section,
    persist = false,
    last = null,
    defaultOption = null,
    className = null,
    handler = null
}: ChoiceProps): JSX.Element => {
    const dispatch = useAppDispatch()
    const choice = useAppSelector((state) => {
        return state.choices.present
    })
    React.useEffect(() => {
        dispatch(init({ tag, lastIndex: options.length - 1 }))
        dispatch(initInventory({ tag, option: defaultOption }))
    }, [dispatch])

    if (tag in choice) {
        return (
            <MutableChoice
                options={options}
                optionList={optionList}
                tag={tag}
                extra={extra}
                widget={widget}
                next={next}
                persist={persist}
                last={last}
                className={className}
                type={type}
                handler={handler}
            />
        )
    }
    return null
}

const MutableChoice = ({
    tag,
    options,
    optionList,
    extra,
    widget,
    next,
    persist,
    last,
    className,
    type,
    handler
}: ChoiceProps): JSX.Element => {
    const dispatch = useAppDispatch()
    const { filename } = React.useContext(ChapterContext)

    const choice = useAppSelector((state) => {
        return state.choices.present[tag]
    })
    const [inventory] = useInventory([tag])

    // Generic handler that a widget-specific handler will call once the player has made their choice
    let genericHandler = (option: Option): void => {
        dispatch(makeChoice(tag, option, next, filename))
    }

    let handlerFunct: Function = handler == null || handler == undefined? genericHandler : handler
    
    let group = options[choice.index]

    // If a choice is resolved, it will have no handler. If `last` is defined, display that instead of the
    // current option
    if (choice.resolved) {
        if (!persist) {
            handlerFunct = null
        }
        if (last !== undefined && last !== null) {
            group = [last]
        } else {
            group = [inventory]
        }
    }

    
    return React.createElement(widget, {
        group: group,
        handler: handlerFunct,
        tag: tag,
        initialOptions: options,
        optionList: optionList,
        className,
        type,
        ...extra
    })
}

export default Choice

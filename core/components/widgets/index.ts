import { Tag, OptionGroup, Options } from 'core/types'
import { optionItemProps } from '../constants/options'

export { InlineListEN as InlineList } from './inline-list'
export { default as BulletedList } from './bulleted-list'
export { default as BaseList } from './base-list'

export interface WidgetProps {
    group?: OptionGroup
    initialOptions?: Options
    optionList?: Array<optionItemProps>
    handler?: Function // TODO type this better
    tag?: Tag
    className?: string
    textColor?: string
    type?: 'link' | 'string'
}

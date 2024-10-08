/**
 * A default widget presentation with no styling
 */

import * as React from 'react'

import Link from 'core/components/link'
import { WidgetProps } from '.'

declare function BaseListType(props: WidgetProps): JSX.Element

const BaseList: typeof BaseListType = ({
    group = null,
    handler = null,
    tag = null,
    className = null,
    textColor = ''
}: WidgetProps): JSX.Element => {
    
    return (
        <>
            {[...group].map((t, i) => (
                <span key={i} className={className}>
                    <Link handler={handler} text={t} tag={tag} color={textColor}/>
                </span>
            ))}
        </>
    )
}

export default BaseList

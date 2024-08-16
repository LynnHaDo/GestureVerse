import * as React from 'react'
import { Persistor } from 'redux-persist'
import { NextRouter, useRouter } from 'next/router'

import { Config } from 'core/types'
import { StoryContext } from 'core/containers/store-container'
import { Options, Variables } from 'core/components/constants/options';

import CustomModal from 'core/components/modal';

/* Reset the story and remove the local storage */
export const resetStory = (
    userInitiated: boolean,
    config: Config,
    persistor: Persistor,
    router: NextRouter
): void => {
    // Drop any chapter-level path info
    const url = '/' + router.basePath + config.identifier

    // Related options of the story
    const tagChecker = (s: string): boolean => {
        return s.split('__')[0] === config.identifier || s.startsWith(config.identifier, 0);
    } 

    const options = Object.keys(Options).filter(o => tagChecker(o));
    const variables = Object.keys(Variables).filter(v => tagChecker(v));

    let keys: string[] = [...options, ...variables, `persist:${config.identifier}`]

    if (userInitiated) {
        persistor.flush().then(() => {
            persistor.pause()
            // Clear the state of the story
            for (var k of keys) {
                if (localStorage.getItem(k)) {
                    localStorage.removeItem(k);
                }
            }
            
            window.location.replace(url)
        })
    } else {
        persistor.flush().then(() => {
            persistor.pause()
            // Clear the state of the story
            for (var k of keys) {
                if (localStorage.getItem(k)) {
                    localStorage.removeItem(k);
                }
            }
            window.location.reload()
        })
    }
}
type ResetType = {
    message?: string
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
}
const ResetButton = ({ children = 'Reset', message, className, style }: ResetType): JSX.Element => {
    const { persistor, config } = React.useContext(StoryContext)
    const router = useRouter();

    let [showConfirmModal, setConfirmModal] = React.useState(false);

    return (
        <>
            <button onClick={() => setConfirmModal(true)} className={className} style={style}>
                {children}
            </button>

            <CustomModal 
                title={'Reset'}
                body={message}
                btnText="Confirm"
                customBtnHandler={() => resetStory(true, config, persistor, router)}
                show={showConfirmModal}
                onHide={() => setConfirmModal(false)}
            />
        </>
    )
}

export default ResetButton

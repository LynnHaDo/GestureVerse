import * as React from 'react'
import { Persistor } from 'redux-persist'
import { NextRouter, useRouter } from 'next/router'

import { Config } from 'core/types'
import { StoryContext } from 'core/containers/store-container'

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

    if (userInitiated) {
        persistor.flush().then(() => {
            persistor.pause()
            localStorage.clear()
            window.location.replace(url)
        })
    } else {
        persistor.flush().then(() => {
            persistor.pause()
            localStorage.clear()
            window.location.reload()
        })
    }
}
type ResetType = {
    message?: string
    children?: React.ReactNode
    style?: React.CSSProperties
}
const ResetButton = ({ children = 'Reset', message, style }: ResetType): JSX.Element => {
    const { persistor, config } = React.useContext(StoryContext)
    const router = useRouter();

    let [showConfirmModal, setConfirmModal] = React.useState(false);
    return (
        <>
            <button onClick={() => setConfirmModal(true)} style={style}>
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

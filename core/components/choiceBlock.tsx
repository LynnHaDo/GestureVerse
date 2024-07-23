import { ChoiceProps } from "./choice";

import { C } from "core/components";
import { Options } from './constants/options';

import style from './ChoiceBlock.module.scss';

export interface ChoiceBlockProps {
    tag: string
}

const ChoiceBlock = ({
    tag
}: ChoiceBlockProps): JSX.Element => {
    const options = Options[tag];

    return (
        options && (
            <>
                <p>
                    <C
                    options={[Object.keys(options)]}
                    tag={tag}
                    />
                </p>

                <div className={style.instruction}>
                    {
                        Object.keys(options).map((key: any) => {
                            return (<p>
                                {options[key]} {" "} for {key}.
                            </p>)
                        })
                    }
                    <p>Note: Keep the posture for at least 5 seconds.</p>
                </div>
            </>
        )
    )
}

export default ChoiceBlock;


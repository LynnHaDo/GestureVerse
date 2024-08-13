export interface TextBlockProps {
    className?: string,
    textWrapperClassName?: string,
    textWrapperWidth?: number,
    children: React.ReactNode,
}

const TextBlock = ({className,
                    textWrapperClassName,
                    textWrapperWidth,
                    children}: TextBlockProps) => {

    return (
        <div className={className}>
            <div className={textWrapperClassName} style={{width: `${textWrapperWidth}px`}}>
                {children}
            </div>            
        </div>
    );
}

export default TextBlock;
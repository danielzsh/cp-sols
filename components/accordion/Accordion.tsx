export const Accordion = ({children, ...props}) => {
    return <div className={`flex flex-col ${props.className}`}>
        {children}
    </div>
}
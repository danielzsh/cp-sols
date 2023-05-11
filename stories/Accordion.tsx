import { AccordionElement } from './AccordionElement';
export const Accordion = ({children, ...props}) => {
    return <div style={{flexDirection: 'column', ...props.style}} >
        {children}
    </div>
}

Accordion.defaultProps = {
    children: <>
        <AccordionElement label='button 1'>
            content 1
        </AccordionElement>
        <AccordionElement label='button 2'>
            content 2
        </AccordionElement>
        <AccordionElement label='button 3'>
            <AccordionElement label='nested'>
                content 4
            </AccordionElement>
        </AccordionElement>
    </>
}
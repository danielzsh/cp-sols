import { ReactNode, isValidElement } from 'react';
import { AccordionElement } from './AccordionElement';
export const Accordion = ({content, ...props}) => {
    const res : ReactNode[] = [];
    for (const key in content) {
        if (!isValidElement(content[key])) {
            res.push(
                <AccordionElement label={key}>
                    <Accordion content={content[key]} />
                </AccordionElement>
            );
        } else res.push(<AccordionElement label={key}>{content[key]}</AccordionElement>)
    }
    return <div style={{flexDirection: 'column', ...props.style}} >
        {res}
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
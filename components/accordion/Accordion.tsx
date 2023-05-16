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
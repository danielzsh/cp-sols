import { AccordionElement } from "../components/accordion";
export default {
    title: 'Accordion Element',
    component: AccordionElement,
    argTypes: {
        children: {
            options: ['h1', 'h2', 'h3', 'p', 'all'],
            mapping: {
                h1: <h1>Heading 1</h1>,
                h2: <h2>Heading 2</h2>,
                h3: <h3>Heading 3</h3>,
                p: <p>Paragraph</p>,
                all: <>
                <h1>Heading 1</h1><br />
                <h2>Heading 2</h2><br />
                <h3>Heading 3</h3><br />
                <p>Paragraph</p><br />
                </>
            }
        }
    }
};
export const Default = {};
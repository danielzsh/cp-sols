import { useState } from 'react';
import styles from './accordion.module.css';
import PropTypes from 'prop-types';

export const AccordionElement = ({ children, label }) => {
    const [open, setOpen] = useState(false);
    return <>
        <button className={styles.accordion} onClick={() => {
            setOpen(!open);
        }}>{label}</button>
        <div style={{display: open ? 'inline' : 'none'}}>
            {children}
        </div>
    </>
}

AccordionElement.propTypes = {
    children: PropTypes.element,
    label: PropTypes.string
}

AccordionElement.defaultProps = {
    children: <p>content</p>,
    label: 'accordion'
}
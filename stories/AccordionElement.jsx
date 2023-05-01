import { useState } from 'react';
import styles from './accordion.module.css';
import PropTypes from 'prop-types';

export const AccordionElement = ({ children, label }) => {
    const [open, setOpen] = useState(false);
    return <div className={styles.accordion}>
        <button className={styles['accordion-button'] + (open ? ` ${styles.open}` : '')} onClick={() => {
            setOpen(!open);
        }}>{label}</button>
        <div style={{display: open ? 'inline-block' : 'none'}} className={styles['accordion-content']}>
            {children}
        </div>
    </div>
}

AccordionElement.propTypes = {
    children: PropTypes.element,
    label: PropTypes.string
}

AccordionElement.defaultProps = {
    children: <p>content</p>,
    label: 'accordion'
}
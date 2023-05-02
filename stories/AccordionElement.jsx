import { useState, useRef, useEffect } from 'react';
import styles from './accordion.module.css';
import PropTypes from 'prop-types';

export const AccordionElement = ({ children, label }) => {
    const [open, setOpen] = useState(false);
    const content = useRef(null);
    useEffect(() => {
        if (open) content.current.style.maxHeight = content.current.scrollHeight + 'px';
        else content.current.style.maxHeight = 0;
    }, [open]);
    return <div className={styles.accordion}>
        <button className={styles['accordion-button'] + (open ? ` ${styles.open}` : '')} style={{display: 'flex', alignItems: 'center'}} onClick={() => {
            setOpen(!open);
        }}>
            {open ? 
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width='30' height='30'>
                    <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"/>
                </svg>
                : 
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  width='30' height='30'>
                    <path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/>
                </svg>
            }
            {label}
        </button>
        <div className={`${styles['accordion-content']} ${open ? styles.visible : styles.hidden}`} ref={content}>
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
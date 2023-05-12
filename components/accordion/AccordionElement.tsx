import { useState, useRef, useEffect, ReactNode } from 'react';
import styles from './accordion.module.css';
import { motion } from 'framer-motion';

export const AccordionElement = ({ children, label } : {children: ReactNode, label: string}) => {
    const [open, setOpen] = useState(true);
    const [height, setHeight] = useState('0px');
    const content = useRef(null);
    useEffect(() => {
        setHeight(content.current.scrollHeight + 'px');
        // console.log(height);
        setOpen(false);
    }, []);
    useEffect(() => {
        if (open) content.current.style.maxHeight = height;
        else content.current.style.maxHeight = 0;
    }, [open]);
    return <div className={styles.accordion}>
        <button className={styles['accordion-button'] + (open ? ` ${styles.open}` : '')} style={{display: 'flex', alignItems: 'center'}} onClick={() => {
            setOpen(!open);
        }}>
            <motion.svg 
                height="32" 
                width="32" 
                viewBox="0 0 20 20"
                animate={open ? "open" : "closed"}
                variants={{
                    open: {rotate: 90},
                    closed: {rotate: 0}
                }}
            >
                <motion.path 
                    d="M5 14 L5 3 L15 10 L5 17" 
                    style={{fill: 'none', stroke: 'grey'}}
                    transition={{duration: 2}}
                />
                <motion.path 
                    d="M5 17 L5 3 L15 10 L5 17"
                    style={{stroke: 'red'}} 
                    variants={{
                        open: {
                            pathLength: 1,
                            fill: "rgba(0, 0, 0, 1)"
                        },
                        closed: {
                            pathLength: 0,
                            fill: "rgba(0, 0, 0, 0)"
                        }
                    }}
                    transition={{duration: 1, pathLength: {duration: 0.5}}}
                />
            </motion.svg>
            {label}
        </button>
        <div 
            className={`${styles['accordion-content']} ${open ? styles.visible : styles.hidden}`} 
            ref={content}
        >
            {children}
        </div>
    </div>
}

AccordionElement.defaultProps = {
    children: <p>content</p>,
    label: 'accordion'
}
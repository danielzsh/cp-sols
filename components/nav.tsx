'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
export const Nav = ({ children, ...props }) => {
    const [open, setOpen] = useState(false);
    return (
        <motion.div 
            className={`flex ${props.className}`}
            animate={open ? "open" : "closed"}
        >
            <motion.div
                className="overflow-hidden"
                variants={{
                    open: {width: '18rem'},
                    closed: {width: 0}
                }}
            >
                {children}
            </motion.div>
            <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6 mt-5 ml-3"
                variants={{
                    open: {rotate: 45},
                    closed: {rotate: 0}
                }}
                onClick={() => {setOpen(!open)}}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </motion.svg>

        </motion.div>
    );
}


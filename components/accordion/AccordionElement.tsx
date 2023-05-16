'use client';
import { useState, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

export const AccordionElement = ({ children, label } : {children: ReactNode, label: string}) => {
    const [open, setOpen] = useState(false);
    const content = useRef(null);
    return (
        <motion.div 
            animate={open ? "open" : "closed"}
            initial={"closed"}
        >
            <button 
                className="w-full text-gray-600 p-4 text-left text-xl border-none rounded-lg transition duration-500 bg-transparent hover:bg-slate-50"
                style={{display: 'flex', alignItems: 'center'}} 
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <motion.svg 
                    height="32" 
                    width="32" 
                    viewBox="0 0 20 20"
                    variants={{
                        open: {rotate: 90},
                        closed: {rotate: 0}
                    }}
                >
                    <motion.path 
                        d="M5 17 L5 3 L15 10 L5 17" 
                        transition={{duration: 0.5}}
                        variants={{
                            open: {
                                stroke: "black",
                                fill: "rgba(0, 0, 0, 1)"
                            },
                            closed: {
                                stroke: "grey",
                                fill: "rgba(0, 0, 0, 0)"
                            }
                        }}
                    />
                </motion.svg>
                {label}
            </button>
            <motion.div 
                className="ml-4 overflow-hidden"
                ref={content}
                variants={{
                    open: {
                        height: "auto"
                    },
                    closed: {
                        height: 0
                    }
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}
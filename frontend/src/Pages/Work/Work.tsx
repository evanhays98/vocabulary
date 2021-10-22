import React, {useState} from "react";
import {motion} from 'framer-motion';

const Work = () => {
    return (
        <motion.div className="work"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <div className='pres-logo'>
                <h1 className='text-gradiant'>Vocabulary</h1>
                <div className="containerDesc">
                    <p>Ut velit id exercitation non nulla cupidatat. Aliqua adipisicing Lorem exercitation pariatur
                        magna
                        sint. Excepteur sint nisi pariatur veniam esse esse tempor nostrud incididunt velit ipsum do
                        enim.</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Work;
import React, {useState} from "react";
import {motion} from 'framer-motion';
import ContentSentence from "../../Components/ContentSentence/ContentSentence";

const Work = () => {
    return (
        <motion.div className="work"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <div className='content'>
                <ContentSentence {...{
                    content: 'je {mange} des fraises.',
                    indication1: 'eat',
                    indication2: 'verbe au présent'
                }}/>
            </div>
        </motion.div>
    );
};

export default Work;
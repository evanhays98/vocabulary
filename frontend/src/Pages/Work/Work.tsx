import React, {useState} from "react";
import {motion} from 'framer-motion';
import ContentSentence from "../../Components/ContentSentence/ContentSentence";
import FormAddChapter from "../../Components/Form/FormAddChapter/FormAddChapter";
import Alert from "../../Components/Alert/Alert";


const AddAlert = () => {
    return <Alert {...{content : 'ceci est une alerte mais je sais pas quoi ecrire'}} />;
};

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
            <div className='content'>
                <FormAddChapter />
            </div>

            <div className='content'>
                <button onClick={() => {<Alert {...{content : 'ceci est une alerte mais je sais pas quoi ecrire'}} />}}>Check Alert</button>
            </div>
        </motion.div>
    );
};

export default Work;
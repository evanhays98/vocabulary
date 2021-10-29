import React, {useContext, useState} from "react";
import {motion} from 'framer-motion';
import ContentSentence from "../../Components/ContentSentence/ContentSentence";
import FormAddChapter from "../../Components/Form/FormAddChapter/FormAddChapter";
import {useAlert} from "../../Components/Alert/AlertProvider";
import {v4} from "uuid";
import FormAddSentence from "../../Components/Form/FormAddSentence/FormAddSentence";
import FormSignin from "../../Components/Form/FormSignin/FormSignin";
import FormSignup from "../../Components/Form/FormSignup/FormSignup";

const Work = () => {

    const dispatch = useAlert();

    const AddAlertError = () => {
        // @ts-ignore
        dispatch({
            type: "ERROR",
            message: "new success notification",
            time: 6
        })
    }
    const AddAlertSuccess = () => {
        // @ts-ignore
        dispatch({
            type: "SUCCESS",
            message: "new error notification",
            time: 6
        })
    }


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
                <FormAddChapter/>
            </div>
            <div className="content">
                <button onClick={AddAlertSuccess}>Add Success Alert</button>
                <button onClick={AddAlertError}>Add Error Alert</button>
            </div>
            <div className='content'>
                <FormAddSentence/>
            </div>
            <div className='content'>
                <FormSignin/>
            </div>
            <div className='content'>
                <FormSignup/>
            </div>

        </motion.div>
    );
};

export default Work;
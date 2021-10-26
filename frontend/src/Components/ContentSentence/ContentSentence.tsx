import React, {useState} from "react";


interface ContentSentenceProps {
    content: string,
    indication1: string,
    indication2: string,

};

const ContentSentence = (props: ContentSentenceProps) => {

    const [answer, setAnswer] = useState('')

    function firstContent() {
        let previous = '';
        let res = '';
        for (var i = 0; i < props.content.length; i++) {
            let char = props.content.charAt(i);
            if (char == '{' && previous != '\\') {
                return res
            }
            res += char;
            previous = char;
        }
        return res;
    }

    function hideContent() {
        let res = '';
        let isHide = false;
        for (var i = 0; i < props.content.length; i++) {
            let char = props.content.charAt(i);
            if (char == '{') {
                isHide = true;
                continue;
            }
            if (char == '}') {
                return res;
            }
            if (isHide) {
                res += char;
            }
        }
        return res;
    }

    function lastContent() {
        let res = '';
        let isCont = false;
        for (var i = 0; i < props.content.length; i++) {
            let char = props.content.charAt(i);
            if (char == '}') {
                isCont = true;
                continue;
            }
            if (isCont) {
                res += char;
            }
        }
        return res;
    }

    return (
        <div className="ContentSentence">
            <div className='content1'>
                <p className='text'>{firstContent()}</p>
                <div className='request'>
                    {hideContent()}
                    <input className='input' type="text"/>
                </div>
                <p className='text'>{lastContent()}</p>
            </div>
            <div className='content2'>
                <p className='traduction'>{props.indication1}</p>
                <p className='indication'>{props.indication2}</p>
                <button type='submit' className='button2'>Verify</button>
            </div>
        </div>
    );
};

export default ContentSentence;
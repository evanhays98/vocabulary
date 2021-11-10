import React, {useState} from "react";
import {useChapter} from "../../Context/ChapterContext";
import axios from "axios";
import {useAuth} from "../../Context/AuthContext/AuthContext";
import {useSentence} from "../../Context/SentenceContext";

interface ContentChapterCompoProps {
    chapter: any
}


const ChapterCompo = (props: ContentChapterCompoProps) => {

    const [sentences, setSentences] = useState<any>(null)
    const {currentUser} = useAuth();

    const chapter = props.chapter;
    const {updateChapter} = useChapter()
    const {updateListSentence} = useSentence()

    const Update = () => {
        updateChapter(chapter)
        updateListSentence(sentences);
    }

    const getSentences = async (chapterID: number) => {
        return axios
            .get("http://localhost:3003/chapter/sentences", {
                params: {
                    chapterID,
                },
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + currentUser?.token,
                },
            })
            .then((res) => {
                if (res.status !== 200) {
                    return {failed: true, message: res.data.message};
                }
                setSentences(res.data)
                console.log(res.data)
                return {failed: false, message: "SUCCESS"};
            })
    }

    React.useEffect(() => {
        getSentences(chapter.id);
    }, [])


    return (
        <div className="ChapterCompo">
            <h1>{chapter?.title}</h1>
            <p>{chapter?.description}</p>
            {/*<button onClick={() => {Update()}}>{chapter?.title} - {chapter?.id}</button>
            <ul>
            {sentences?.map((sentence : any ) => (
                <li>{sentence?.content}</li>
            ))}
            </ul>
            <h1>-----------------------------------</h1>*/}

        </div>
    );
};

export default ChapterCompo;
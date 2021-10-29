import React, {useState} from "react";


const FormAddSentence = () => {

    const [content, setContent] = useState("")
    const [traduction, setTraduction] = useState("")
    const [indication, setIndication] = useState("")

    function checkContent()
    {
        let lastBrass = false;
        let firstBrass = false;
        let count = 0;
        let previous = '';
        for (var i = 0; i < content.length; i++) {
            let char = content.charAt(i);
            if (char === '{' && previous !== '\\') {
                count += 1;
                firstBrass = true;
            }
            if (char === '{' && previous !== '\\') {
                count += 1;
                firstBrass = true;
            }
            previous = char;
        }
        return firstBrass && lastBrass && count === 2;
    }

    return (
        <div className="FormAddSentence">
            <h1>Signup</h1>
            <div className="content">
                <form action="" method="get" className="form-example">
                    <div className="">
                        <ul>
                            <li>exemple : je {"{"}mange{"}"} des fraises</li>
                            <li>mettre entre {"{}"} les mots à deviner</li>
                            <li>si votre texte contient {"{"} ou {"}"} ajouter \ devant {"-> \\{"} </li>
                        </ul>
                        <br/>
                        <label htmlFor="Title">Enter the sentence: </label>
                        <input type="text" name="title" id="title" required
                               onChange={(e) => setContent(e.target.value)}/>
                    </div>
                    <div className="">
                        <label htmlFor="Description">Enter a Traduction: </label>
                        <input type="text" name="description" id="description" required
                               onChange={(e) => setTraduction(e.target.value)}/>
                    </div>
                    <div className="">
                        <label htmlFor="Description">Enter an Indication: </label>
                        <input type="text" name="description" id="description" required
                               onChange={(e) => setIndication(e.target.value)}/>
                    </div>
                    <br/>
                    <div className="">
                        <input type="submit" value="Add"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormAddSentence;
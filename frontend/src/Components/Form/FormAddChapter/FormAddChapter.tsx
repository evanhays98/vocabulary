import React, {useState} from "react";


const FormAddChapter = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="FormAddChapter">
            <h1>Add a Chapter</h1>
            <div className="content">
                <form action="" method="get" className="form-example">
                    <div className="">
                        <label htmlFor="Title">Enter a Title: </label>
                        <input type="text" name="title" id="title" required
                               onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="">
                        <label htmlFor="Description">Enter a Description: </label>
                        <input type="text" name="description" id="description" required
                               onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="">
                        <input type="submit" value="Add"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormAddChapter;
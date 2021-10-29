import React, {useState} from "react";


const FormSignin = () => {

    const [pseudo, setPseudo] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="FormSignin">
            <h1>Sigin</h1>
            <div className="content">
                <form action="" method="get" className="form-example">
                    <div className="">
                        <label htmlFor="Title">Pseudo or mail: </label>
                        <input type="text" name="pseudo" id="pseudo" required
                               onChange={(e) => setPseudo(e.target.value)}/>
                    </div>
                    <div className="">
                        <label htmlFor="Description">Password: </label>
                        <input type="password" name="password" id="password" required
                               onChange={(e) => setPassword(e.target.value)}/>
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

export default FormSignin;
import React, {useState} from "react";
import {TiDelete} from "react-icons/all";

interface AlertProps {
    content : string,
}

const Alert = (props : AlertProps) => {

    function RemoveAlert(event : any) {
        event.preventDefault();
        event.currentTarget.parentNode.style.display = 'none';
        //event.target.parent.style.display = 'none';
    }
    return (
        <div className="Alert">
            <TiDelete className="icon" onClick={(e) => RemoveAlert(e)} />
            <p className='desc'>{props.content}</p>
        </div>
    );
};

export default Alert;
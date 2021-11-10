import React, {useReducer, useState} from "react";
import {TiDeleteOutline} from "react-icons/all";


const Alert = (props: any) => {
    const [exit, setExit] = useState(false);
    const [width, serWidth] = useState(0);
    const [intervaleID, setIntervalID] = useState(null);

    const handleStartTimer = () => {
        const id = setInterval(() => {
            serWidth((prev) => {
                if (prev < 100) {
                    return prev + 2 / props.time
                }
                clearInterval(id)
                return prev
            })
        }, 20);

        // @ts-ignore
        setIntervalID(id)
    };

    const handlePauseTimer = () => {
        // @ts-ignore
        clearInterval(intervaleID);
    }

    React.useEffect(() => {
        handleStartTimer()
    }, [])

    const handleCloseNotification = () => {
        handlePauseTimer()
        setExit(true)
        setTimeout( () => {
            props.dispatch({
                type: "REMOVE_NOTIFICATION",
                id: props.id
            })
        }, 400)
    }

    React.useEffect(() => {
        if (width >= 100)
        {
            handleCloseNotification()
        }
    }, [width])


    return (
        <div onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} className={`Alert
             ${exit ? "exit" : ""} ${props.type}`}>
            <div className="icon-wrapper">
                <TiDeleteOutline className="icon" onClick={handleCloseNotification}/>
            </div>
            <p className='desc'>{props.message}</p>
            <div className={`bar ${props.type}`} style={{width: `${width}%`}}/>
        </div>
    );
};

export default Alert;
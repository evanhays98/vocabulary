import React, {createContext, useContext, useReducer} from "react";
import {v4} from 'uuid';
import Alert from "./Alert";

// @ts-ignore
const AlertContext = createContext();

const AlertProvider = (props: any) => {
    const [state, dispatch] = useReducer((state: any[],
                                          action: { type: any; payload: any; id: any; }) => {
        switch (action.type) {
            default:
                return state;
            case "ADD_NOTIFICATION":
                return [...state, {...action.payload}];
            case "REMOVE_NOTIFICATION":
                return state.filter((el: any) => el.id !== action.id);
        }
    }, []);

    return (
        <AlertContext.Provider value={dispatch}>
            <div className="alert-provider">
                    {state.map((al: { id: any; }) => {
                        return <Alert dispatch={dispatch} key={al.id} {...al}/>
                    })}
            </div>
            {props.children}
        </AlertContext.Provider>
    )
};

export const useAlert = () => {
    const dispatch = useContext(AlertContext);

    return (props : any) => {
        // @ts-ignore
        dispatch({
            type: "ADD_NOTIFICATION",
            payload: {
                id: v4(),
                ...props
            }
        })
    }

}

export default AlertProvider;
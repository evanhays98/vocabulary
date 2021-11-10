import React, {createContext, useContext, useReducer} from "react";
import Alert from "./Alert/Alert";
import {v4} from "uuid";
import FormModifyChapter from "../Components/Form/FormModifyChapter/FormModifyChapter";

// @ts-ignore
const ModifyChapterContext = createContext();

const ModifyChapterProvider = (props: any) => {
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
        <ModifyChapterContext.Provider value={dispatch}>
            <div className="modify-provider">
                {state.map((al: { id: any; name: string }) => {
                    if (al.name == 'modifyChapter') {
                        return <FormModifyChapter dispatch={dispatch} key={al.id} {...al}/>
                    }
                    else
                        return <Alert dispatch={dispatch} key={al.id} {...al}/>
                })}
            </div>
            {props.children}
        </ModifyChapterContext.Provider>
    )
};

export const useModifyChapter = () => {
    const dispatch = useContext(ModifyChapterContext);

    return (props: any) => {
        // @ts-ignore
        dispatch({
            type: "ADD_NOTIFICATION",
            payload: {
                id: v4(),
                name: props.name,
                ...props
            }
        })
    }

}

export default ModifyChapterProvider;
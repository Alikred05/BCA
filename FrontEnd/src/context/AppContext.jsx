import { createContext } from "react";
import { members } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props)=>{

    const value = {
        members
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;
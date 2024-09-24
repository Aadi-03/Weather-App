import { useState,createContext } from "react";
export const dataContext=createContext(null);

export const DataProvider=(props)=>{
        const [data , setData] = useState();
        return <dataContext.Provider value={{data, setData}}>
                {props.children}
        </dataContext.Provider>
}
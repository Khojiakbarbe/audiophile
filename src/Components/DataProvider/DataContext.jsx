import { createContext, useState } from "react";


export const categoryContext = createContext();

export function CategoryProvider(props) {

    const [data, setData] = useState('')

    return (
        <categoryContext.Provider value={[data, setData]}>
            {props.children}
        </categoryContext.Provider>
    )

}
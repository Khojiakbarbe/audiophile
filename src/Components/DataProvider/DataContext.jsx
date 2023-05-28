import { createContext, useState } from "react";


export const categoryContext = createContext();

export function CategoryProvider(props) {

    const [data, setData] = useState('')

    return (
        <categoryContext.Provider value={[data, setData]}>
            {props.children}
        </categoryContext.Provider>
    )

};

export const productsContext = createContext();

export function ProductsProvider(props){
    const[product , setProduct] = useState([]);

    return(
        <productsContext.Provider value={[product,setProduct]}>
            {props.children}
        </productsContext.Provider>
    )

}


import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { categoryContext } from "./DataProvider/DataContext";




export default function Categorys() {

    const [category, setCategory] = useContext(categoryContext)

    const [info, setInfo] = useState([])

    useState(() => {
        axios.get('http://localhost:9000/audiophile')
            .then(res => {
                setInfo(res.data)
            })
            .catch(err => console.warn(err))
    }, [])

    const filter = [];

    if (info.length) {
        let filtering = info.filter(categorys => categorys.category == category)
        filter.push(filtering)
    }

    console.log(filter);

    return (
        <>
            <h1>Categorys : {category}</h1>

            <hr />

            {filter[0] && filter[0].map(post => {
                return (
                    <div key={post.id}>
                        <img src={post.image.desktop} className='img-fluid w-50' alt="" />
                    </div>
                )
            })}

        </>
    )
}
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { categoryContext } from "./DataProvider/DataContext";
import { useNavigate } from 'react-router-dom'



export default function Categorys() {

    const navigate = useNavigate();

    const [category, setCategory] = useContext(categoryContext)

    const [info, setInfo] = useState([])

    useEffect(() => {
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


    return (
        <>
            <div className="category">
                <h1>{category}</h1>
            </div>

            {filter[0] && filter[0].map((post, index) => {
                return (
                    <div className="container" key={post.id}>
                        {
                            index % 2 == 0 ?

                                <div >
                                    <div className="row w-100 ">
                                        <div className="col-md-6 pt-5">
                                            <h1>{post.name}</h1>
                                            <p>{post.description}</p>
                                            <button className="seeProduct" onClick={() => navigate(`/category/${post.id}`)}>SEE PRODUCT</button>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={post.image.desktop} className='img-fluid w-50 ' alt="" />
                                        </div>
                                    </div>
                                </div>
                                :
                                <div >
                                    <div className="row w-100 ">
                                        <div className="col-md-6">
                                            <img src={post.image.desktop} className='img-fluid w-50' alt="" />
                                        </div>
                                        <div className="col-md-6 pt-5">
                                            <h1>{post.name}</h1>
                                            <p>{post.description}</p>
                                            <button className="seeProduct" onClick={() => navigate(`/category/${post.id}`)}>SEE PRODUCT</button>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                )
            })}

        </>
    )
}
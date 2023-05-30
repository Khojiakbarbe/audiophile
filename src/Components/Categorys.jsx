import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { categoryContext } from "./DataProvider/DataContext";


import boy from '../images/home/boy.png'


export default function Categorys() {

    const navigate = useNavigate();

    const [category, setCategory] = useContext(categoryContext)

    const [info, setInfo] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9000/audiophile')
            .then(res => {
                setInfo(res.data);
            })
            .catch(err => console.warn(err))


    }, [])

    const filter = [];

    if (info.length) {
        let filtering = info.filter(categorys => categorys.category == category)
        filter.push(filtering)
    }



    //// not working
    // const allCategorys = [];

    // for (let i = 0; i < info.length; i++) {
    //     if (allCategorys.length == 0) {
    //         allCategorys.push(info[i])
    //     } else {
    //         console.log(allCategorys[0].category);
    //         for (let e = 0; e < allCategorys.length; e++) {
    //             if (allCategorys[e].category !== info[i].category) {
    //                 allCategorys.push(info[i].category)
    //                 e++;
    //                 console.log(allCategorys[e]);
    //             }
    //         }
    //     }

    // }
    // console.log(allCategorys);


    return (
        <>
            <div className="category">
                <h1>{category}</h1>
            </div>
            <div className="container">

                {filter[0] && filter[0].map((post, index) => {
                    return (
                        <div className="container" key={post.id}>
                            {
                                index % 2 != 0 ?

                                    <div className="row categoryRow mb-5">
                                        <div className="col-md-6 pt-5">
                                            <h1>{post.name}</h1>
                                            <p>{post.description}</p>
                                            <button className="seeAndAddToCard" onClick={() => navigate(`/category/${post.id}`)}>SEE PRODUCT</button>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={post.image.desktop} alt="" />
                                        </div>
                                    </div>
                                    :
                                    <div className="row categoryRow mb-5">
                                        <div className="col-md-6">
                                            <img src={post.image.desktop} alt="" />
                                        </div>
                                        <div className="col-md-6 pt-5">
                                            <h1>{post.name}</h1>
                                            <p>{post.description}</p>
                                            <button className="seeAndAddToCard" onClick={() => navigate(`/category/${post.id}`)}>SEE PRODUCT</button>
                                        </div>
                                    </div>
                            }
                        </div>
                    )
                })}

                <div className="menu">
                    <div className="row w-100">
                        {
                            info && info.slice(2, 5).map(post => {
                                return (
                                    <div className="col-md-4" key={post.id}>
                                        <div className="card">
                                            <img src={post.image.desktop} style={{ width: '60%', margin: '0 auto' }} alt="" />
                                            <p>{post.category}</p>
                                            <span style={{cursor:'pointer'}} onClick={() => {
                                                setCategory(post.category)
                                                navigate('/category')
                                            }}>shop </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                <div className="rec">
                    <div className="bringing">
                        <div className="row w-100">
                            <div className="col-md-6">
                                <h1>Bringing you the <br /> <span style={{ color: '#D87D4A' }}>best</span> audio gear</h1>
                                <p>Located at the heart of New York City, Audiophile is the premier <br /> store for high end headphones, earphones, speakers, and audio <br /> accessories. We have a large showroom and luxury <br /> demonstration rooms available for you to browse and <br /> experience a wide range of our products. Stop by our store to <br /> meet some of the fantastic people who make Audiophile the <br /> best place to buy your portable audio equipment.</p>
                            </div>
                            <div className="col-md-6">
                                <img src={boy} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
import { useState, useEffect } from "react";

import axios from "axios";

import { useParams } from 'react-router-dom'


export default function Details() {

    const { id } = useParams()

    const [detail, setDetail] = useState({})

    useEffect(() => {
        axios.get('http://localhost:9000/audiophile/' + id)
            .then(res => {
                setDetail(res.data)
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container mt-5 pt-5">
            <div className="row w-100">
                <div className="col-md-6">
                        
                </div>
                <div className="col-md-6">
                    <h1>{detail.name}</h1>
                    <p>{detail.description}</p>
                    <h3><strong>${detail.price / 1000}</strong></h3>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-7 mt-5">
                    <h1>FEATURES</h1>
                    <p className="mt-3">{detail.features}</p>
                </div>
                <div className="col-md-5 mt-5">
                    <h1>THE INBOX</h1>
                    {detail.includes &&  detail.includes.map((post, index) => {
                        return (
                            <div key={index}><strong style={{ color: '#D87D4A' }}>{post.quantity}x</strong>  <span style={{ marginLeft: '2%' }}>{post.item}</span></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
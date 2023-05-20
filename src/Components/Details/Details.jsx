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

    const img = detail.image
    return (
        <div className="container">
            <div className="row w-100">
                <div className="col-md-6">
                    <img src={img} alt="" />
                </div>
                <div className="col-md-6">
                    <h1>{detail.category}</h1>
                </div>
            </div>
        </div>
    )
}
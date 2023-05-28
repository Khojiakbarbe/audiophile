import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'

import { productsContext } from "../DataProvider/DataContext";

import boy from '../../images/home/boy.png'



export default function Details() {

    const { id } = useParams()

    const [detail, setDetail] = useState({})

    useEffect(() => {
        axios.get('http://localhost:9000/audiophile/' + id)
            .then(res => {
                setDetail(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    const [products, setProducts] = useContext(productsContext);

    // const [mycount,setCounts] = useState(0)
    const [count, setCount] = useState(0);

    // let a = 0;
    // if (filter.length == 1) {
    //     a = filter[0].count
    // };


    function addCard() {
        const filter = products.filter(product => product.id == id);
        if (filter.length == 1) {
            for (let i = 0; i < products.length; i++) {
                if (products[i].id == id) {
                    products[i].count = count
                }
            }
        } else {
            products.push({ id: id, count: count })
        }
    }


    return (
        <div className="container mt-5 pt-5">
            <div className="row w-100">
                <div className="col-md-6">
                    <img src={detail.image} alt="" />
                </div>
                <div className="col-md-6">
                    {
                        detail.new ?
                            <h6 style={{ color: '#D87D4A' }}>N E W  P R O D U C T</h6>
                            :
                            null
                    }
                    <h1>{detail.name}</h1>
                    <p>{detail.description}</p>
                    <h3><strong>${detail.price}</strong></h3>
                    <div className="mt-5 row">
                        <div className="col-md-3 ">
                            <p style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#F1F1F1' }}><span className="btn" onClick={() => { count != 0 ? setCount(count - 1) : setCount(0) }}>-</span><span>{count}</span><span className="btn" onClick={() => setCount(count + 1)}>+</span></p>
                        </div>
                        <div className="col-md-8">
                            <button onClick={() => addCard()} className="btn btn-warning">ADD TO CARD</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-7 mt-5">
                    <h1>FEATURES</h1>
                    <p className="mt-3">{detail.features}</p>
                </div>
                <div className="col-md-5 mt-5">
                    <h1>THE INBOX</h1>
                    {detail.includes && detail.includes.map((post, index) => {
                        return (
                            <div key={index}><strong style={{ color: '#D87D4A' }}>{post.quantity}x</strong>  <span style={{ marginLeft: '2%' }}>{post.item}</span></div>
                        )
                    })}
                </div>
            </div>
            {
                detail.others && detail.others.map((post, ind) => {
                    return (
                        <img key={ind} src={post.image.mobile} alt="" />
                    )
                })
            }

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
    )
}
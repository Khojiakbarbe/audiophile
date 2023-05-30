import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { categoryContext } from "./DataProvider/DataContext"
import { useNavigate } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'

import carousel from '../images/home/Bitmap.png'
import speaker1 from '../images/home/speakerZX9.png'
import earphone from '../images/home/earphone.png'
import boy from '../images/home/boy.png'

export default function Home() {

    const [data, setData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:9000/audiophile')
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const [categoryCon, setCategoryCon] = useContext(categoryContext);

    return (
        <>
            <div className="myCarousel">
                <div className="row">
                    <div className="col-md-6">
                        <h5>NEW PRODUCT</h5>
                        <h1>XX99 Mark II <br /> Headphones</h1>
                        <p>Experience natural, lifelike audio and exceptional <br /> build quality made for the passionate music <br /> enthusiast.</p>
                        <button className="seeAndAddToCard" onClick={() => {
                            setCategoryCon('headphones');
                            navigate('/category')
                        }}>See Product </button>
                    </div>
                    <div className="col-md-6">
                        <img src={carousel} alt="" />
                    </div>
                </div>
            </div>

            <div className="menu">
                <div className="row">
                    {
                        data && data.slice(2, 5).map(post => {
                            return (
                                <div className="col-md-4" key={post.id}>
                                    <div className="card">
                                        <img src={post.image.desktop} className='img-fluid' alt="" />
                                        <p>{post.category}</p>
                                        <h6 onClick={() => {
                                            setCategoryCon(post.category);
                                            navigate('/category')
                                        }}>SHOP <BiChevronRight style={{ color: '#D87D4A' }} /></h6>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="container rec">
                <div className="row mt-5 mb-5 zx9">
                    <div className="col-md-6">
                        <img src={speaker1} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1>ZX9 <br /> SPEAKER</h1>
                        <p>Upgrade to premium speakers that are <br /> phenomenally built to deliver truly remarkable <br /> sound.</p>
                        <button className="seeProduct" onClick={() => {
                            setCategoryCon('headphones');
                            navigate('/category')
                        }}>SEE PRODUCT</button>
                    </div>
                </div>
                <div className="row mt-5 mb-5 zx7">

                    <div className="col-md-12">
                        <div className="zx7Text">
                            <h1>ZX9 <br /> SPEAKER</h1>
                            <button className="seeProduct" onClick={() => {
                                setCategoryCon('headphones');
                                navigate('/category')
                            }}>SEE PRODUCT</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 mb-5 earphone">
                    <div className="col-md-6">
                        <img src={earphone} className='img-fluid card' alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1>YX1 EARPHONES</h1>
                        <button className="seeProduct" onClick={() => {
                            setCategoryCon('earphones');
                            navigate('/category')
                        }}>SEE PRODUCT</button>
                    </div>
                </div>
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

        </>
    )
}
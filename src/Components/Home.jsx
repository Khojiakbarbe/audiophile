import { useEffect, useState } from "react"
import axios from "axios"

import carousel from '../images/home/Bitmap.png'
import bg from '../images/home/bg.png'
import speaker1 from '../images/home/speakerZX9.png'
import speaker2 from '../images/home/speakerZX7.png'
import earphone from '../images/home/earphone.png'


export default function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9000/audiophile')
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    console.log(data);

    return (
        <>
            <div className="myCarousel">
                <div className="row">
                    <div className="col-md-6">
                        <h5>NEW PRODUCT</h5>
                        <h1>XX99 Mark II <br /> Headphones</h1>
                        <p>Experience natural, lifelike audio and exceptional <br /> build quality made for the passionate music <br /> enthusiast.</p>
                        <button>See Product </button>
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
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src={post.image.desktop} className='img-fluid' alt="" />
                                        <p>{post.category}</p>
                                        <span>shop </span>
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
                        <button className="seeProduct">SEE PRODUCT</button>
                    </div>
                </div>
                <div className="row mt-5 mb-5 zx7">

                    <div className="col-md-12">
                        <div className="zx7Text">
                            <h1>ZX9 <br /> SPEAKER</h1>
                            <button className="seeProduct">SEE PRODUCT</button>
                        </div>
                        {/* <img src={speaker2} className='w-100' alt="" /> */}
                    </div>
                </div>
                <div className="row mt-5 mb-5 earphone">
                    <div className="col-md-6">
                        <img src={earphone} className='img-fluid card' alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1>YX1 EARPHONES</h1>
                        <button className="seeProduct">SEE PRODUCT</button>
                    </div>
                </div>
            </div>

        </>
    )
}
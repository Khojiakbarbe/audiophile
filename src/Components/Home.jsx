import { useEffect, useState } from "react"
import axios from "axios"

import carousel from '../images/home/Bitmap.png'


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
                        <img src={carousel}  alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
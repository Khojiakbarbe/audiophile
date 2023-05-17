import { useEffect, useState } from "react"
import axios from "axios"



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
            <h1 className="btn btn-danger">Hii</h1>
        </>
    )
}
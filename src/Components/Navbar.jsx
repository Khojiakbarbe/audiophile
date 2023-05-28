import { Link } from 'react-router-dom'
import chest from '../images/navbar/chest.png'

import { useContext, useState, useEffect } from 'react';
import { categoryContext, productsContext } from './DataProvider/DataContext';
import axios from 'axios'

export default function Navbar() {

    const [name, setName] = useContext(categoryContext)

    const [productsCon, setProductsCon] = useContext(productsContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/audiophile')
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const filtered = [];
    if (productsCon.length > 0) {
        for (let i = 0; i < productsCon.length; i++) {
            const filter = data.filter(find => find.id == productsCon[i].id)
            if (filter) {
                filtered.push({ data: filter, count: productsCon[i].count })
            }
        }
    }

    const [allPrice, setAllPrice] = useState(0);
    function prices() {
        if (filtered.length > 0) {
            for (let i = 0; i < filtered.length; i++) {
                // setAllPrice(filtered[i].data)
                // console.log(filtered[i].data[0].price);
            }
        }
    }

    console.log(allPrice);

    return (
        <nav className="navbar navbar-expand-md bg-dark">
            <div className="container-fluid">
                <h3 className="navbar-brand"><Link to='/'> <strong>audiophile</strong></Link></h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav col-12 col-lg-auto me-lg-auto  mb-2 justify-content-center mb-md-0" style={{ width: '60%' }}>
                        <li><Link to='/' className="nav-link px-2  navbarLinks" >HOME</Link></li>
                        <li><Link to='/category' className="nav-link px-2  navbarLinks" onClick={() => {
                            setName('headphones')
                        }}>HEADPHONES</Link></li>
                        <li><Link to='/category' className="nav-link px-2  navbarLinks" onClick={() => {
                            setName('speakers')
                        }} >SPEAKERS</Link></li>
                        <li><Link to='/category' className="nav-link px-2  navbarLinks" onClick={() => {
                            setName('earphones')
                        }} >EARPHONES</Link></li>
                    </ul>
                    <div className="dropdown">
                        <img src={chest} alt="" />
                        <div className="dropdown-content" onClick={() => prices()} >
                            {
                                filtered.length > 0 ?
                                    <>
                                        <h5 >CART ({filtered.length})    <span onClick={() => setProductsCon([])}>Remove All</span></h5>
                                        {filtered.map(post => {
                                            return (
                                                <div className='card p-1 row'>
                                                    <div className="col-6">
                                                        <img src={post.data[0].image.mobile} width='50' alt="" />
                                                        <h5>{post.data[0].name}</h5>
                                                        <h5>${post.data[0].price}</h5>
                                                    </div>
                                                    <div className="col-6">
                                                        <h6>{post.count}</h6>
                                                        {
                                                            // console.log(post.data[0].price * post.count)
                                                            // setAllPrice(allPrice = allPrice + (post.data[0].price * post.count))
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>
                                    :
                                    <h1>Hechnarsa tanlanmagan...</h1>
                            }
                        </div>
                    </div>
                </div>
            </div >
        </nav >
    )
}
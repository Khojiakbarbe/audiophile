import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';
import { categoryContext, productsContext } from './DataProvider/DataContext';
import axios from 'axios'

import chest from '../images/navbar/chest.png'


export default function Navbar() {

    const navigate = useNavigate();

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
            let prices = 0;
            for (let i = 0; i < filtered.length; i++) {
                prices += filtered[i].data[0].price * filtered[i].count;
            }
            setAllPrice(prices)
        }
    }

    function removeAll() {
        setProductsCon([])
        setAllPrice(0)
    }


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
                        <img src={chest} onClick={() => prices()} alt="" />
                        <div className="dropdown-content"  >
                            {
                                filtered.length > 0 ?
                                    <>
                                        <h5 >CART ({filtered.length})    <span className='remove' onClick={() => removeAll()}>Remove All</span></h5>
                                        {filtered.map((post, ind) => {
                                            return (
                                                <div key={ind} className='row p-1 '>
                                                    <div className="col">
                                                        <img src={post.data[0].image.mobile} width='50' alt="" />
                                                        <div>
                                                            <p>{post.data[0].name}</p>
                                                            <p style={{ color: 'gray' }}>${post.data[0].price}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col navbarCount">
                                                        <p><span onClick={() => { filtered[ind].count > 0 ? filtered[ind].count-- : filtered[ind].count = 0 }}>-</span>{post.count} <span onClick={() => filtered[ind].count++}>+</span></p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <div className="total">
                                            <h6>${allPrice}</h6>
                                            <button onClick={() => navigate('/checkout', {state: filtered })}>CHECK OUT</button>
                                        </div>
                                    </>
                                    :
                                    <h5>Hechnarsa tanlanmagan...</h5>
                            }
                        </div>
                    </div>
                </div>
            </div >
        </nav >
    )
}
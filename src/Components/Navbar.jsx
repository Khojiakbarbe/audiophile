import { Link } from 'react-router-dom'
import chest from '../images/navbar/chest.png'

import { useContext } from 'react';
import { categoryContext } from './DataProvider/DataContext';
import { useState } from 'react';


export default function Navbar() {

    const [name, setName] = useContext(categoryContext)


    const [chestList, setChestList] = useState(false);



    const body = document.body;

    if (chestList) {
        body.onclick = function () {
            setChestList(false)
        }
    }

    return (
        <header className="p-3 " style={{ backgroundColor: '#0E0E0E' }}>
            <div className="container border-bottom">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">


                    <h3><Link to='/'   > <strong>audiophile</strong></Link></h3>
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


                    <div className="text-end">
                        <button onClick={() => setChestList(true)} style={{ backgroundColor: 'unset', border: 'none' }}><img src={chest} className='img-fluid chest' alt="" /></button>
                    </div>
                    {
                        chestList ?
                            <div onMouseLeave={() => setChestList(false)} className='chestList bg-white'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ad natus exercitationem necessitatibus sint nobis molestiae beatae ducimus nemo nihil, minus veniam harum sed repellat!
                            </div>
                            :
                            null
                    }
                </div>

            </div>
        </header>
    )
}
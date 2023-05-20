import { Link } from 'react-router-dom'
import chest from '../images/navbar/chest.png'

import { useContext } from 'react'
import { categoryContext } from './DataProvider/DataContext'


export default function Navbar() {

    const [name, setName] = useContext(categoryContext)

    return (
        <header className="p-3 " style={{ backgroundColor: '#0E0E0E' }}>
            <div className="container border-bottom">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">


                    <h3><Link to='/' className="text-white"  > <strong>audiophile</strong></Link></h3>
                    <ul className="nav col-12 col-lg-auto me-lg-auto  mb-2 justify-content-center mb-md-0" style={{ width: '60%' }}>
                        <li><Link to='/' className="nav-link px-2 text-white" >HOME</Link></li>
                        <li><Link to='/category' className="nav-link px-2 text-white" onClick={() => {
                            setName('headphones')
                        }}>HEADPHONES</Link></li>
                        <li><Link to='/category' className="nav-link px-2 text-white" onClick={() => {
                            setName('speakers')
                        }} >SPEAKERS</Link></li>
                        <li><Link to='/category' className="nav-link px-2 text-white" onClick={() => {
                            setName('earphones')
                        }} >EARPHONES</Link></li>
                    </ul>


                    <div className="text-end">
                        <button style={{ backgroundColor: 'unset', border: 'none' }}><img src={chest} className='img-fluid' alt="" /></button>
                    </div>

                </div>
            </div>
        </header>
    )
}
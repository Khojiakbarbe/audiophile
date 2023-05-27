import { Link } from 'react-router-dom'
import chest from '../images/navbar/chest.png'

import { useContext } from 'react';
import { categoryContext } from './DataProvider/DataContext';
import { useState } from 'react';


export default function Navbar() {

    const [name, setName] = useContext(categoryContext)




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
                        <div className="dropdown-content">
                            <h1>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, officia temporibus ullam numquam delectus a.
                            </h1>
                        </div>
                    </div>
                </div>
            </div >
        </nav >
    )
}
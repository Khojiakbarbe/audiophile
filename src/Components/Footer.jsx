import { Link } from 'react-router-dom'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { useContext } from 'react';
import { categoryContext } from './DataProvider/DataContext';



export default function Footer() {

    const [name, setName] = useContext(categoryContext)

    return (
        <div className="footer">
            <div className="row">
                <div className="col-md-6">
                    <h3 style={{ color: 'white' }}><strong>audiophile</strong></h3>
                    <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team <br /> of music lovers and sound specialists who are devoted to helping you get the <br /> most out of personal audio. Come and visit our demo facility - we’re open <br /> 7 days a week.</p>
                    <p>Copyright 2021. All Rights Reserved</p>
                </div>
                <div className="col-md-6">
                    <ul className="nav col-12 col-lg-auto me-lg-auto  mb-2 justify-content-center mb-md-0" >
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
                    <div className="icons">
                        <FaFacebookSquare className='icon' />
                        <AiOutlineTwitter className='icon' />
                        <AiOutlineInstagram className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}
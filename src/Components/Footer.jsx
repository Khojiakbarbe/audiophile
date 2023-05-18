import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-md-6">
                    <h3 style={{color:'white'}}><strong>audiophile</strong></h3>
                    <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team <br /> of music lovers and sound specialists who are devoted to helping you get the <br /> most out of personal audio. Come and visit our demo facility - we’re open <br /> 7 days a week.</p>
                    <p>Copyright 2021. All Rights Reserved</p>
                </div>
                <div className="col-md-6">
                    <ul className="nav col-12 col-lg-auto me-lg-auto  mb-2 justify-content-center mb-md-0" >
                        <li><Link to='/' className="nav-link px-2 text-white" >HOME</Link></li>
                        <li><Link to='/' className="nav-link px-2 text-white" >HEADPHONES</Link></li>
                        <li><Link to='/' className="nav-link px-2 text-white" >SPEAKERS</Link></li>
                        <li><Link to='/' className="nav-link px-2 text-white" >EARPHONES</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
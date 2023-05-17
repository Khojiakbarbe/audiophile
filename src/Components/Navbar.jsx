import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> */}
                    </a>

                    <h3><Link to='/' className=" text-white" > <strong>audiophile</strong></Link></h3>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to='/' className="nav-link px-2 text-white" >HOME</Link></li>
                        <li><Link to='/' className="nav-link px-2 text-white" >HEADPHONES</Link></li>
                        <li><Link to='/' className="nav-link px-2 text-white" >SPEAKERS</Link></li>
                        <li><Link to='/' className="nav-link px-2 text-white" >EARPHONES</Link></li>
                    </ul>


                    <div className="text-end">
                        <button className='btn btn-warning'>[]</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
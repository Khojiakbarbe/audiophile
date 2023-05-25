import { Link } from 'react-router-dom'
import chest from '../images/navbar/chest.png'

import { useContext } from 'react';
import { categoryContext } from './DataProvider/DataContext';
import { useState } from 'react';


export default function Navbar() {

    const [name, setName] = useContext(categoryContext)


    const [chestList, setChestList] = useState(false);



    const body = document.body;

    console.log(document);
    if (chestList) {
        // body.onclick = function () {
        //     // setChestList(false)
        //     console.log('hello');
        // }
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


                    <div className="dropdown">
                        <img src={chest} alt="" />
                        <div className="dropdown-content">
                            <h1>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, officia temporibus ullam numquam delectus a.
                            </h1>
                        </div>
                    </div>

                    {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={chest} className='img-fluid' alt="" />
                        </a>
                        <ul class="dropdown-menu myDropDown">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati illum, maiores, delectus deleniti iure nesciunt incidunt quis itaque minus suscipit dolorem modi, dolorum doloremque et vero molestias deserunt eveniet reprehenderit vel tempora? Eos sunt facilis corporis nesciunt. Ullam vero impedit ad minus laboriosam, repellat aspernatur deserunt nostrum doloremque, recusandae pariatur eaque in delectus facere possimus vel aut odio odit? Nihil deleniti harum illo dicta officia neque eaque nam? Rerum quidem culpa officia omnis maiores ipsa accusantium suscipit magni quibusdam laudantium quos magnam quod corporis vero quam, animi vitae dolores? Dolores eius optio impedit natus? Maiores, nam fuga cupiditate in assumenda fugiat ipsa repellendus quod, rem ipsum ab architecto. Sapiente adipisci perferendis fuga illum minima quo culpa libero optio? Est reiciendis eum sint quidem dolore inventore. Aspernatur sunt, in fuga perspiciatis quam porro praesentium eaque aperiam odit obcaecati delectus maxime ullam minus necessitatibus vel ex natus sed itaque nisi doloribus suscipit. Nobis similique libero quibusdam, molestias magnam maiores repudiandae beatae nihil eaque modi amet earum ea veniam consequuntur assumenda corporis dolores quisquam quasi qui. Aspernatur saepe tempora placeat, vero odio natus ullam? Cum, culpa aperiam impedit sint praesentium vel et omnis vero rem ullam, explicabo corporis, provident iste non vitae!
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> */}

                    {/* <div className="text-end">
                        <button onMouseMove={() => setChestList(true)}  onClick={() => setChestList(true)} onMouseLeave={() => setChestList(false)} style={{ backgroundColor: 'unset', border: 'none' }}><img src={chest} className='img-fluid chest' alt="" /></button>
                    </div>
                    {
                        chestList ?
                            <div  className='chestList' onMouseLeave={() => setChestList(false)}>
                                <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nihil quos laudantium.</p>
                            </div>
                            :
                            null
                    } */}
                </div>

            </div>
        </header>
    )
}
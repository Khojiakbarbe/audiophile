import { useLocation, useNavigate } from 'react-router-dom'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';

import img from '../images/checkout/verification.png'

export default function Checkout() {

    const navigate = useNavigate();

    const state = useLocation();

    const [phone, setPhone] = useState();


    let total = 0;
    state.state.forEach(element => {
        total += element.data[0].price * element.count
    });

    const [modal, setModal] = useState('hide');
    const [slice, setSlice] = useState(1);



    function showModal() {
        setModal('')
        setSlice(1)
        document.querySelector('body').style.overflow = 'hidden'
    }
    
    function backHome(){
        document.querySelector('body').style.overflow = 'scroll'
        document.querySelector('body').style.overflowX = 'hidden'
        setModal('hide')
    }

    function otherItems() {
        setSlice(state.state.length)
        document.querySelector('#otherItems').style.display = 'none';
    }

    return (
        <>
            {
                modal == '' ?
                    <div className="modalDiv">
                        <div className="myModal">
                            <img src={img} className='img-fluid mb-3' alt="" />
                            <h1>THANK YOU  FOR YOUR ORDER</h1>
                            <p>You will receive an email confirmation shortly.</p>
                            <div className="row w-100">
                                <div className="col-md-7 img-text">
                                    {
                                        state.state.length == 1 ?
                                            <>
                                                {state.state.map((post, ind) => {
                                                    return (
                                                        <div key={ind} >
                                                            <img src={post.data[0].image.mobile} alt="" />
                                                            <span className='howMuch'><strong>x{post.count}</strong></span>
                                                            <br />
                                                            <span>{post.data[0].name}</span> <br />
                                                            <span style={{ color: 'gray' }}>${post.data[0].price}</span>
                                                        </div>
                                                    )
                                                })}
                                            </>
                                            :
                                            <>
                                                {state.state.slice(0, slice).map((post, ind) => {
                                                    return (
                                                        <div key={ind} >
                                                            <img src={post.data[0].image.mobile} alt="" />
                                                            <span className='howMuch'><strong>x{post.count}</strong></span>
                                                            <br />
                                                            <span>{post.data[0].name}</span> <br />
                                                            <span style={{ color: 'gray' }}>${post.data[0].price}</span>
                                                        </div>
                                                    )
                                                })}
                                                <hr />
                                                <p onClick={() => otherItems()} id='otherItems'>and {state.state.length - 1} other item(s)</p>
                                            </>
                                    }
                                </div>
                                <div className="col" >
                                    <div className="bg-dark p-2 " style={{ color: 'white' }}>
                                        <p style={{ color: 'gray' }}>GRAND TOTAL</p>
                                        <h4><strong>${total}</strong></h4>
                                    </div>
                                </div>
                            </div>
                            <button className='seeAndAddToCard w-100 mt-5' onClick={() => backHome()}>BACK TO HOME</button>
                        </div>
                    </div>
                    :
                    null
            }
            <div className="container pt-5 pb-5">

                <p onClick={() => navigate(-1)} className='btn'>Go Back</p>
                <div className="row w-100">
                    <div className="col-sm-8 p-2">
                        <div className="cards">
                            <h1>CHECKOUT</h1>
                            <h5 className='checkoutH5'>BILLING DETAILS</h5>
                            <div className="row w-100 mb-3">
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="name"><strong>Name</strong></label>
                                    <br />
                                    <input type="text" id='name' placeholder='Alexei Ward' className='form-control mt-2 p-3' />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="name"><strong>Email Address</strong></label>
                                    <br />
                                    <input type="text" id='name' placeholder='alexei@mail.com' className='form-control mt-2 p-3' />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="name"><strong>Phone Number</strong></label>
                                    <br />
                                    <PhoneInput
                                        className='form-control phoneNumber'
                                        placeholder="+1 202-555-0136"
                                        value={phone}
                                        onChange={setPhone}
                                    />
                                </div>
                            </div>

                            <h5 className='checkoutH5'>SHIPPING INFO</h5>
                            <label htmlFor="adress"><strong>Adress</strong></label>
                            <input type="text" placeholder='1137 Williams Avenue' className='form-control p-3 mb-4 mt-3' id="adress" />
                            <div className="row w-100 mb-5">
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="name"><strong>ZIP Code</strong></label>
                                    <br />
                                    <input type="text" id='name' placeholder='10001' className='form-control mt-2 p-3' />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="name"><strong>City</strong></label>
                                    <br />
                                    <input type="text" id='name' placeholder='New York' className='form-control mt-2 p-3' />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label htmlFor="name"><strong>Country</strong></label>
                                    <br />
                                    <input type="text" id='name' placeholder='United States' className='form-control mt-2 p-3' />
                                </div>
                            </div>

                            <h5 className='checkoutH5'>PAYMENT DETAILS</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <p><strong>Payment Method</strong></p>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <input type="radio" id='e-moneyR' name='payMethod' className="payMetRadio" placeholder='e-Money' />
                                    <label htmlFor="e-moneyR">e-Money</label>
                                    <br />
                                    <input type="radio" id='cashDeliveryR' className="payMetRadio" name='payMethod' placeholder='Cash on Delivery' />
                                    <label htmlFor="cashDeliveryR">Cash on Delivery</label>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="e-Money"><strong>e-Money</strong></label>
                                    <input type="text" id='e-Money' placeholder='238521993' className='form-control p-3' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="e-MoneyPin"><strong>e-Money PIN</strong></label>
                                    <input type="text" id='e-MoneyPin' placeholder='6891' className='form-control p-3' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="cards">
                            <h3>SUMMARY</h3>
                            {state.state.map((post, ind) => {
                                return (
                                    <div key={ind} className='row'>
                                        <div className="col-md-8 row">
                                            <div className="col-sm-4">
                                                <img src={post.data[0].image.mobile} width='50' alt="" />
                                            </div>
                                            <div className="col">
                                                <p>{post.data[0].name}</p>
                                                <p style={{ color: 'gray' }}>${post.data[0].price}</p>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <p style={{ color: 'gray' }}><strong>x{post.count}</strong></p>
                                        </div>
                                    </div>
                                )
                            })}
                            <h4 id='total'><strong>${total}</strong></h4>
                            <div className='text-center'>
                                <button className='seeAndAddToCard' onClick={() => showModal()}>CONTINUE & PAY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
import { useLocation, useNavigate } from 'react-router-dom'


export default function Checkout() {

    const navigate = useNavigate();

    const state = useLocation();

    return (
        <div className="container pt-5 pb-5">
            <p onClick={() => navigate(-1)} className='btn'>Go Back</p>
            <div className="row">
                <div className="col-8 border pb-5">
                    <h1>CHECKOUT</h1>
                    <h5 className='checkoutH5'>BILLING DETAILS</h5>
                    <div className="row mb-3">
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
                            <input type="text" id='name' placeholder='+1 202-555-0136' className='form-control mt-2 p-3' />
                        </div>
                    </div>

                    <h5 className='checkoutH5'>SHIPPING INFO</h5>
                    <label htmlFor="adress"><strong>Adress</strong></label>
                    <input type="text" placeholder='1137 Williams Avenue' className='form-control p-3 mb-4 mt-3' id="adress" />
                    <div className="row mb-5">
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
                            <p><strong>Payemnt Method</strong></p>
                        </div>
                        <div className="col-md-6">
                            <input type="checkbox" className="form-control p-3" placeholder='e-Money' />
                            <br />
                            <input type="checkbox" className="form-control p-3" placeholder='Cash on Delivery' />
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
                <div className="col-4">
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
                    <div className='text-center'>
                    <button className='seeAndAddToCard'>CONTINUE & PAY</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
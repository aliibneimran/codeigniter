import React from 'react'
import { Link } from 'react-router-dom'


export default function OrderTracking() {
    return (
        <div>
            {/* BREADCRUMB AREA START */}
            <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner">
                                <h1 className="page-title">Order Tracking</h1>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
                                        <li>Order Tracking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BREADCRUMB AREA END */}
            {/* LOGIN AREA START */}
            <div className="ltn__login-area mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="account-login-inner section-bg-1">
                                <form action="#" className="ltn__form-box contact-form-box">
                                    <p className="text-center"> To track your order please enter your Order ID in the box below and press the "Track Order" button. This was given to you on your receipt and in the confirmation email you should have received. </p>
                                    <label>Order ID</label>
                                    <input type="text" name="email" placeholder="Found in your order confirmation email." />
                                    <label>Billing email</label>
                                    <input type="text" name="email" placeholder="Email you used during checkout." />
                                    <div className="btn-wrapper mt-0 text-center">
                                        <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Track Order</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* LOGIN AREA END */}
        </div>

    )
}

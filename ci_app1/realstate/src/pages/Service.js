import React from 'react'
import { Link } from 'react-router-dom'


export default function Service() {
    return (
        <>
            <div>
                {/* BREADCRUMB AREA START */}
                <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__breadcrumb-inner">
                                    <h1 className="page-title">What We Do</h1>
                                    <div className="ltn__breadcrumb-list">
                                        <ul>
                                            <li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
                                            <li>Service</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BREADCRUMB AREA END */}
                {/* ABOUT US AREA START */}
                <div className="ltn__about-us-area pb-115">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 align-self-center">
                                <div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
                                    <img src="assets/img/service/11.jpg" alt="Image" />
                                </div>
                            </div>
                            <div className="col-lg-7 align-self-center">
                                <div className="about-us-info-wrap">
                                    <div className="section-title-area ltn__section-title-2--- mb-20">
                                        <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6>
                                        <h1 className="section-title">The Leading Real Estate
                                            Rental Marketplace<span>.</span></h1>
                                        <p>Over 39,000 people work for us in more than 70 countries all over the
                                            This breadth of global coverage, combined with specialist services</p>
                                    </div>
                                    <div className="about-us-info-wrap-inner about-us-info-devide---">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                    <div className="btn-wrapper animated">
                                        <Link to="/about" className="theme-btn-1 btn btn-effect-1 text-uppercase">About Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ABOUT US AREA END */}
                {/* SERVICE AREA START (Service 1) */}
                <div className="ltn__service-area section-bg-1 pt-115 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-area ltn__section-title-2--- text-center">
                                    <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
                                    <h1 className="section-title">Our Core Services</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row  justify-content-center">
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                    <div className="ltn__feature-icon">
                                        <span><i className="flaticon-house" /></span>
                                        {/* <img src="assets/img/icons/icon-img/21.png" alt="#"> */}
                                    </div>
                                    <div className="ltn__feature-info">
                                        <h3><Link to="/service-details">Property Management</Link></h3>
                                        <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                        {/* <Link class="ltn__service-btn" href="service-details">Find A Home <i class="flaticon-right-arrow"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                    <div className="ltn__feature-icon">
                                        <span><i className="flaticon-mortgage" /></span>
                                        {/* <img src="assets/img/icons/icon-img/21.png" alt="#"> */}
                                    </div>
                                    <div className="ltn__feature-info">
                                        <h3><Link to="/service-details">Mortgage Service</Link></h3>
                                        <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                        {/* <Link class="ltn__service-btn" href="service-details">Find A Home <i class="flaticon-right-arrow"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                    <div className="ltn__feature-icon">
                                        <span><i className="flaticon-operator" /></span>
                                        {/* <img src="assets/img/icons/icon-img/21.png" alt="#"> */}
                                    </div>
                                    <div className="ltn__feature-info">
                                        <h3><Link to="/service-details">Consulting Service</Link></h3>
                                        <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                        {/* <Link class="ltn__service-btn" href="service-details">Find A Home <i class="flaticon-right-arrow"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                    <div className="ltn__feature-icon">
                                        <span><i className="flaticon-house-1" /></span>
                                        {/* <img src="assets/img/icons/icon-img/21.png" alt="#"> */}
                                    </div>
                                    <div className="ltn__feature-info">
                                        <h3><Link to="/service-details">Home Buying</Link></h3>
                                        <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                        {/* <Link class="ltn__service-btn" href="service-details">Find A Home <i class="flaticon-right-arrow"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                    <div className="ltn__feature-icon">
                                        <span><i className="flaticon-house-3" /></span>
                                        {/* <img src="assets/img/icons/icon-img/21.png" alt="#"> */}
                                    </div>
                                    <div className="ltn__feature-info">
                                        <h3><Link to="/service-details">Home Selling</Link></h3>
                                        <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                        {/* <Link class="ltn__service-btn" href="service-details">Find A Home <i class="flaticon-right-arrow"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                                    <div className="ltn__feature-icon">
                                        <span><i className="flaticon-official-documents" /></span>
                                        {/* <img src="assets/img/icons/icon-img/21.png" alt="#"> */}
                                    </div>
                                    <div className="ltn__feature-info">
                                        <h3><Link to="/service-details">Escrow Services</Link></h3>
                                        <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                                        {/* <Link class="ltn__service-btn" href="service-details">Find A Home <i class="flaticon-right-arrow"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SERVICE AREA END */}
                
            </div>

        </>
    )
}

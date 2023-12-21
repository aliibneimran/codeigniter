import React from 'react'
import { Link } from 'react-router-dom'


export default function Team() {
    return (
        <>
            <div>
                {/* BREADCRUMB AREA START */}
                <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__breadcrumb-inner">
                                    <h1 className="page-title">Our Agent</h1>
                                    <div className="ltn__breadcrumb-list">
                                        <ul>
                                            <li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
                                            <li>Agent</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BREADCRUMB AREA END */}
                {/* TEAM AREA START (Team - 3) */}
                <div className="ltn__team-area pt-110--- pb-90">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="ltn__team-item ltn__team-item-3---">
                                    <div className="team-img">
                                        <img src="assets/img/team/4.jpg" alt="Imag" />
                                    </div>
                                    <div className="team-info">
                                        <h4><Link to="/team-details">Rosalina D. William</Link></h4>
                                        <h6 className="ltn__secondary-color">Real Estate Broker</h6>
                                        <div className="ltn__social-media">
                                            <ul>
                                                <li><Link to="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link to="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link to="/#"><i className="fab fa-linkedin" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="ltn__team-item ltn__team-item-3---">
                                    <div className="team-img">
                                        <img src="assets/img/team/2.jpg" alt="Image" />
                                    </div>
                                    <div className="team-info">
                                        <h4><Link to="/team-details">Kelian Anderson</Link></h4>
                                        <h6 className="ltn__secondary-color">Selling Agents</h6>
                                        <div className="ltn__social-media">
                                            <ul>
                                                <li><Link to="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link to="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link to="/#"><i className="fab fa-linkedin" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="ltn__team-item ltn__team-item-3---">
                                    <div className="team-img">
                                        <img src="assets/img/team/3.jpg" alt="Image" />
                                    </div>
                                    <div className="team-info">
                                        <h4><Link to="/team-details">Miranda H. Halim</Link></h4>
                                        <h6 className="ltn__secondary-color">Property Seller</h6>
                                        <div className="ltn__social-media">
                                            <ul>
                                                <li><Link to="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link to="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link to="/#"><i className="fab fa-linkedin" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="ltn__team-item ltn__team-item-3---">
                                    <div className="team-img">
                                        <img src="assets/img/team/1.jpg" alt="Image" />
                                    </div>
                                    <div className="team-info">
                                        <h4><Link to="/team-details">Damble D. Browni.</Link></h4>
                                        <h6 className="ltn__secondary-color">Property Seller</h6>
                                        <div className="ltn__social-media">
                                            <ul>
                                                <li><Link to="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link to="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link to="/#"><i className="fab fa-linkedin" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="ltn__team-item ltn__team-item-3---">
                                    <div className="team-img">
                                        <img src="assets/img/team/5.jpg" alt="Image" />
                                    </div>
                                    <div className="team-info">
                                        <h4><Link to="/team-details">Aiden Benjamin</Link></h4>
                                        <h6 className="ltn__secondary-color">Real Estate Broker</h6>
                                        <div className="ltn__social-media">
                                            <ul>
                                                <li><Link to="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link to="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link to="/#"><i className="fab fa-linkedin" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="ltn__team-item ltn__team-item-3---">
                                    <div className="team-img">
                                        <img src="assets/img/team/6.jpg" alt="Image" />
                                    </div>
                                    <div className="team-info">
                                        <h4><Link to="/team-details">James Carter</Link></h4>
                                        <h6 className="ltn__secondary-color">Selling Agents</h6>
                                        <div className="ltn__social-media">
                                            <ul>
                                                <li><Link to="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link to="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link to="/#"><i className="fab fa-linkedin" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TEAM AREA END */}
            </div>

        </>
    )
}

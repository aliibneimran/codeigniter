import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPage() {
    return (
        <div>
            {/* <!-- BREADCRUMB AREA START --> */}
            <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner">
                                <h1 className="page-title">404 Page</h1>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home"></i></span> Home</Link></li>
                                        <li>404</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- BREADCRUMB AREA END --> */}

            {/* <!-- 404 area start --> */}
            <div className="ltn__404-area ltn__404-area-1 mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="error-404-inner text-center">
                                <div className="error-img mb-30">
                                    <img src="assets/img/others/error-1.png" alt="#" />
                                </div>
                                <h1 className="error-404-title d-none">404</h1>
                                <h2>Page Not Found!</h2>
                                {/* <!-- <h3>Oops! Looks like something going rong</h3> --> */}
                                <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                                <div className="btn-wrapper">
                                    <Link to="index" className="btn btn-transparent"><i className="fas fa-long-arrow-alt-left"></i> BACK TO HOME</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- 404 area end --> */}
        </div>
    )
}

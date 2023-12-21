import React from 'react'
import { Link } from 'react-router-dom'


export default function Locations() {
  return (
      <div>
          {/* BREADCRUMB AREA START */}
          <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image mb-0" data-bs-bg="img/bg/14.jpg">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="ltn__breadcrumb-inner">
                              <h1 className="page-title">Google Map Locations</h1>
                              <div className="ltn__breadcrumb-list">
                                  <ul>
                                      <li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
                                      <li>Locations</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* BREADCRUMB AREA END */}
          {/* GOOGLE MAP LOCATIONS AREA START */}

          {/* <div className="ltn__google-map-locations-area">
              <div id="gmap" />
          </div> */}
          
          {/* GOOGLE MAP LOCATIONS AREA END */}
          {/* GOOGLE MAP LOCATIONS LIST AREA START */}
          <div className="ltn__google-map-locations-list-area mt-115 mb-70">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="ltn__location-search mb-100">
                              <div className="section-title-area ltn__section-title-2 ">
                                  <h1 className="section-title">Find your nearby location<span>.</span></h1>
                              </div>
                              <form action="#" className="clearfix">
                                  <h3>Your State</h3>
                                  <div className="input-item">
                                      <select className="nice-select">
                                          <option>Make A Selection</option>
                                          <option>New York</option>
                                          <option>South Carolina</option>
                                          <option>Florida</option>
                                          <option>Rhode Island</option>
                                          <option>Melbourne</option>
                                          <option>Sydney</option>
                                          <option>Cairns</option>
                                      </select>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="ltn__state-location">
                              <h2 className="ltn__state-location-title">Alabama</h2>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="ltn__map-item">
                              <h3 className="ltn__location-name">Boston, New York</h3>
                              <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt" />5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                              <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume" />0123456789</h4>
                              <div className="btn-wrapper">
                                  <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow" /> Get An Appointment</Link>
                                  <Link to="/#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe" /> View Website</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="ltn__map-item">
                              <h3 className="ltn__location-name">Boston, New York</h3>
                              <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt" />5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                              <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume" />0123456789</h4>
                              <div className="btn-wrapper">
                                  <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow" /> Get An Appointment</Link>
                                  <Link to="/#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe" /> View Website</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="ltn__map-item">
                              <h3 className="ltn__location-name">Boston, New York</h3>
                              <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt" />5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                              <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume" />0123456789</h4>
                              <div className="btn-wrapper">
                                  <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow" /> Get An Appointment</Link>
                                  <Link to="/#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe" /> View Website</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="ltn__map-item">
                              <h3 className="ltn__location-name">Boston, New York</h3>
                              <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt" />5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                              <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume" />0123456789</h4>
                              <div className="btn-wrapper">
                                  <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow" /> Get An Appointment</Link>
                                  <Link to="/#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe" /> View Website</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="ltn__map-item">
                              <h3 className="ltn__location-name">Boston, New York</h3>
                              <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt" />5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                              <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume" />0123456789</h4>
                              <div className="btn-wrapper">
                                  <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow" /> Get An Appointment</Link>
                                  <Link to="/#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe" /> View Website</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="ltn__map-item">
                              <h3 className="ltn__location-name">Boston, New York</h3>
                              <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt" />5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                              <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume" />0123456789</h4>
                              <div className="btn-wrapper">
                                  <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow" /> Get An Appointment</Link>
                                  <Link to="/#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe" /> View Website</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="ltn__state-location">
                              <h2 className="ltn__state-location-title">Boston</h2>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="ltn__map-item">
                              <h3 className="ltn__location-name">Boston, New York</h3>
                              <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt" />5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                              <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume" />0123456789</h4>
                              <div className="btn-wrapper">
                                  <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow" /> Get An Appointment</Link>
                                  <Link to="/#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe" /> View Website</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="ltn__map-item">
                              <h3 className="ltn__location-name">Boston, New York</h3>
                              <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt" />5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                              <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume" />0123456789</h4>
                              <div className="btn-wrapper">
                                  <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow" /> Get An Appointment</Link>
                                  <Link to="/#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe" /> View Website</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="ltn__map-item">
                              <h3 className="ltn__location-name">Boston, New York</h3>
                              <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt" />5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                              <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume" />0123456789</h4>
                              <div className="btn-wrapper">
                                  <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow" /> Get An Appointment</Link>
                                  <Link to="/#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe" /> View Website</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-12">
                          <div className="ltn__state-location">
                              <h2 className="ltn__state-location-title">New York</h2>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="ltn__map-item">
                              <h3 className="ltn__location-name">Boston, New York</h3>
                              <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt" />5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                              <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume" />0123456789</h4>
                              <div className="btn-wrapper">
                                  <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow" /> Get An Appointment</Link>
                                  <Link to="/#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe" /> View Website</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="ltn__map-item">
                              <h3 className="ltn__location-name">Boston, New York</h3>
                              <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt" />5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                              <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume" />0123456789</h4>
                              <div className="btn-wrapper">
                                  <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow" /> Get An Appointment</Link>
                                  <Link to="/#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe" /> View Website</Link>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="ltn__map-item">
                              <h3 className="ltn__location-name">Boston, New York</h3>
                              <h5 className="ltn__location-single-info"><i className="fas fa-map-marked-alt" />5816 S. Coulter Street Amarillo, <br /> TX 79119</h5>
                              <h4 className="ltn__location-single-info"><i className="fas fa-phone-volume" />0123456789</h4>
                              <div className="btn-wrapper">
                                  <Link to="/appointment" className="btn btn-transparent btn-border btn-effect-4"><i className="fas fa-location-arrow" /> Get An Appointment</Link>
                                  <Link to="/#" className="btn btn-transparent btn-border btn-effect-3"><i className="fas fa-globe" /> View Website</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* GOOGLE MAP LOCATIONS LIST AREA END */}
      </div>

  )
}

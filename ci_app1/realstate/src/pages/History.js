import React from 'react'
import { Link } from 'react-router-dom'


export default function History() {
  return (
      <div>
          {/* BREADCRUMB AREA START */}
          <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="ltn__breadcrumb-inner">
                              <h1 className="page-title">Our History</h1>
                              <div className="ltn__breadcrumb-list">
                                  <ul>
                                      <li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
                                      <li>History</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* BREADCRUMB AREA END */}
          {/* OUR HISTORY AREA START */}
          <div className="ltn__our-history-area pb-100">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="ltn__our-history-inner">
                              <div className="ltn__tab-menu text-uppercase">
                                  <div className="nav">
                                      <Link data-bs-toggle="tab" href="#liton_tab_2_1">1900</Link>
                                      <Link className="active show" data-bs-toggle="tab" href="#liton_tab_2_2">1940</Link>
                                      <Link data-bs-toggle="tab" href="#liton_tab_2_3">2000</Link>
                                      <Link data-bs-toggle="tab" href="#liton_tab_2_4">2010</Link>
                                      <Link data-bs-toggle="tab" href="#liton_tab_2_5">2021</Link>
                                  </div>
                              </div>
                              <div className="tab-content">
                                  <div className="tab-pane fade" id="liton_tab_2_1">
                                      <div className="ltn__product-tab-content-inner">
                                          <div className="row">
                                              <div className="col-lg-6 align-self-center">
                                                  <div className="about-us-img-wrap about-img-left">
                                                      <img src="assets/img/img-slide/12.jpg" alt="Image" />
                                                      <div className="ltn__history-icon">
                                                          <i className="fas fa-award" />
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-lg-6 align-self-center">
                                                  <div className="about-us-info-wrap">
                                                      <div className="section-title-area ltn__section-title-2--- text-center---">
                                                          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our History</h6>
                                                          <h1 className="section-title">We Started Our Journey</h1>
                                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                      </div>
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="tab-pane fade active show" id="liton_tab_2_2">
                                      <div className="ltn__product-tab-content-inner">
                                          <div className="row">
                                              <div className="col-lg-6 align-self-center">
                                                  <div className="about-us-img-wrap about-img-left">
                                                      <img src="assets/img/img-slide/11.jpg" alt="Image" />
                                                      <div className="ltn__history-icon">
                                                          <i className="icon-award" />
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-lg-6 align-self-center">
                                                  <div className="about-us-info-wrap">
                                                      <div className="section-title-area ltn__section-title-2--- text-center---">
                                                          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
                                                          <h1 className="section-title">It Was An Sweet
                                                              Journey Time</h1>
                                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                      </div>
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="tab-pane fade" id="liton_tab_2_3">
                                      <div className="ltn__product-tab-content-inner">
                                          <div className="row">
                                              <div className="col-lg-6 align-self-center">
                                                  <div className="about-us-img-wrap about-img-left">
                                                      <img src="assets/img/img-slide/13.jpg" alt="Image" />
                                                      <div className="ltn__history-icon">
                                                          <i className="fas fa-medal" />
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-lg-6 align-self-center">
                                                  <div className="about-us-info-wrap">
                                                      <div className="section-title-area ltn__section-title-2--- text-center---">
                                                          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
                                                          <h1 className="section-title">It Was An Sweet
                                                              Journey Time</h1>
                                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                      </div>
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="tab-pane fade" id="liton_tab_2_4">
                                      <div className="ltn__product-tab-content-inner">
                                          <div className="row">
                                              <div className="col-lg-6 align-self-center">
                                                  <div className="about-us-img-wrap about-img-left">
                                                      <img src="assets/img/img-slide/12.jpg" alt="Image" />
                                                      <div className="ltn__history-icon">
                                                          <i className="icon-award" />
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-lg-6 align-self-center">
                                                  <div className="about-us-info-wrap">
                                                      <div className="section-title-area ltn__section-title-2--- text-center---">
                                                          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
                                                          <h1 className="section-title">It Was An Sweet
                                                              Journey Time</h1>
                                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                      </div>
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="tab-pane fade" id="liton_tab_2_5">
                                      <div className="ltn__product-tab-content-inner">
                                          <div className="row">
                                              <div className="col-lg-6 align-self-center">
                                                  <div className="about-us-img-wrap about-img-left">
                                                      <img src="assets/img/img-slide/11.jpg" alt="Image" />
                                                      <div className="ltn__history-icon">
                                                          <i className="fas fa-trophy" />
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-lg-6 align-self-center">
                                                  <div className="about-us-info-wrap">
                                                      <div className="section-title-area ltn__section-title-2--- text-center---">
                                                          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
                                                          <h1 className="section-title">It Was An Sweet
                                                              Journey Time</h1>
                                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                                      </div>
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* OUR HISTORY AREA END */}
          {/* FEATURE AREA START ( Feature - 6) */}
          <div className="ltn__feature-area section-bg-2 pt-115 pb-90">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-title-area ltn__section-title-2--- text-center">
                              <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Features</h6>
                              <h1 className="section-title">Why Choose Us</h1>
                          </div>
                      </div>
                  </div>
                  <div className="row justify-content-center">
                      <div className="col-xl-4 col-sm-6 col-12">
                          <div className="ltn__feature-item ltn__feature-item-7 ltn__feature-item-7-color-white">
                              <div className="ltn__feature-icon-title">
                                  <div className="ltn__feature-icon">
                                      <span><i className="flaticon-house-4" /></span>
                                  </div>
                                  <h3><Link to="/service-details">The Perfect Residency</Link></h3>
                              </div>
                              <div className="ltn__feature-info">
                                  <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-sm-6 col-12">
                          <div className="ltn__feature-item ltn__feature-item-7 ltn__feature-item-7-color-white">
                              <div className="ltn__feature-icon-title">
                                  <div className="ltn__feature-icon">
                                      <span><i className="icon-mechanic" /></span>
                                  </div>
                                  <h3><Link to="/service-details">Global Architect Experts</Link></h3>
                              </div>
                              <div className="ltn__feature-info">
                                  <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-sm-6 col-12">
                          <div className="ltn__feature-item ltn__feature-item-7 ltn__feature-item-7-color-white">
                              <div className="ltn__feature-icon-title">
                                  <div className="ltn__feature-icon">
                                      <span><i className="icon-repair-1" /></span>
                                  </div>
                                  <h3><Link to="/service-details">Built-in Storage Cupboards</Link></h3>
                              </div>
                              <div className="ltn__feature-info">
                                  <p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* FEATURE AREA END */}
      </div>

  )
}

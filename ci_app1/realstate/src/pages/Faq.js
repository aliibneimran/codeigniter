import React from 'react'
import { Link } from 'react-router-dom'


export default function Faq() {
  return (
    <>
          <div>
              {/* BREADCRUMB AREA START */}
              <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="ltn__breadcrumb-inner">
                                  <h1 className="page-title">Frequently asked questions</h1>
                                  <div className="ltn__breadcrumb-list">
                                      <ul>
                                          <li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
                                          <li>FAQ</li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* BREADCRUMB AREA END */}
              {/* FAQ AREA START (faq-2) (ID > accordion_2) */}
              <div className="ltn__faq-area mb-100">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-8">
                              <div className="ltn__faq-inner ltn__faq-inner-2">
                                  <div id="accordion_2">
                                      {/* card */}
                                      <div className="card">
                                          <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
                                              How to buy a product?
                                          </h6>
                                          <div id="faq-item-2-1" className="collapse" data-bs-parent="#accordion_2">
                                              <div className="card-body">
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.</p>
                                              </div>
                                          </div>
                                      </div>
                                      {/* card */}
                                      <div className="card">
                                          <h6 className="ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="true">
                                              How can i make refund from your website?
                                          </h6>
                                          <div id="faq-item-2-2" className="collapse show" data-bs-parent="#accordion_2">
                                              <div className="card-body">
                                                  <div className="ltn__video-img alignleft">
                                                      <img src="assets/img/bg/17.jpg" alt="video popup bg image" />
                                                      <Link className="ltn__video-icon-2 ltn__video-icon-2-small ltn__video-icon-2-border----" to="/https://www.youtube.com/embed/LjCzPp-MK48?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
                                                          <i className="fa fa-play" />
                                                      </Link>
                                                  </div>
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.</p>
                                              </div>
                                          </div>
                                      </div>
                                      {/* card */}
                                      <div className="card">
                                          <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
                                              I am a new user. How should I start?
                                          </h6>
                                          <div id="faq-item-2-3" className="collapse" data-bs-parent="#accordion_2">
                                              <div className="card-body">
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.</p>
                                              </div>
                                          </div>
                                      </div>
                                      {/* card */}
                                      <div className="card">
                                          <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-4" aria-expanded="false">
                                              Returns and refunds
                                          </h6>
                                          <div id="faq-item-2-4" className="collapse" data-bs-parent="#accordion_2">
                                              <div className="card-body">
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.</p>
                                              </div>
                                          </div>
                                      </div>
                                      {/* card */}
                                      <div className="card">
                                          <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-5" aria-expanded="false">
                                              Are my details secured?
                                          </h6>
                                          <div id="faq-item-2-5" className="collapse" data-bs-parent="#accordion_2">
                                              <div className="card-body">
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.</p>
                                              </div>
                                          </div>
                                      </div>
                                      {/* card */}
                                      <div className="card">
                                          <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-6" aria-expanded="false">
                                              Sale code is not working
                                          </h6>
                                          <div id="faq-item-2-6" className="collapse" data-bs-parent="#accordion_2">
                                              <div className="card-body">
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.</p>
                                              </div>
                                          </div>
                                      </div>
                                      {/* card */}
                                      <div className="card">
                                          <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-7" aria-expanded="false">
                                              How do I make payment by my credit card
                                          </h6>
                                          <div id="faq-item-2-7" className="collapse" data-bs-parent="#accordion_2">
                                              <div className="card-body">
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="need-support text-center mt-100">
                                      <h2>Still need help? Reach out to support 24/7:</h2>
                                      <div className="btn-wrapper mb-30">
                                          <Link to="/contact" className="theme-btn-1 btn">Contact Us</Link>
                                      </div>
                                      <h3><i className="fas fa-phone" /> +0123-456-789</h3>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4">
                              <aside className="sidebar-area ltn__right-sidebar">
                                  {/* Newsletter Widget */}
                                  <div className="widget ltn__search-widget ltn__newsletter-widget">
                                      <h6 className="ltn__widget-sub-title">// subscribe</h6>
                                      <h4 className="ltn__widget-title">Get Newsletter</h4>
                                      <form action="#">
                                          <input type="text" name="search" placeholder="Search" />
                                          <button type="submit"><i className="fas fa-search" /></button>
                                      </form>
                                      <div className="ltn__newsletter-bg-icon">
                                          <i className="fas fa-envelope-open-text" />
                                      </div>
                                  </div>
                                  {/* Banner Widget */}
                                  <div className="widget ltn__banner-widget">
                                      <Link to="/shop"><img src="assets/img/banner/banner-3.jpg" alt="Banner Image" /></Link>
                                  </div>
                              </aside>
                          </div>
                      </div>
                  </div>
              </div>
              {/* FAQ AREA START */}
              {/* COUNTER UP AREA START */}
              <div className="ltn__counterup-area section-bg-1 pt-120 pb-70">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-3 col-sm-6 align-self-center">
                              <div className="ltn__counterup-item text-color-white---">
                                  <div className="counter-icon">
                                      <i className="flaticon-select" />
                                  </div>
                                  <h1><span className="counter">560</span><span className="counterUp-icon">+</span> </h1>
                                  <h6>Total Area Sq</h6>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-6 align-self-center">
                              <div className="ltn__counterup-item text-color-white---">
                                  <div className="counter-icon">
                                      <i className="flaticon-office" />
                                  </div>
                                  <h1><span className="counter">197</span><span className="counterUp-letter">K</span><span className="counterUp-icon">+</span> </h1>
                                  <h6>Apartments Sold</h6>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-6 align-self-center">
                              <div className="ltn__counterup-item text-color-white---">
                                  <div className="counter-icon">
                                      <i className="flaticon-excavator" />
                                  </div>
                                  <h1><span className="counter">268</span><span className="counterUp-icon">+</span> </h1>
                                  <h6>Total Constructions</h6>
                              </div>
                          </div>
                          <div className="col-md-3 col-sm-6 align-self-center">
                              <div className="ltn__counterup-item text-color-white---">
                                  <div className="counter-icon">
                                      <i className="flaticon-armchair" />
                                  </div>
                                  <h1><span className="counter">340</span><span className="counterUp-icon">+</span> </h1>
                                  <h6>Apartio Rooms</h6>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* COUNTER UP AREA END */}
          </div>

    </>
  )
}

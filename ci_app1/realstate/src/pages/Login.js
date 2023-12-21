import React from 'react'
import { Link } from 'react-router-dom'



export default function Login() {
  return (
      <div>
          {/* BREADCRUMB AREA START */}
          <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="ltn__breadcrumb-inner">
                              <h1 className="page-title">Account</h1>
                              <div className="ltn__breadcrumb-list">
                                  <ul>
                                      <li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
                                      <li>Login</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* BREADCRUMB AREA END */}
          {/* LOGIN AREA START */}
          <div className="ltn__login-area pb-65">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-title-area text-center">
                              <h1 className="section-title">Sign In <br />To  Your Account</h1>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                  Sit aliquid,  Non distinctio vel iste.</p>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="account-login-inner">
                              <form action="#" className="ltn__form-box contact-form-box">
                                  <input type="text" name="email" placeholder="Email*" />
                                  <input type="password" name="password" placeholder="Password*" />
                                  <div className="btn-wrapper mt-0">
                                      <button className="theme-btn-1 btn btn-block" type="submit">SIGN IN</button>
                                  </div>
                                  <div className="go-to-btn mt-20">
                                      <Link to="/#" title="Forgot Password?" data-bs-toggle="modal" data-bs-target="#ltn_forget_password_modal"><small>FORGOTTEN YOUR PASSWORD?</small></Link>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="account-create text-center pt-50">
                              <h4>DON'T HAVE AN ACCOUNT?</h4>
                              <p>Add items to your wishlistget personalised recommendations <br />
                                  check out more quickly track your orders register</p>
                              <div className="btn-wrapper">
                                  <Link to="/register" className="theme-btn-1 btn black-btn">CREATE ACCOUNT</Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* LOGIN AREA END */}
      </div>

  )
}

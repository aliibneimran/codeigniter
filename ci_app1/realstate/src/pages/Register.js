import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Register() {
    const [formData,setFormData]= useState({});
    const changeHandler = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((val)=>({...val, [name]:value}))
    }
    // console.log(formData);
    const submitHandler = (e)=> {
        e.preventDefault();
        if(formData.password != formData.confirmpassword){
            alert("Password doesn't match");
        }else{
            axios.get("http://localhost:8080/registration",formData).then(
                (res)=>{
                    alert(res.data.email);
                }
            )
        }
    }
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
                                      <li>Register</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* BREADCRUMB AREA END */}
          {/* LOGIN AREA START (Register) */}
          <div className="ltn__login-area pb-110">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-title-area text-center">
                              <h1 className="section-title">Register <br />Your Account</h1>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                  Sit aliquid,  Non distinctio vel iste.</p>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                          <div className="account-login-inner">
                              <form action="#" onSubmit={submitHandler} className="ltn__form-box contact-form-box">
                                  <input type="text" name="name" onChange={changeHandler} placeholder="Name" />
                                  <input type="text" name="email" onChange={changeHandler} placeholder="Email*" />
                                  <input type="password" name="password" onChange={changeHandler} placeholder="Password*" />
                                  <input type="password" name="confirmpassword" onChange={changeHandler} placeholder="Confirm Password*" />
                                  <label className="checkbox-inline">
                                      <input type="checkbox" defaultValue  className='mx-2'/>
                                      I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.
                                  </label>
                                  <label className="checkbox-inline">
                                      <input type="checkbox" defaultValue className='mx-2'/>
                                      By clicking "create account", I consent to the privacy policy.
                                  </label>
                                  <div className="btn-wrapper">
                                      <button className="theme-btn-1 btn reverse-color btn-block" type="submit">CREATE ACCOUNT</button>
                                  </div>
                              </form>
                              <div className="by-agree text-center">
                                  <p>By creating an account, you agree to our:</p>
                                  <p><Link to="/#">TERMS OF CONDITIONS  &nbsp; &nbsp; | &nbsp; &nbsp;  PRIVACY POLICY</Link></p>
                                  <div className="go-to-btn mt-50">
                                      <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                                  </div>
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

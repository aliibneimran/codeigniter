import React from 'react'
import { Link } from 'react-router-dom'

export default function Blogs() {
  return (
    <div>
              {/* <!-- BLOG AREA START (blog-3) --> */}
      <div className="ltn__blog-area pt-115--- pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">News & Blogs</h6>
                <h1 className="section-title">Leatest News Feeds</h1>
              </div>
            </div>
          </div>
          <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
            {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <Link to="/blog-details"><img src="assets/img/blog/1.jpg" alt="#" /></Link>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <Link to="/#"><i className="far fa-user"></i>by: Admin</Link>
                      </li>
                      <li className="ltn__blog-tags">
                        <Link to="/#"><i className="fas fa-tags"></i>Decorate</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title"><Link to="/blog-details">10 Brilliant Ways To Decorate Your Home</Link></h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>June 24, 2021</li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <Link to="/blog-details">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <Link to="/blog-details"><img src="assets/img/blog/2.jpg" alt="#" /></Link>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <Link to="/#"><i className="far fa-user"></i>by: Admin</Link>
                      </li>
                      <li className="ltn__blog-tags">
                        <Link to="/#"><i className="fas fa-tags"></i>Interior</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title"><Link to="/blog-details">The Most Inspiring Interior Design Of 2021</Link></h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>July 23, 2021</li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <Link to="/blog-details">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <Link to="/blog-details"><img src="assets/img/blog/3.jpg" alt="#" /></Link>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <Link to="/#"><i className="far fa-user"></i>by: Admin</Link>
                      </li>
                      <li className="ltn__blog-tags">
                        <Link to="/#"><i className="fas fa-tags"></i>Estate</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title"><Link to="/blog-details">Recent Commercial Real Estate Transactions</Link></h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>May 22, 2021</li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <Link to="/blog-details">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <Link to="/blog-details"><img src="assets/img/blog/4.jpg" alt="#" /></Link>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <Link to="/#"><i className="far fa-user"></i>by: Admin</Link>
                      </li>
                      <li className="ltn__blog-tags">
                        <Link to="/#"><i className="fas fa-tags"></i>Room</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title"><Link to="/blog-details">Renovating a Living Room? Experts Share Their Secrets</Link></h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>June 24, 2021</li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <Link to="/blog-details">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <Link to="/blog-details"><img src="assets/img/blog/5.jpg" alt="#" /></Link>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <Link to="/#"><i className="far fa-user"></i>by: Admin</Link>
                      </li>
                      <li className="ltn__blog-tags">
                        <Link to="/#"><i className="fas fa-tags"></i>Trends</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title"><Link to="/blog-details">7 home trends that will shape your house in 2021</Link></h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"></i>June 24, 2021</li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <Link to="/blog-details">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- BLOG AREA END --> */}
    </div>
  )
}

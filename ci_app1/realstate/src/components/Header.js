import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <div>
        {/* HEADER AREA START (header-3) */}
        <header className="ltn__header-area ltn__header-3 section-bg-6---">
          {/* ltn__header-middle-area start */}
          <div className="ltn__header-middle-area">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="site-logo">
                    <Link to="/"><img src="assets/img/logo.png" alt="Logo" /></Link>
                  </div>
                </div>
                <div className="col header-contact-serarch-column d-none d-xl-block">
                  <div className="header-contact-search">
                    {/* header-feature-item */}
                    <div className="header-feature-item">
                      <div className="header-feature-icon">
                        <i className="icon-phone" />
                      </div>
                      <div className="header-feature-info">
                        <h6>Phone</h6>
                        <p><Link to="/tel:0123456789">+0123-456-789</Link></p>
                      </div>
                    </div>
                    {/* header-search-2 */}
                    <div className="header-search-2">
                      <form id="#123" method="get" action="#">
                        <input type="text" name="search" defaultValue placeholder="Search here..." />
                        <button type="submit">
                          <span><i className="icon-search" /></span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* header-options */}
                  <div className="ltn__header-options">
                    <ul>
                      <li className="d-none">
                        {/* ltn__currency-menu */}
                        <div className="ltn__drop-menu ltn__currency-menu">
                          <ul>
                            <li><Link to="/#" className="dropdown-toggle"><span className="active-currency">USD</span></Link>
                              <ul>
                                <li><Link to="/login">USD - US Dollar</Link></li>
                                <li><Link to="/wishlist">CAD - Canada Dollar</Link></li>
                                <li><Link to="/register">EUR - Euro</Link></li>
                                <li><Link to="/account">GBP - British Pound</Link></li>
                                <li><Link to="/wishlist">INR - Indian Rupee</Link></li>
                                <li><Link to="/wishlist">BDT - Bangladesh Taka</Link></li>
                                <li><Link to="/wishlist">JPY - Japan Yen</Link></li>
                                <li><Link to="/wishlist">AUD - Australian Dollar</Link></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="d-none">
                        {/* header-search-1 */}
                        <div className="header-search-wrap">
                          <div className="header-search-1">
                            <div className="search-icon">
                              <i className="icon-search  for-search-show" />
                              <i className="icon-cancel  for-search-close" />
                            </div>
                          </div>
                          <div className="header-search-1-form">
                            <form id="#" method="get" action="#">
                              <input type="text" name="search" defaultValue placeholder="Search here..." />
                              <button type="submit">
                                <span><i className="icon-search" /></span>
                              </button>
                            </form>
                          </div>
                        </div>
                      </li>
                      <li className="d-none">
                        {/* user-menu */}
                        <div className="ltn__drop-menu user-menu">
                          <ul>
                            <li>
                              <Link to="/#"><i className="icon-user" /></Link>
                              <ul>
                                <li><Link to="/login">Sign in</Link></li>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/account">My Account</Link></li>
                                <li><Link to="/wishlist">Wishlist</Link></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        {/* mini-cart 2 */}
                        <div className="mini-cart-icon mini-cart-icon-2">
                          <a href="#ltn__utilize-cart-menu" className="ltn__utilize-toggle">
                            <span className="mini-cart-icon">
                              <i className="icon-shopping-cart" />
                              <sup>2</sup>
                            </span>
                            <h6><span>Your Cart</span> <span className="ltn__secondary-color">$89.25</span></h6>
                          </a>
                        </div>
                      </li>
                      <li>
                        {/* Mobile Menu Button */}
                        <div className="mobile-menu-toggle d-lg-none">
                          <Link to="/#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                            <svg viewBox="0 0 800 600">
                              <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
                              <path d="M300,320 L540,320" id="middle" />
                              <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
                            </svg>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ltn__header-middle-area end */}
          {/* header-bottom-area start */}
          <div className="header-bottom-area ltn__border-top ltn__header-sticky  ltn__sticky-bg-white ltn__primary-bg---- menu-color-white---- d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col header-menu-column justify-content-center">
                  <div className="sticky-logo">
                    <div className="site-logo">
                      <Link to="/index"><img src="assets/img/logo.png" alt="Logo" /></Link>
                    </div>
                  </div>
                  <div className="header-menu header-menu-2">
                    <nav>
                      <div className="ltn__main-menu">
                        <ul>
                          <li className="menu-icon"><Link to="/">Home</Link></li>
                          <li className="menu-icon"><Link to="/about">About</Link>
                            <ul>
                              <li><Link to="/about">About</Link></li>
                              <li><Link to="/service">Services</Link></li>
                              <li><Link to="/service-details">Service Details</Link></li>
                              <li><Link to="/portfolio">Portfolio</Link></li>
                              <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                              <li><Link to="/team">Team</Link></li>
                              <li><Link to="/team-details">Team Details</Link></li>
                              <li><Link to="/faq">FAQ</Link></li>
                              <li><Link to="/locations">Google Map Locations</Link></li>
                            </ul>
                          </li>
                          <li className="menu-icon"><Link to="/shop">Property</Link>
                            <ul>
                              <li><Link to="/shop">Properties</Link></li>
                              <li><Link to="/product-details">Property details </Link></li>
                            </ul>
                          </li>
                          <li className="menu-icon"><Link to="/blog">News</Link>
                            <ul>
                              <li><Link to="/blog">News</Link></li>
                              <li><Link to="/blog-details">News details</Link></li>
                            </ul>
                          </li>
                          <li className="menu-icon"><Link to="/#">Pages</Link>
                            <ul className="mega-menu">
                              <li><Link to="/#">Inner Pages</Link>
                                <ul>
                                  <li><Link to="/portfolio">Portfolio</Link></li>
                                  <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                  <li><Link to="/team">Team</Link></li>
                                  <li><Link to="/team-details">Team Details</Link></li>
                                  <li><Link to="/faq">FAQ</Link></li>
                                </ul>
                              </li>
                              <li><Link to="/#">Inner Pages</Link>
                                <ul>
                                  <li><Link to="/history">History</Link></li>
                                  <li><Link to="/add-listing">Add Listing</Link></li>
                                  <li><Link to="/locations">Google Map Locations</Link></li>
                                  <li><Link to="*">404</Link></li>
                                  <li><Link to="/contact">Contact</Link></li>
                                  <li><Link to="/coming-soon">Coming Soon</Link></li>
                                </ul>
                              </li>
                              <li><Link to="/#">Shop Pages</Link>
                                <ul>
                                  <li><Link to="/shop">Shop</Link></li>
                                  <li><Link to="/product-details">Shop details </Link></li>
                                  <li><Link to="/cart">Cart</Link></li>
                                </ul>
                              </li>
                              <li><Link to="/shop"><img src="assets/img/banner/menu-banner-1.jpg" alt="#" /></Link>
                              </li>
                            </ul>
                          </li>
                          <li><Link to="/contact">Contact</Link></li>
                          <li className="menu-icon"><Link to="/shop">Shop</Link>
                            <ul>
                              <li><Link to="/cart">Cart</Link></li>
                              <li><Link to="/wishlist">Wishlist</Link></li>
                              <li><Link to="/checkout">Checkout</Link></li>
                              <li><Link to="/order-tracking">Order Tracking</Link></li>
                              <li><Link to="/account">My Account</Link></li>
                              <li><Link to="/login">Sign in</Link></li>
                              <li><Link to="/register">Register</Link></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header-bottom-area end */}
        </header>
        {/* HEADER AREA END */}
        {/* Utilize Cart Menu Start */}
        <div id="ltn__utilize-cart-menu" className="ltn__utilize ltn__utilize-cart-menu">
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <span className="ltn__utilize-menu-title">Cart</span>
              <button className="ltn__utilize-close">×</button>
            </div>
            <div className="mini-cart-product-area ltn__scrollbar">
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-img">
                  <Link to="/#"><img src="assets/img/product/1.png" alt="Imag" /></Link>
                  <span className="mini-cart-item-delete"><i className="icon-cancel" /></span>
                </div>
                <div className="mini-cart-info">
                  <h6><Link to="/#">Wheel Bearing Retainer</Link></h6>
                  <span className="mini-cart-quantity">1 x $65.00</span>
                </div>
              </div>
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-img">
                  <Link to="/#"><img src="assets/img/product/2.png" alt="Imag" /></Link>
                  <span className="mini-cart-item-delete"><i className="icon-cancel" /></span>
                </div>
                <div className="mini-cart-info">
                  <h6><Link to="/#">3 Rooms Manhattan</Link></h6>
                  <span className="mini-cart-quantity">1 x $85.00</span>
                </div>
              </div>
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-img">
                  <Link to="/#"><img src="assets/img/product/3.png" alt="Imag" /></Link>
                  <span className="mini-cart-item-delete"><i className="icon-cancel" /></span>
                </div>
                <div className="mini-cart-info">
                  <h6><Link to="/#">OE Replica Wheels</Link></h6>
                  <span className="mini-cart-quantity">1 x $92.00</span>
                </div>
              </div>
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-img">
                  <Link to="/#"><img src="assets/img/product/4.png" alt="Imag" /></Link>
                  <span className="mini-cart-item-delete"><i className="icon-cancel" /></span>
                </div>
                <div className="mini-cart-info">
                  <h6><Link to="/#">Shock Mount Insulator</Link></h6>
                  <span className="mini-cart-quantity">1 x $68.00</span>
                </div>
              </div>
            </div>
            <div className="mini-cart-footer">
              <div className="mini-cart-sub-total">
                <h5>Subtotal: <span>$310.00</span></h5>
              </div>
              <div className="btn-wrapper">
                <Link to="/cart" className="theme-btn-1 btn btn-effect-1">View Cart</Link>
                <Link to="/cart" className="theme-btn-2 btn btn-effect-2">Checkout</Link>
              </div>
              <p>Free Shipping on All Orders Over $100!</p>
            </div>
          </div>
        </div>
        {/* Utilize Cart Menu End */}
        {/* Utilize Mobile Menu Start */}
        <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <div className="site-logo">
                <Link to="/index"><img src="assets/img/logo.png" alt="Logo" /></Link>
              </div>
              <button className="ltn__utilize-close">×</button>
            </div>
            <div className="ltn__utilize-menu-search-form">
              <form action="#">
                <input type="text" placeholder="Search..." />
                <button><i className="fas fa-search" /></button>
              </form>
            </div>
            <div className="ltn__utilize-menu">
              <ul>
                <li><Link to="/#">Home</Link>
                  <ul className="sub-menu">
                    <li><Link to="/index">Home Style 01</Link></li>
                    <li><Link to="/index-2">Home Style 02</Link></li>
                    <li><Link to="/index-3">Home Style 03</Link></li>
                    <li><Link to="/index-4">Home Style 04</Link></li>
                    <li><Link to="/index-5">Home Style 05  <span className="menu-item-badge">video</span></Link></li>
                    <li><Link to="/index-6">Home Style 06</Link></li>
                    <li><Link to="/index-7">Home Style 07</Link></li>
                    <li><Link to="/index-8">Home Style 08</Link></li>
                    <li><Link to="/index-9">Home Style 09</Link></li>
                    <li><Link to="/index-10">Home Style 10 <span className="menu-item-badge">Map</span></Link></li>
                    <li><Link to="/index-11">Home Style 11</Link></li>
                  </ul>
                </li>
                <li><Link to="/#">About</Link>
                  <ul className="sub-menu">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><Link to="/service-details">Service Details</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/portfolio-2">Portfolio - 02</Link></li>
                    <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/team-details">Team Details</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/locations">Google Map Locations</Link></li>
                  </ul>
                </li>
                <li><Link to="/#">Property</Link>
                  <ul className="sub-menu">
                    <li><Link to="/shop">Property Grid</Link></li>
                    <li><Link to="/shop-list">Property List</Link></li>
                    <li><Link to="/shop-grid">Property No Sidebar</Link></li>
                    <li><Link to="/shop-left-sidebar">Property Left sidebar</Link></li>
                    <li><Link to="/shop-right-sidebar">Property right sidebar</Link></li>
                    <li><Link to="/product-details">Property details </Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/wishlist">Wishlist</Link></li>
                    <li><Link to="/checkout">Checkout</Link></li>
                    <li><Link to="/order-tracking">Order Tracking</Link></li>
                    <li><Link to="/account">My Account</Link></li>
                    <li><Link to="/login">Sign in</Link></li>
                    <li><Link to="/register">Register</Link></li>
                  </ul>
                </li>
                <li><Link to="/#">News</Link>
                  <ul className="sub-menu">
                    <li><Link to="/blog">News</Link></li>
                    <li><Link to="/blog-grid">News Grid</Link></li>
                    <li><Link to="/blog-left-sidebar">News Left sidebar</Link></li>
                    <li><Link to="/blog-right-sidebar">News Right sidebar</Link></li>
                    <li><Link to="/blog-details">News details</Link></li>
                  </ul>
                </li>
                <li><Link to="/#">Pages</Link>
                  <ul className="sub-menu">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><Link to="/service-details">Service Details</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/portfolio-2">Portfolio - 02</Link></li>
                    <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/team-details">Team Details</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/history">History</Link></li>
                    <li><Link to="/add-listing">Add Listing</Link></li>
                    <li><Link to="/locations">Google Map Locations</Link></li>
                    <li><Link to="/404">404</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/coming-soon">Coming Soon</Link></li>
                  </ul>
                </li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
              <ul>
                <li>
                  <Link to="/account" title="My Account">
                    <span className="utilize-btn-icon">
                      <i className="far fa-user" />
                    </span>
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" title="Wishlist">
                    <span className="utilize-btn-icon">
                      <i className="far fa-heart" />
                      <sup>3</sup>
                    </span>
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="/cart" title="Shoping Cart">
                    <span className="utilize-btn-icon">
                      <i className="fas fa-shopping-cart" />
                      <sup>5</sup>
                    </span>
                    Shoping Cart
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ltn__social-media-2">
              <ul>
                <li><Link to="/#" title="Facebook"><i className="fab fa-facebook-f" /></Link></li>
                <li><Link to="/#" title="Twitter"><i className="fab fa-twitter" /></Link></li>
                <li><Link to="/#" title="Linkedin"><i className="fab fa-linkedin" /></Link></li>
                <li><Link to="/#" title="Instagram"><i className="fab fa-instagram" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Utilize Mobile Menu End */}
      </div>


    </div>
  )
}

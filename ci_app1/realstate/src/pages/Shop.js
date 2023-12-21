import React from 'react'
import { Link } from 'react-router-dom'


export default function Shop() {
  return (
    <>
          {/* BREADCRUMB AREA START */}
          <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="ltn__breadcrumb-inner">
                              <h1 className="page-title">Property</h1>
                              <div className="ltn__breadcrumb-list">
                                  <ul>
                                      <li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
                                      <li>Property</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* BREADCRUMB AREA END */}

 {/* PRODUCT DETAILS AREA START */}
<div className="ltn__product-area ltn__product-gutter mb-120">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="ltn__shop-options">
          <ul className="justify-content-start">
            <li>
              <div className="ltn__grid-list-tab-menu ">
                <div className="nav">
                  <Link className="active show" data-bs-toggle="tab" href="#liton_product_grid"><i className="fas fa-th-large" /></Link>
                  <Link data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></Link>
                </div>
              </div>
            </li>
            <li className="d-none">
              <div className="showing-product-number text-right">
                <span>Showing 1–12 of 18 results</span>
              </div> 
            </li>
            <li>
              <div className="short-by text-center">
                <select className="nice-select">
                  <option>Default Sorting</option>
                  <option>Sort by popularity</option>
                  <option>Sort by new arrivals</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>
              </div> 
            </li>
            <li>
              <div className="short-by text-center">
                <select className="nice-select">
                  <option>Per Page: 12</option>
                  <option>Per Page: 20</option>
                  <option>Per Page: 30</option>
                  <option>Per Page: 50</option>
                  <option>Per Page: 100</option>
                </select>
              </div> 
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="liton_product_grid">
            <div className="ltn__product-tab-content-inner ltn__product-grid-view">
              <div className="row">
                <div className="col-lg-12">
                  {/* Search Widget */}
                  <div className="ltn__search-widget mb-30">
                    <form action="#">
                      <input type="text" name="search" placeholder="Search your keyword..." />
                      <button type="submit"><i className="fas fa-search" /></button>
                    </form>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-xl-6 col-sm-6 col-12">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                    <div className="product-img">
                      <Link to="/product-details"><img src="assets/img/product-3/1.jpg" alt="#" /></Link>
                      <div className="real-estate-agent">
                        <div className="agent-img">
                          <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                        </div>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badg">For Rent</li>
                        </ul>
                      </div>
                      <h2 className="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <Link to="/locations"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><span>3 </span>
                          Bed
                        </li>
                        <li><span>2 </span>
                          Bath
                        </li>
                        <li><span>3450 </span>
                          Square Ft
                        </li>
                      </ul>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                              <i className="flaticon-expand" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                              <i className="flaticon-heart-1" /></Link>
                          </li>
                          <li>
                            <Link to="/product-details" title="Product Details">
                              <i className="flaticon-add" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info-bottom">
                      <div className="product-price">
                        <span>$34,900<label>/Month</label></span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-xl-6 col-sm-6 col-12">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                    <div className="product-img">
                      <Link to="/product-details"><img src="assets/img/product-3/2.jpg" alt="#" /></Link>
                      <div className="real-estate-agent">
                        <div className="agent-img">
                          <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                        </div>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badg">For Sale</li>
                        </ul>
                      </div>
                      <h2 className="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <Link to="/locations"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><span>3 </span>
                          Bed
                        </li>
                        <li><span>2 </span>
                          Bath
                        </li>
                        <li><span>3450 </span>
                          Square Ft
                        </li>
                      </ul>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                              <i className="flaticon-expand" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                              <i className="flaticon-heart-1" /></Link>
                          </li>
                          <li>
                            <Link to="/product-details" title="Product Details">
                              <i className="flaticon-add" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info-bottom">
                      <div className="product-price">
                        <span>$34,900<label>/Month</label></span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-xl-6 col-sm-6 col-12">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                    <div className="product-img">
                      <Link to="/product-details"><img src="assets/img/product-3/3.jpg" alt="#" /></Link>
                      <div className="real-estate-agent">
                        <div className="agent-img">
                          <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                        </div>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badg">For Rent</li>
                        </ul>
                      </div>
                      <h2 className="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <Link to="/locations"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><span>3 </span>
                          Bed
                        </li>
                        <li><span>2 </span>
                          Bath
                        </li>
                        <li><span>3450 </span>
                          Square Ft
                        </li>
                      </ul>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                              <i className="flaticon-expand" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                              <i className="flaticon-heart-1" /></Link>
                          </li>
                          <li>
                            <Link to="/product-details" title="Product Details">
                              <i className="flaticon-add" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info-bottom">
                      <div className="product-price">
                        <span>$34,900<label>/Month</label></span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-xl-6 col-sm-6 col-12">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                    <div className="product-img">
                      <Link to="/product-details"><img src="assets/img/product-3/4.jpg" alt="#" /></Link>
                      <div className="real-estate-agent">
                        <div className="agent-img">
                          <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                        </div>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badg">For Rent</li>
                        </ul>
                      </div>
                      <h2 className="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <Link to="/locations"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><span>3 </span>
                          Bed
                        </li>
                        <li><span>2 </span>
                          Bath
                        </li>
                        <li><span>3450 </span>
                          Square Ft
                        </li>
                      </ul>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                              <i className="flaticon-expand" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                              <i className="flaticon-heart-1" /></Link>
                          </li>
                          <li>
                            <Link to="/product-details" title="Product Details">
                              <i className="flaticon-add" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info-bottom">
                      <div className="product-price">
                        <span>$34,900<label>/Month</label></span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-xl-6 col-sm-6 col-12">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                    <div className="product-img">
                      <Link to="/product-details"><img src="assets/img/product-3/5.jpg" alt="#" /></Link>
                      <div className="real-estate-agent">
                        <div className="agent-img">
                          <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                        </div>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badg">For Rent</li>
                        </ul>
                      </div>
                      <h2 className="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <Link to="/locations"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><span>3 </span>
                          Bed
                        </li>
                        <li><span>2 </span>
                          Bath
                        </li>
                        <li><span>3450 </span>
                          Square Ft
                        </li>
                      </ul>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                              <i className="flaticon-expand" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                              <i className="flaticon-heart-1" /></Link>
                          </li>
                          <li>
                            <Link to="/product-details" title="Product Details">
                              <i className="flaticon-add" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info-bottom">
                      <div className="product-price">
                        <span>$34,900<label>/Month</label></span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-xl-6 col-sm-6 col-12">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                    <div className="product-img">
                      <Link to="/product-details"><img src="assets/img/product-3/6.jpg" alt="#" /></Link>
                      <div className="real-estate-agent">
                        <div className="agent-img">
                          <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                        </div>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-badge">
                        <ul>
                          <li className="sale-badg">For Rent</li>
                        </ul>
                      </div>
                      <h2 className="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <Link to="/locations"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><span>3 </span>
                          Bed
                        </li>
                        <li><span>2 </span>
                          Bath
                        </li>
                        <li><span>3450 </span>
                          Square Ft
                        </li>
                      </ul>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                              <i className="flaticon-expand" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                              <i className="flaticon-heart-1" /></Link>
                          </li>
                          <li>
                            <Link to="/product-details" title="Product Details">
                              <i className="flaticon-add" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-info-bottom">
                      <div className="product-price">
                        <span>$34,900<label>/Month</label></span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="liton_product_list">
            <div className="ltn__product-tab-content-inner ltn__product-list-view">
              <div className="row">
                <div className="col-lg-12">
                  {/* Search Widget */}
                  <div className="ltn__search-widget mb-30">
                    <form action="#">
                      <input type="text" name="search" placeholder="Search your keyword..." />
                      <button type="submit"><i className="fas fa-search" /></button>
                    </form>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-lg-12">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                    <div className="product-img">
                      <Link to="/product-details"><img src="assets/img/product-3/1.jpg" alt="#" /></Link>
                    </div>
                    <div className="product-info">
                      <div className="product-badge-price">
                        <div className="product-badge">
                          <ul>
                            <li className="sale-badg">For Rent</li>
                          </ul>
                        </div>
                        <div className="product-price">
                          <span>$34,900<label>/Month</label></span>
                        </div>
                      </div>
                      <h2 className="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <Link to="/locations"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><span>3 </span>
                          Bed
                        </li>
                        <li><span>2 </span>
                          Bath
                        </li>
                        <li><span>3450 </span>
                          Square Ft
                        </li>
                      </ul>
                    </div>
                    <div className="product-info-bottom">
                      <div className="real-estate-agent">
                        <div className="agent-img">
                          <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                        </div>
                        <div className="agent-brief">
                          <h6><Link to="/team-details">William Seklo</Link></h6>
                          <small>Estate Agents</small>
                        </div>
                      </div>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                              <i className="flaticon-expand" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                              <i className="flaticon-heart-1" /></Link>
                          </li>
                          <li>
                            <Link to="/product-details" title="Product Details">
                              <i className="flaticon-add" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-lg-12">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                    <div className="product-img">
                      <Link to="/product-details"><img src="assets/img/product-3/2.jpg" alt="#" /></Link>
                    </div>
                    <div className="product-info">
                      <div className="product-badge-price">
                        <div className="product-badge">
                          <ul>
                            <li className="sale-badg">For Rent</li>
                          </ul>
                        </div>
                        <div className="product-price">
                          <span>$34,900<label>/Month</label></span>
                        </div>
                      </div>
                      <h2 className="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <Link to="/locations"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><span>3 </span>
                          Bed
                        </li>
                        <li><span>2 </span>
                          Bath
                        </li>
                        <li><span>3450 </span>
                          Square Ft
                        </li>
                      </ul>
                    </div>
                    <div className="product-info-bottom">
                      <div className="real-estate-agent">
                        <div className="agent-img">
                          <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                        </div>
                        <div className="agent-brief">
                          <h6><Link to="/team-details">William Seklo</Link></h6>
                          <small>Estate Agents</small>
                        </div>
                      </div>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                              <i className="flaticon-expand" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                              <i className="flaticon-heart-1" /></Link>
                          </li>
                          <li>
                            <Link to="/product-details" title="Product Details">
                              <i className="flaticon-add" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-lg-12">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                    <div className="product-img">
                      <Link to="/product-details"><img src="assets/img/product-3/3.jpg" alt="#" /></Link>
                    </div>
                    <div className="product-info">
                      <div className="product-badge-price">
                        <div className="product-badge">
                          <ul>
                            <li className="sale-badg">For Rent</li>
                          </ul>
                        </div>
                        <div className="product-price">
                          <span>$34,900<label>/Month</label></span>
                        </div>
                      </div>
                      <h2 className="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <Link to="/locations"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><span>3 </span>
                          Bed
                        </li>
                        <li><span>2 </span>
                          Bath
                        </li>
                        <li><span>3450 </span>
                          Square Ft
                        </li>
                      </ul>
                    </div>
                    <div className="product-info-bottom">
                      <div className="real-estate-agent">
                        <div className="agent-img">
                          <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                        </div>
                        <div className="agent-brief">
                          <h6><Link to="/team-details">William Seklo</Link></h6>
                          <small>Estate Agents</small>
                        </div>
                      </div>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                              <i className="flaticon-expand" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                              <i className="flaticon-heart-1" /></Link>
                          </li>
                          <li>
                            <Link to="/product-details" title="Product Details">
                              <i className="flaticon-add" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-lg-12">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                    <div className="product-img">
                      <Link to="/product-details"><img src="assets/img/product-3/4.jpg" alt="#" /></Link>
                    </div>
                    <div className="product-info">
                      <div className="product-badge-price">
                        <div className="product-badge">
                          <ul>
                            <li className="sale-badg">For Rent</li>
                          </ul>
                        </div>
                        <div className="product-price">
                          <span>$34,900<label>/Month</label></span>
                        </div>
                      </div>
                      <h2 className="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <Link to="/locations"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><span>3 </span>
                          Bed
                        </li>
                        <li><span>2 </span>
                          Bath
                        </li>
                        <li><span>3450 </span>
                          Square Ft
                        </li>
                      </ul>
                    </div>
                    <div className="product-info-bottom">
                      <div className="real-estate-agent">
                        <div className="agent-img">
                          <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                        </div>
                        <div className="agent-brief">
                          <h6><Link to="/team-details">William Seklo</Link></h6>
                          <small>Estate Agents</small>
                        </div>
                      </div>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                              <i className="flaticon-expand" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                              <i className="flaticon-heart-1" /></Link>
                          </li>
                          <li>
                            <Link to="/product-details" title="Product Details">
                              <i className="flaticon-add" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ltn__product-item */}
                <div className="col-lg-12">
                  <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
                    <div className="product-img">
                      <Link to="/product-details"><img src="assets/img/product-3/5.jpg" alt="#" /></Link>
                    </div>
                    <div className="product-info">
                      <div className="product-badge-price">
                        <div className="product-badge">
                          <ul>
                            <li className="sale-badg">For Rent</li>
                          </ul>
                        </div>
                        <div className="product-price">
                          <span>$34,900<label>/Month</label></span>
                        </div>
                      </div>
                      <h2 className="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
                      <div className="product-img-location">
                        <ul>
                          <li>
                            <Link to="/locations"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
                          </li>
                        </ul>
                      </div>
                      <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                        <li><span>3 </span>
                          Bed
                        </li>
                        <li><span>2 </span>
                          Bath
                        </li>
                        <li><span>3450 </span>
                          Square Ft
                        </li>
                      </ul>
                    </div>
                    <div className="product-info-bottom">
                      <div className="real-estate-agent">
                        <div className="agent-img">
                          <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                        </div>
                        <div className="agent-brief">
                          <h6><Link to="/team-details">William Seklo</Link></h6>
                          <small>Estate Agents</small>
                        </div>
                      </div>
                      <div className="product-hover-action">
                        <ul>
                          <li>
                            <Link to="/#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                              <i className="flaticon-expand" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                              <i className="flaticon-heart-1" /></Link>
                          </li>
                          <li>
                            <Link to="/product-details" title="Product Details">
                              <i className="flaticon-add" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
        <div className="ltn__pagination-area text-center">
          <div className="ltn__pagination">
            <ul>
              <li><Link to="/#"><i className="fas fa-angle-double-left" /></Link></li>
              <li><Link to="/#">1</Link></li>
              <li className="active"><Link to="/#">2</Link></li>
              <li><Link to="/#">3</Link></li>
              <li><Link to="/#">...</Link></li>
              <li><Link to="/#">10</Link></li>
              <li><Link to="/#"><i className="fas fa-angle-double-right" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
          <h3 className="mb-10">Advance Information</h3>
          <label className="mb-30"><small>About 9,620 results (0.62 seconds) </small></label>
          {/* Advance Information widget */}
          <div className="widget ltn__menu-widget">
            <h4 className="ltn__widget-title">Property Type</h4>
            <ul>
              <li>
                <Link to="/shop-right-sidebar">
                  <label className="checkbox-item">House
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                  <span className="categorey-no">3,924</span>
                </Link>
              </li>
              <li>
                <label className="checkbox-item">Single Family
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">3,610</span>
              </li>
              <li>
                <label className="checkbox-item">Apartment
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">2,912</span>
              </li>
              <li>
                <label className="checkbox-item">Office Villa
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">2,687</span>
              </li>
              <li>
                <label className="checkbox-item">Luxary Home
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">1,853</span>
              </li>
              <li>
                <label className="checkbox-item">Studio
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">893</span>
              </li>
            </ul>
            <hr />
            <h4 className="ltn__widget-title">Amenities</h4>
            <ul>
              <li>
                <label className="checkbox-item">Dishwasher
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">3,924</span>
              </li>
              <li>
                <label className="checkbox-item">Floor Coverings
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">3,610</span>
              </li>
              <li>
                <label className="checkbox-item">Internet
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">2,912</span>
              </li>
              <li>
                <label className="checkbox-item">Build Wardrobes
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">2,687</span>
              </li>
              <li>
                <label className="checkbox-item">Supermarket
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">1,853</span>
              </li>
              <li>
                <label className="checkbox-item">Kids Zone
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">893</span>
              </li>
            </ul>
            <hr />
            <h4 className="ltn__widget-title">Price Renge</h4>
            <ul>
              <li>
                <label className="checkbox-item">Low Budget
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">$5,000 - $10,000</span>
              </li>
              <li>
                <label className="checkbox-item">Medium
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">$10,000 - $30,000</span>
              </li>
              <li>
                <label className="checkbox-item">High Budget
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">$30,000 Up</span>
              </li>
            </ul>
            <hr />
            {/* Price Filter Widget */}
            <div className="widget--- ltn__price-filter-widget">
              <h4 className="ltn__widget-title ltn__widget-title-border---">Filter by price</h4>
              <div className="price_filter">
                <div className="price_slider_amount">
                  <input type="submit" defaultValue="Your range:" /> 
                  <input type="text" className="amount" name="price" placeholder="Add Your Price" /> 
                </div>
                <div className="slider-range" />
              </div>
            </div>
            <hr />
            <h4 className="ltn__widget-title">Bed/bath</h4>
            <ul>
              <li>
                <label className="checkbox-item">Single
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">3,924</span>
              </li>
              <li>
                <label className="checkbox-item">Double
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">3,610</span>
              </li>
              <li>
                <label className="checkbox-item">Up To 3
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">2,912</span>
              </li>
              <li>
                <label className="checkbox-item">Up To 5
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">2,687</span>
              </li>
            </ul>
            <hr />
            <h4 className="ltn__widget-title">Catagory</h4>
            <ul>
              <li>
                <label className="checkbox-item">Buying
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">3,924</span>
              </li>
              <li>
                <label className="checkbox-item">Renting
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">3,610</span>
              </li>
              <li>
                <label className="checkbox-item">Selling
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
                <span className="categorey-no">2,912</span>
              </li>
            </ul>
          </div>
          {/* Category Widget */}
          <div className="widget ltn__menu-widget d-none">
            <h4 className="ltn__widget-title ltn__widget-title-border">Product categories</h4>
            <ul>
              <li><Link to="/#">Body <span><i className="fas fa-long-arrow-alt-right" /></span></Link></li>
              <li><Link to="/#">Interior <span><i className="fas fa-long-arrow-alt-right" /></span></Link></li>
              <li><Link to="/#">Lights <span><i className="fas fa-long-arrow-alt-right" /></span></Link></li>
              <li><Link to="/#">Parts <span><i className="fas fa-long-arrow-alt-right" /></span></Link></li>
              <li><Link to="/#">Tires <span><i className="fas fa-long-arrow-alt-right" /></span></Link></li>
              <li><Link to="/#">Uncategorized <span><i className="fas fa-long-arrow-alt-right" /></span></Link></li>
              <li><Link to="/#">Wheel <span><i className="fas fa-long-arrow-alt-right" /></span></Link></li>
            </ul>
          </div>
          {/* Price Filter Widget */}
          <div className="widget ltn__price-filter-widget d-none">
            <h4 className="ltn__widget-title ltn__widget-title-border">Filter by price</h4>
            <div className="price_filter">
              <div className="price_slider_amount">
                <input type="submit" defaultValue="Your range:" /> 
                <input type="text" className="amount" name="price" placeholder="Add Your Price" /> 
              </div>
              <div className="slider-range" />
            </div>
          </div>
          {/* Top Rated Product Widget */}
          <div className="widget ltn__top-rated-product-widget d-none">
            <h4 className="ltn__widget-title ltn__widget-title-border">Top Rated Product</h4>
            <ul>
              <li>
                <div className="top-rated-product-item clearfix">
                  <div className="top-rated-product-img">
                    <Link to="/product-details"><img src="assets/img/product/1.png" alt="#" /></Link>
                  </div>
                  <div className="top-rated-product-info">
                    <div className="product-ratting">
                      <ul>
                        <li><Link to="/#"><i className="fas fa-star" /></Link></li>
                        <li><Link to="/#"><i className="fas fa-star" /></Link></li>
                        <li><Link to="/#"><i className="fas fa-star" /></Link></li>
                        <li><Link to="/#"><i className="fas fa-star" /></Link></li>
                        <li><Link to="/#"><i className="fas fa-star" /></Link></li>
                      </ul>
                    </div>
                    <h6><Link to="/product-details">Mixel Solid Seat Cover</Link></h6>
                    <div className="product-price">
                      <span>$49.00</span>
                      <del>$65.00</del>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="top-rated-product-item clearfix">
                  <div className="top-rated-product-img">
                    <Link to="/product-details"><img src="assets/img/product/2.png" alt="#" /></Link>
                  </div>
                  <div className="top-rated-product-info">
                    <div className="product-ratting">
                      <ul>
                        <li><Link to="/#"><i className="fas fa-star" /></Link></li>
                        <li><Link to="/#"><i className="fas fa-star" /></Link></li>
                        <li><Link to="/#"><i className="fas fa-star" /></Link></li>
                        <li><Link to="/#"><i className="fas fa-star" /></Link></li>
                        <li><Link to="/#"><i className="fas fa-star" /></Link></li>
                      </ul>
                    </div>
                    <h6><Link to="/product-details">3 Rooms Manhattan</Link></h6>
                    <div className="product-price">
                      <span>$49.00</span>
                      <del>$65.00</del>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="top-rated-product-item clearfix">
                  <div className="top-rated-product-img">
                    <Link to="/product-details"><img src="assets/img/product/3.png" alt="#" /></Link>
                  </div>
                  <div className="top-rated-product-info">
                    <div className="product-ratting">
                      <ul>
                        <li><Link to="/#"><i className="fas fa-star" /></Link></li>
                        <li><Link to="/#"><i className="fas fa-star" /></Link></li>
                        <li><Link to="/#"><i className="fas fa-star" /></Link></li>
                        <li><Link to="/#"><i className="fas fa-star-half-alt" /></Link></li>
                        <li><Link to="/#"><i className="far fa-star" /></Link></li>
                      </ul>
                    </div>
                    <h6><Link to="/product-details">Coil Spring Conversion</Link></h6>
                    <div className="product-price">
                      <span>$49.00</span>
                      <del>$65.00</del>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* Search Widget */}
          <div className="widget ltn__search-widget d-none">
            <h4 className="ltn__widget-title ltn__widget-title-border">Search Objects</h4>
            <form action="#">
              <input type="text" name="search" placeholder="Search your keyword..." />
              <button type="submit"><i className="fas fa-search" /></button>
            </form>
          </div>
          {/* Tagcloud Widget */}
          <div className="widget ltn__tagcloud-widget d-none">
            <h4 className="ltn__widget-title ltn__widget-title-border">Popular Tags</h4>
            <ul>
              <li><Link to="/#">Popular</Link></li>
              <li><Link to="/#">desgin</Link></li>
              <li><Link to="/#">ux</Link></li>
              <li><Link to="/#">usability</Link></li>
              <li><Link to="/#">develop</Link></li>
              <li><Link to="/#">icon</Link></li>
              <li><Link to="/#">Car</Link></li>
              <li><Link to="/#">Service</Link></li>
              <li><Link to="/#">Repairs</Link></li>
              <li><Link to="/#">Auto Parts</Link></li>
              <li><Link to="/#">Oil</Link></li>
              <li><Link to="/#">Dealer</Link></li>
              <li><Link to="/#">Oil Change</Link></li>
              <li><Link to="/#">Body Color</Link></li>
            </ul>
          </div>
          {/* Size Widget */}
          <div className="widget ltn__tagcloud-widget ltn__size-widget d-none">
            <h4 className="ltn__widget-title ltn__widget-title-border">Product Size</h4>
            <ul>
              <li><Link to="/#">S</Link></li>
              <li><Link to="/#">M</Link></li>
              <li><Link to="/#">L</Link></li>
              <li><Link to="/#">XL</Link></li>
              <li><Link to="/#">XXL</Link></li>
            </ul>
          </div>
          {/* Color Widget */}
          <div className="widget ltn__color-widget d-none">
            <h4 className="ltn__widget-title ltn__widget-title-border">Product Color</h4>
            <ul>
              <li className="black"><Link to="/#" /></li>
              <li className="white"><Link to="/#" /></li>
              <li className="red"><Link to="/#" /></li>
              <li className="silver"><Link to="/#" /></li>
              <li className="gray"><Link to="/#" /></li>
              <li className="maroon"><Link to="/#" /></li>
              <li className="yellow"><Link to="/#" /></li>
              <li className="olive"><Link to="/#" /></li>
              <li className="lime"><Link to="/#" /></li>
              <li className="green"><Link to="/#" /></li>
              <li className="aqua"><Link to="/#" /></li>
              <li className="teal"><Link to="/#" /></li>
              <li className="blue"><Link to="/#" /></li>
              <li className="navy"><Link to="/#" /></li>
              <li className="fuchsia"><Link to="/#" /></li>
              <li className="purple"><Link to="/#" /></li>
              <li className="pink"><Link to="/#" /></li>
              <li className="nude"><Link to="/#" /></li>
              <li className="orange"><Link to="/#" /></li>
              <li><Link to="/#" className="orange" /></li>
              <li><Link to="/#" className="orange" /></li>
            </ul>
          </div>
          {/* Banner Widget */}
          <div className="widget ltn__banner-widget d-none">
            <Link to="/shop"><img src="assets/img/banner/banner-2.jpg" alt="#" /></Link>
          </div>
        </aside>
      </div>
    </div>
  </div>
</div>
{/* PRODUCT DETAILS AREA END */}
    
    </>
  )
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carosel from "../components/Carosel";
import axios from "axios";
import Product from "../components/Product";

export default function Home() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, [product]);
  // console.log(product)
  const getProduct = () => {
    axios
      .get("http://localhost:8080/allproducts", { crossdomain: true })
      .then((res) => setProduct(res.data));
  };
  return (
    <>
      <div>
        <Carosel></Carosel>
        {/* BANNER AREA START ( Banner - 4 ) */}
        <div className="ltn__banner-area pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    Property
                  </h6>
                  <h1 className="section-title">Property By Categories</h1>
                </div>
              </div>
            </div>
            <div className="row">
              {product.map((item) => (
                <div className="col-lg-4 col-md-6">
                  <Product data={item}></Product>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* BANNER AREA END */}
        {/* APARTMENTS PLAN AREA START */}
        <div className="ltn__apartments-plan-area pt-90 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center">
                  <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                    Apartment Sketch
                  </h6>
                  <h1 className="section-title">Apartments Plan</h1>
                </div>
                <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
                  <div className="nav">
                    <Link data-bs-toggle="tab" to="/#liton_tab_3_1">
                      The Studio
                    </Link>
                    <Link
                      className="active show"
                      data-bs-toggle="tab"
                      to="/#liton_tab_3_2"
                    >
                      Deluxe Portion
                    </Link>
                    <Link data-bs-toggle="tab" to="/#liton_tab_3_3" className>
                      Penthouse
                    </Link>
                    <Link data-bs-toggle="tab" to="/#liton_tab_3_4" className>
                      Top Garden
                    </Link>
                    <Link data-bs-toggle="tab" to="/#liton_tab_3_5" className>
                      Double Height
                    </Link>
                  </div>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade" id="liton_tab_3_1">
                    <div className="ltn__apartments-tab-content-inner">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                            <h2>The Studio</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>{" "}
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label> <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label> <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>{" "}
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label> <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="apartments-plan-img">
                            <img src="assets/img/others/10.png" alt="#" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade active show" id="liton_tab_3_2">
                    <div className="ltn__product-tab-content-inner">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                            <h2>Deluxe Portion</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>{" "}
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label> <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label> <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>{" "}
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label> <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="apartments-plan-img">
                            <img src="assets/img/others/10.png" alt="#" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="liton_tab_3_3">
                    <div className="ltn__product-tab-content-inner">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                            <h2>Penthouse</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>{" "}
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label> <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label> <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>{" "}
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label> <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="apartments-plan-img">
                            <img src="assets/img/others/10.png" alt="#" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="liton_tab_3_4">
                    <div className="ltn__product-tab-content-inner">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                            <h2>Top Garden</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>{" "}
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label> <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label> <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>{" "}
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label> <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="apartments-plan-img">
                            <img src="assets/img/others/10.png" alt="#" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="liton_tab_3_5">
                    <div className="ltn__product-tab-content-inner">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                            <h2>Double Height</h2>
                            <p>
                              Enimad minim veniam quis nostrud exercitation
                              ullamco laboris. Lorem ipsum dolor sit amet cons
                              aetetur adipisicing elit sedo eiusmod
                              tempor.Incididunt labore et dolore magna aliqua.
                              sed ayd minim veniam.
                            </p>
                            <div className="apartments-info-list apartments-info-list-color mt-40">
                              <ul>
                                <li>
                                  <label>Total Area</label>{" "}
                                  <span>2800 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bedroom</label> <span>150 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Bathroom</label> <span>45 Sq. Ft</span>
                                </li>
                                <li>
                                  <label>Belcony/Pets</label>{" "}
                                  <span>Allowed</span>
                                </li>
                                <li>
                                  <label>Lounge</label> <span>650 Sq. Ft</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="apartments-plan-img">
                            <img src="assets/img/others/10.png" alt="#" />
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
        {/* APARTMENTS PLAN AREA END */}
        {/* SEARCH BY PLACE AREA START (testimonial-7) */}
        <div
          className="ltn__search-by-place-area before-bg-top bg-image-top--- pt-115 pb-70"
          data-bs-bg="assets/img/bg/20.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center---">
                  <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                    Area Properties
                  </h6>
                  <h1 className="section-title">
                    Find Your Dream House <br />
                    Search By Area
                  </h1>
                </div>
              </div>
            </div>
            <div className="row ltn__search-by-place-slider-1-active slick-arrow-1">
              <div className="col-lg-4">
                <div className="ltn__search-by-place-item">
                  <div className="search-by-place-img">
                    <Link to="/product-details">
                      <img src="assets/img/product-3/1.jpg" alt="#" />
                    </Link>
                    <div className="search-by-place-badge">
                      <ul>
                        <li>2 Properties</li>
                      </ul>
                    </div>
                  </div>
                  <div className="search-by-place-info">
                    <h6>
                      <Link to="/locations">San Francisco</Link>
                    </h6>
                    <h4>
                      <Link to="/product-details">Mission District Area</Link>
                    </h4>
                    <div className="search-by-place-btn">
                      <Link to="/product-details">
                        View Property <i className="flaticon-right-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ltn__search-by-place-item">
                  <div className="search-by-place-img">
                    <Link to="/product-details">
                      <img src="assets/img/product-3/2.jpg" alt="#" />
                    </Link>
                    <div className="search-by-place-badge">
                      <ul>
                        <li>5 Properties</li>
                      </ul>
                    </div>
                  </div>
                  <div className="search-by-place-info">
                    <h6>
                      <Link to="/locations">New York</Link>
                    </h6>
                    <h4>
                      <Link to="/product-details">Pacific Heights Area</Link>
                    </h4>
                    <div className="search-by-place-btn">
                      <Link to="/product-details">
                        View Property <i className="flaticon-right-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ltn__search-by-place-item">
                  <div className="search-by-place-img">
                    <Link to="/product-details">
                      <img src="assets/img/product-3/3.jpg" alt="#" />
                    </Link>
                    <div className="search-by-place-badge">
                      <ul>
                        <li>9 Properties</li>
                      </ul>
                    </div>
                  </div>
                  <div className="search-by-place-info">
                    <h6>
                      <Link to="/locations">Sedona, Arizona</Link>
                    </h6>
                    <h4>
                      <Link to="/product-details">Noe Valley Zones</Link>
                    </h4>
                    <div className="search-by-place-btn">
                      <Link to="/product-details">
                        View Property <i className="flaticon-right-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ltn__search-by-place-item">
                  <div className="search-by-place-img">
                    <Link to="/product-details">
                      <img src="assets/img/product-3/2.jpg" alt="#" />
                    </Link>
                    <div className="search-by-place-badge">
                      <ul>
                        <li>5 Properties</li>
                      </ul>
                    </div>
                  </div>
                  <div className="search-by-place-info">
                    <h6>
                      <Link to="/locations">New York</Link>
                    </h6>
                    <h4>
                      <Link to="/product-details">Pacific Heights Area</Link>
                    </h4>
                    <div className="search-by-place-btn">
                      <Link to="/product-details">
                        View Property <i className="flaticon-right-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        {/* SEARCH BY PLACE AREA END */}
        {/* SELECT AVAILABILITY AREA START */}
        <div className="select-availability-area pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center---">
                  <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                    Avialable Spaces
                  </h6>
                  <h1 className="section-title">Select Availability</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__select-availability-table-wrap">
                  <div className="ltn__select-availability-table d-none d-md-block">
                    <ul className="ltn__select-availability-table-head">
                      <li>Residence</li>
                      <li>Bedrooms</li>
                      <li>Bathroom</li>
                      <li>SQ.FT </li>
                      <li>Rent Price</li>
                      <li>Details</li>
                    </ul>
                    <ul className="ltn__select-availability-table-row">
                      <li className="tower-name">Tower Name</li>
                      <li>3</li>
                      <li>3</li>
                      <li>1,200 </li>
                      <li>$3,500</li>
                      <li>
                        <Link to="/product-details">+ Available</Link>
                      </li>
                    </ul>
                    <ul className="ltn__select-availability-table-row">
                      <li className="tower-name">Tower Name</li>
                      <li>3</li>
                      <li>3</li>
                      <li>1,200 </li>
                      <li>$3,500</li>
                      <li>
                        <Link to="/product-details">+ Available</Link>
                      </li>
                    </ul>
                    <ul className="ltn__select-availability-table-row">
                      <li className="tower-name">Tower Name</li>
                      <li>3</li>
                      <li>3</li>
                      <li>1,200 </li>
                      <li>$3,500</li>
                      <li>
                        <Link to="/product-details">+ Available</Link>
                      </li>
                    </ul>
                    <ul className="ltn__select-availability-table-row">
                      <li className="tower-name">Tower Name</li>
                      <li>3</li>
                      <li>3</li>
                      <li>1,200 </li>
                      <li>$3,500</li>
                      <li>
                        <Link to="/product-details">+ Available</Link>
                      </li>
                    </ul>
                    <ul className="ltn__select-availability-table-row">
                      <li className="tower-name">Tower Name</li>
                      <li>3</li>
                      <li>3</li>
                      <li>1,200 </li>
                      <li>$3,500</li>
                      <li>
                        <Link to="/product-details">+ Available</Link>
                      </li>
                    </ul>
                    <ul className="ltn__select-availability-table-row">
                      <li className="tower-name">Tower Name</li>
                      <li>3</li>
                      <li>3</li>
                      <li>1,200 </li>
                      <li>$3,500</li>
                      <li>
                        <Link to="/product-details">+ Available</Link>
                      </li>
                    </ul>
                    <ul className="ltn__select-availability-table-row">
                      <li className="tower-name">Tower Name</li>
                      <li>3</li>
                      <li>3</li>
                      <li>1,200 </li>
                      <li>$3,500</li>
                      <li>
                        <Link to="/product-details">+ Available</Link>
                      </li>
                    </ul>
                    <ul className="ltn__select-availability-table-row">
                      <li className="tower-name">Tower Name</li>
                      <li>3</li>
                      <li>3</li>
                      <li>1,200 </li>
                      <li>$3,500</li>
                      <li>
                        <Link to="/product-details">+ Available</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__select-availability-table-responsive d-md-none">
                    <ul className="ltn__select-availability-table-row-responsive-item">
                      <li>
                        <span>Residence</span>{" "}
                        <span className="tower-name">Tower Name</span>
                      </li>
                      <li>
                        <span>Bedrooms</span> <span>3</span>
                      </li>
                      <li>
                        <span>Bathroom</span> <span>3</span>
                      </li>
                      <li>
                        <span>SQ.FT</span> <span>1,200</span>
                      </li>
                      <li>
                        <span>Rent Price</span> <span>$3,500</span>
                      </li>
                      <li>
                        <span>Details</span>{" "}
                        <span>
                          <Link to="/product-details">+ Available</Link>
                        </span>
                      </li>
                    </ul>
                    <ul className="ltn__select-availability-table-row-responsive-item">
                      <li>
                        <span>Residence</span>{" "}
                        <span className="tower-name">Tower Name</span>
                      </li>
                      <li>
                        <span>Bedrooms</span> <span>3</span>
                      </li>
                      <li>
                        <span>Bathroom</span> <span>3</span>
                      </li>
                      <li>
                        <span>SQ.FT</span> <span>1,200</span>
                      </li>
                      <li>
                        <span>Rent Price</span> <span>$3,500</span>
                      </li>
                      <li>
                        <span>Details</span>{" "}
                        <span>
                          <Link to="/product-details">+ Available</Link>
                        </span>
                      </li>
                    </ul>
                    <ul className="ltn__select-availability-table-row-responsive-item">
                      <li>
                        <span>Residence</span>{" "}
                        <span className="tower-name">Tower Name</span>
                      </li>
                      <li>
                        <span>Bedrooms</span> <span>3</span>
                      </li>
                      <li>
                        <span>Bathroom</span> <span>3</span>
                      </li>
                      <li>
                        <span>SQ.FT</span> <span>1,200</span>
                      </li>
                      <li>
                        <span>Rent Price</span> <span>$3,500</span>
                      </li>
                      <li>
                        <span>Details</span>{" "}
                        <span>
                          <Link to="/product-details">+ Available</Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SELECT AVAILABILITY AREA END */}
        {/* NEIGHBOUR AREA START */}
        <div className="neighbour-area section-bg-1 pt-118 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center---">
                  <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                    Explore Neighbour
                  </h6>
                  <h1 className="section-title">
                    What’s In Neighbour <br />
                    Explore Below
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__neighbour-tab-wrap">
                  <div className="ltn__tab-menu ltn__tab-menu-3--- ltn__tab-menu-4 ltn__tab-menu-top-right-- text-uppercase--- text-center">
                    <div className="nav">
                      <Link
                        className="active show"
                        data-bs-toggle="tab"
                        to="/#liton_tab_4_1"
                      >
                        <img src="assets/img/neighbour/1.jpg" alt="#" />
                      </Link>
                      <Link data-bs-toggle="tab" to="/#liton_tab_4_2" className>
                        <img src="assets/img/neighbour/2.jpg" alt="#" />
                      </Link>
                      <Link data-bs-toggle="tab" to="/#liton_tab_4_3" className>
                        <img src="assets/img/neighbour/3.jpg" alt="#" />
                      </Link>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="liton_tab_4_1"
                    >
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img src="assets/img/neighbour/1.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link to="/product-details">
                                  <img
                                    src="assets/img/product-3/3.jpg"
                                    alt="#"
                                  />
                                </Link>
                                <div className="search-by-place-badge">
                                  <ul>
                                    <li>9 Properties</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link to="/product-details">
                                    Shopping Center
                                  </Link>
                                </h4>
                                <label>
                                  <span className="ltn__secondary-color">
                                    1,500m{" "}
                                  </span>
                                  / 21 min. walk
                                </label>
                                <div className="search-by-place-brief">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore Enim ullamco laboris.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link to="/product-details">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="liton_tab_4_2">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img src="assets/img/neighbour/2.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link to="/product-details">
                                  <img
                                    src="assets/img/product-3/2.jpg"
                                    alt="#"
                                  />
                                </Link>
                                <div className="search-by-place-badge">
                                  <ul>
                                    <li>9 Properties</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link to="/product-details">
                                    Medical Hospital
                                  </Link>
                                </h4>
                                <label>
                                  <span className="ltn__secondary-color">
                                    1,500m{" "}
                                  </span>
                                  / 21 min. walk
                                </label>
                                <div className="search-by-place-brief">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore Enim ullamco laboris.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link to="/product-details">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="liton_tab_4_3">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img src="assets/img/neighbour/3.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link to="/product-details">
                                  <img
                                    src="assets/img/product-3/4.jpg"
                                    alt="#"
                                  />
                                </Link>
                                <div className="search-by-place-badge">
                                  <ul>
                                    <li>9 Properties</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link to="/product-details">
                                    Children Playland
                                  </Link>
                                </h4>
                                <label>
                                  <span className="ltn__secondary-color">
                                    1,500m{" "}
                                  </span>
                                  / 21 min. walk
                                </label>
                                <div className="search-by-place-brief">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore Enim ullamco laboris.
                                  </p>
                                </div>
                                <div className="search-by-place-btn">
                                  <Link to="/product-details">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div id="accordion_2">
                        {/* card */}
                        <div className="card">
                          <h6
                            className="collapsed ltn__card-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-item-2-1"
                            aria-expanded="false"
                          >
                            <i className="flaticon-mortarboard" /> University /
                            College
                          </h6>
                          <div
                            id="faq-item-2-1"
                            className="collapse"
                            data-bs-parent="#accordion_2"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Scelerisque eleifend donec pretium vulputate
                                sapien nec sagittis.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* card */}
                        <div className="card">
                          <h6
                            className="collapsed ltn__card-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-item-2-2"
                            aria-expanded="false"
                          >
                            <i className="flaticon-hospital" /> Medical Hospital
                          </h6>
                          <div
                            id="faq-item-2-2"
                            className="collapse show---"
                            data-bs-parent="#accordion_2"
                          >
                            <div className="card-body">
                              <div className="ltn__video-img alignleft">
                                <img
                                  src="assets/img/bg/17.jpg"
                                  alt="video popup bg image"
                                />
                                <Link
                                  className="ltn__video-icon-2 ltn__video-icon-2-small ltn__video-icon-2-border----"
                                  to="/https://www.youtube.com/embed/LjCzPp-MK48?autoplay=1&showinfo=0"
                                  data-rel="lightcase:myCollection"
                                >
                                  <i className="fa fa-play" />
                                </Link>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Scelerisque eleifend donec pretium vulputate
                                sapien nec sagittis.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* card */}
                        <div className="card">
                          <h6
                            className="collapsed ltn__card-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-item-2-3"
                            aria-expanded="false"
                          >
                            <i className="flaticon-metro" /> Railway Station
                          </h6>
                          <div
                            id="faq-item-2-3"
                            className="collapse"
                            data-bs-parent="#accordion_2"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Scelerisque eleifend donec pretium vulputate
                                sapien nec sagittis.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/*  */}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div id="accordion_3">
                        {/* card */}
                        <div className="card">
                          <h6
                            className="collapsed ltn__card-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-item-3-4"
                            aria-expanded="false"
                          >
                            <i className="flaticon-building" /> Shopping Mall
                          </h6>
                          <div
                            id="faq-item-3-4"
                            className="collapse"
                            data-bs-parent="#accordion_3"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Scelerisque eleifend donec pretium vulputate
                                sapien nec sagittis.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* card */}
                        <div className="card">
                          <h6
                            className="collapsed ltn__card-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-item-3-5"
                            aria-expanded="false"
                          >
                            <i className="flaticon-airplane" /> Airport/Biman
                          </h6>
                          <div
                            id="faq-item-3-5"
                            className="collapse"
                            data-bs-parent="#accordion_3"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Scelerisque eleifend donec pretium vulputate
                                sapien nec sagittis.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* card */}
                        <div className="card">
                          <h6
                            className="collapsed ltn__card-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-item-3-6"
                            aria-expanded="false"
                          >
                            <i className="flaticon-slider" /> Children Playland
                          </h6>
                          <div
                            id="faq-item-3-6"
                            className="collapse"
                            data-bs-parent="#accordion_3"
                          >
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Scelerisque eleifend donec pretium vulputate
                                sapien nec sagittis.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/*  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* NEIGHBOUR AREA END */}
        {/* CATEGORY AREA START */}
        <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center">
                  <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                    Our Aminities
                  </h6>
                  <h1 className="section-title">Building Aminities</h1>
                </div>
              </div>
            </div>
            <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center">
              <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                  <Link to="/shop">
                    <span className="category-icon">
                      <i className="flaticon-car" />
                    </span>
                    <span className="category-number">01</span>
                    <span className="category-title">Parking Space</span>
                    <span className="category-brief">
                      Enimad minim veniam quis no exercitation ullamco lab
                    </span>
                    <span className="category-btn d-none">
                      <i className="flaticon-right-arrow" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                  <Link to="/shop">
                    <span className="category-icon">
                      <i className="flaticon-swimming" />
                    </span>
                    <span className="category-number">02</span>
                    <span className="category-title">Swimming Pool</span>
                    <span className="category-brief">
                      Enimad minim veniam quis no exercitation ullamco lab
                    </span>
                    <span className="category-btn d-none">
                      <i className="flaticon-right-arrow" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                  <Link to="/shop">
                    <span className="category-icon">
                      <i className="flaticon-secure-shield" />
                    </span>
                    <span className="category-number">03</span>
                    <span className="category-title">Private Security</span>
                    <span className="category-brief">
                      Enimad minim veniam quis no exercitation ullamco lab
                    </span>
                    <span className="category-btn d-none">
                      <i className="flaticon-right-arrow" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                  <Link to="/shop">
                    <span className="category-icon">
                      <i className="flaticon-stethoscope" />
                    </span>
                    <span className="category-number">04</span>
                    <span className="category-title">Medical Center</span>
                    <span className="category-brief">
                      Enimad minim veniam quis no exercitation ullamco lab
                    </span>
                    <span className="category-btn d-none">
                      <i className="flaticon-right-arrow" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                  <Link to="/shop">
                    <span className="category-icon">
                      <i className="flaticon-book" />
                    </span>
                    <span className="category-number">05</span>
                    <span className="category-title">Library Area</span>
                    <span className="category-brief">
                      Enimad minim veniam quis no exercitation ullamco lab
                    </span>
                    <span className="category-btn d-none">
                      <i className="flaticon-right-arrow" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                  <Link to="/shop">
                    <span className="category-icon">
                      <i className="flaticon-bed-1" />
                    </span>
                    <span className="category-number">06</span>
                    <span className="category-title">King Size Beds</span>
                    <span className="category-brief">
                      Enimad minim veniam quis no exercitation ullamco lab
                    </span>
                    <span className="category-btn d-none">
                      <i className="flaticon-right-arrow" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                  <Link to="/shop">
                    <span className="category-icon">
                      <i className="flaticon-home-2" />
                    </span>
                    <span className="category-number">07</span>
                    <span className="category-title">Smart Homes</span>
                    <span className="category-brief">
                      Enimad minim veniam quis no exercitation ullamco lab
                    </span>
                    <span className="category-btn d-none">
                      <i className="flaticon-right-arrow" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                  <Link to="/shop">
                    <span className="category-icon">
                      <i className="flaticon-slider" />
                    </span>
                    <span className="category-number">08</span>
                    <span className="category-title">Kid’s Playland</span>
                    <span className="category-brief">
                      Enimad minim veniam quis no exercitation ullamco lab
                    </span>
                    <span className="category-btn d-none">
                      <i className="flaticon-right-arrow" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CATEGORY AREA END */}
        {/* TESTIMONIAL AREA START (testimonial-8) */}
        <div
          className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-65"
          data-bs-bg="assets/img/bg/23.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center---">
                  <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">
                    Client,s Testimonial
                  </h6>
                  <h1 className="section-title white-color">
                    See What,s Our Client <br />
                    Says About Us
                  </h1>
                </div>
              </div>
            </div>
            <div className="row ltn__testimonial-slider-6-active slick-arrow-3">
              <div className="col-lg-4">
                <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
                  <div className="ltn__testimoni-info">
                    <div className="ltn__testimoni-author-ratting">
                      <div className="ltn__testimoni-info-inner">
                        <div className="ltn__testimoni-img">
                          <img src="assets/img/testimonial/1.jpg" alt="#" />
                        </div>
                        <div className="ltn__testimoni-name-designation">
                          <h5>Jacob William</h5>
                          <label>Selling Agents</label>
                        </div>
                      </div>
                      <div className="ltn__testimoni-rating">
                        <div className="product-ratting">
                          <ul>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p>
                      Precious ipsum dolor sit amet consectetur adipisicing
                      elit, sed dos mod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad min veniam, quis nostrud Precious
                      ips um dolor sit amet, consecte
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
                  <div className="ltn__testimoni-info">
                    <div className="ltn__testimoni-author-ratting">
                      <div className="ltn__testimoni-info-inner">
                        <div className="ltn__testimoni-img">
                          <img src="assets/img/testimonial/2.jpg" alt="#" />
                        </div>
                        <div className="ltn__testimoni-name-designation">
                          <h5>Jacob William</h5>
                          <label>Selling Agents</label>
                        </div>
                      </div>
                      <div className="ltn__testimoni-rating">
                        <div className="product-ratting">
                          <ul>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p>
                      Precious ipsum dolor sit amet consectetur adipisicing
                      elit, sed dos mod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad min veniam, quis nostrud Precious
                      ips um dolor sit amet, consecte
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
                  <div className="ltn__testimoni-info">
                    <div className="ltn__testimoni-author-ratting">
                      <div className="ltn__testimoni-info-inner">
                        <div className="ltn__testimoni-img">
                          <img src="assets/img/testimonial/3.jpg" alt="#" />
                        </div>
                        <div className="ltn__testimoni-name-designation">
                          <h5>Jacob William</h5>
                          <label>Selling Agents</label>
                        </div>
                      </div>
                      <div className="ltn__testimoni-rating">
                        <div className="product-ratting">
                          <ul>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p>
                      Precious ipsum dolor sit amet consectetur adipisicing
                      elit, sed dos mod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad min veniam, quis nostrud Precious
                      ips um dolor sit amet, consecte
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
                  <div className="ltn__testimoni-info">
                    <div className="ltn__testimoni-author-ratting">
                      <div className="ltn__testimoni-info-inner">
                        <div className="ltn__testimoni-img">
                          <img src="assets/img/testimonial/4.jpg" alt="#" />
                        </div>
                        <div className="ltn__testimoni-name-designation">
                          <h5>Jacob William</h5>
                          <label>Selling Agents</label>
                        </div>
                      </div>
                      <div className="ltn__testimoni-rating">
                        <div className="product-ratting">
                          <ul>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="fas fa-star" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p>
                      Precious ipsum dolor sit amet consectetur adipisicing
                      elit, sed dos mod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad min veniam, quis nostrud Precious
                      ips um dolor sit amet, consecte
                    </p>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        {/* TESTIMONIAL AREA END */}
        {/* BLOG AREA START (blog-3) */}
        <div className="ltn__blog-area pt-115--- pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center">
                  <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                    News &amp; Blogs
                  </h6>
                  <h1 className="section-title">Leatest News Feeds</h1>
                </div>
              </div>
            </div>
            <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
              {/* Blog Item */}
              <div className="col-lg-12">
                <div className="ltn__blog-item ltn__blog-item-3">
                  <div className="ltn__blog-img">
                    <Link to="/blog-details">
                      <img src="assets/img/blog/1.jpg" alt="#" />
                    </Link>
                  </div>
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <Link to="/#">
                            <i className="far fa-user" />
                            by: Admin
                          </Link>
                        </li>
                        <li className="ltn__blog-tags">
                          <Link to="/#">
                            <i className="fas fa-tags" />
                            Decorate
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title">
                      <Link to="/blog-details">
                        10 Brilliant Ways To Decorate Your Home
                      </Link>
                    </h3>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" />
                            June 24, 2021
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <Link to="/blog-details">Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Blog Item */}
              <div className="col-lg-12">
                <div className="ltn__blog-item ltn__blog-item-3">
                  <div className="ltn__blog-img">
                    <Link to="/blog-details">
                      <img src="assets/img/blog/2.jpg" alt="#" />
                    </Link>
                  </div>
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <Link to="/#">
                            <i className="far fa-user" />
                            by: Admin
                          </Link>
                        </li>
                        <li className="ltn__blog-tags">
                          <Link to="/#">
                            <i className="fas fa-tags" />
                            Interior
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title">
                      <Link to="/blog-details">
                        The Most Inspiring Interior Design Of 2021
                      </Link>
                    </h3>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" />
                            July 23, 2021
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <Link to="/blog-details">Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Blog Item */}
              <div className="col-lg-12">
                <div className="ltn__blog-item ltn__blog-item-3">
                  <div className="ltn__blog-img">
                    <Link to="/blog-details">
                      <img src="assets/img/blog/3.jpg" alt="#" />
                    </Link>
                  </div>
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <Link to="/#">
                            <i className="far fa-user" />
                            by: Admin
                          </Link>
                        </li>
                        <li className="ltn__blog-tags">
                          <Link to="/#">
                            <i className="fas fa-tags" />
                            Estate
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title">
                      <Link to="/blog-details">
                        Recent Commercial Real Estate Transactions
                      </Link>
                    </h3>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" />
                            May 22, 2021
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <Link to="/blog-details">Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Blog Item */}
              <div className="col-lg-12">
                <div className="ltn__blog-item ltn__blog-item-3">
                  <div className="ltn__blog-img">
                    <Link to="/blog-details">
                      <img src="assets/img/blog/4.jpg" alt="#" />
                    </Link>
                  </div>
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <Link to="/#">
                            <i className="far fa-user" />
                            by: Admin
                          </Link>
                        </li>
                        <li className="ltn__blog-tags">
                          <Link to="/#">
                            <i className="fas fa-tags" />
                            Room
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title">
                      <Link to="/blog-details">
                        Renovating a Living Room? Experts Share Their Secrets
                      </Link>
                    </h3>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" />
                            June 24, 2021
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <Link to="/blog-details">Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Blog Item */}
              <div className="col-lg-12">
                <div className="ltn__blog-item ltn__blog-item-3">
                  <div className="ltn__blog-img">
                    <Link to="/blog-details">
                      <img src="assets/img/blog/5.jpg" alt="#" />
                    </Link>
                  </div>
                  <div className="ltn__blog-brief">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-author">
                          <Link to="/#">
                            <i className="far fa-user" />
                            by: Admin
                          </Link>
                        </li>
                        <li className="ltn__blog-tags">
                          <Link to="/#">
                            <i className="fas fa-tags" />
                            Trends
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="ltn__blog-title">
                      <Link to="/blog-details">
                        7 home trends that will shape your house in 2021
                      </Link>
                    </h3>
                    <div className="ltn__blog-meta-btn">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-date">
                            <i className="far fa-calendar-alt" />
                            June 24, 2021
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__blog-btn">
                        <Link to="/blog-details">Read more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        {/* BLOG AREA END */}
        {/* CALL TO ACTION START (call-to-action-6) */}
        <div
          className="ltn__call-to-action-area call-to-action-6 before-bg-bottom"
          data-bs-bg="assets/img/1.jpg--"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                  <div className="coll-to-info text-color-white">
                    <h1>Looking for a dream home?</h1>
                    <p>We help you make the dream of new house a reality</p>
                  </div>
                  <div className="btn-wrapper">
                    <Link className="btn btn-effect-3 btn-white" to="/contact">
                      Explore Properties <i className="icon-next" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CALL TO ACTION END */}
      </div>
    </>
  );
}

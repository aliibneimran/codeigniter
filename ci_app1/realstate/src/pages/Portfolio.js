import React from 'react'
import { Link } from 'react-router-dom'


export default function Portfolio() {
    return (
        <>
            <div>
                {/* BREADCRUMB AREA START */}
                <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-img " data-bs-bg="img/bg/14.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__breadcrumb-inner">
                                    <h1 className="page-title">Our Portfolio</h1>
                                    <div className="ltn__breadcrumb-list">
                                        <ul>
                                            <li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
                                            <li>Portfolio</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BREADCRUMB AREA END */}
                {/* Gallery area start */}
                <div className="ltn__gallery-area mb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__gallery-menu">
                                    <div className="ltn__gallery-filter-menu portfolio-filter text-uppercase mb-50">
                                        <button data-filter="*" className="active">all</button>
                                        <button data-filter=".filter_category_1">Houses</button>
                                        <button data-filter=".filter_category_2">Retail</button>
                                        <button data-filter=".filter_category_3">Condos</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Portfolio Wrapper Start*/}
                        <div className="ltn__gallery-active row ltn__gallery-style-1">
                            <div className="ltn__gallery-sizer col-1" />
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_3 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/1.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-search" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details">Portfolio Link </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_2 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/#ltn__inline_description_1" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/2.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="far fa-file-alt" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details">Inline Description </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_1 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="///www.youtube.com/embed/6v2L2UGZJAM?version=3" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/3.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fab fa-youtube" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details">Youtube Video </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_3 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="///player.vimeo.com/video/49583118?version=3" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/4.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fab fa-vimeo-v" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details">Vimeo Video </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_2 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/media/1.mp4" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/5.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-video" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details">HTML5 Video </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_1 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1575.9076122223137!2d144.96590401578402!3d-37.81779982944919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b6af832249%3A0xe39e415e49a7c44e!2sFlinders%20Street%20Railway%20Station!5e0!3m2!1sen!2sbd!4v1598113544515!5m2!1sen!2sbd" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/6.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-map-marker-alt" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details">Google Map </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_3 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/img/gallery/1.jpg" data-rel="lightcase:myCollection" data-bs-lc-caption="Your caption Here">
                                            <img src="assets/img/gallery/7.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fab fa-acquisitions-incorporated" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details">img Caption </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_2 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/img/gallery/no-img.jpg" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/8.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-not-equal" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details">Not Found</Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_1 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/9.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-search" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details">Portfolio Link </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_3 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/10.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-search" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details">Portfolio Link </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_2 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/1.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-search" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details">Portfolio Link </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                            {/* gallery-item */}
                            <div className="ltn__gallery-item filter_category_1 col-md-4 col-sm-6 col-12">
                                <div className="ltn__gallery-item-inner">
                                    <div className="ltn__gallery-item-img">
                                        <Link to="/img/gallery/1.jpg" data-rel="lightcase:myCollection">
                                            <img src="assets/img/gallery/2.jpg" alt="img" />
                                            <span className="ltn__gallery-action-icon">
                                                <i className="fas fa-search" />
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ltn__gallery-item-info">
                                        <h4><Link to="/portfolio-details">Portfolio Link </Link></h4>
                                        <p>Web Design &amp; Development, Branding</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="ltn__inline_description_1" style={{ display: 'none' }}>
                            <h4 className="first">This content comes from a hidden element on that page</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi eu elit tempor facilisis id et neque. Nulla sit amet sem sapien. Vestibulum imperdiet porta ante ac ornare. Nulla et lorem eu nibh adipiscing ultricies nec at lacus. Cras laoreet ultricies sem, at blandit mi eleifend aliquam. Nunc enim ipsum, vehicula non pretium varius, cursus ac tortor.</p>
                            <p>Vivamus fringilla congue laoreet. Quisque ultrices sodales orci, quis rhoncus justo auctor in. Phasellus dui eros, bibendum eu feugiat ornare, faucibus eu mi. Nunc aliquet tempus sem, id aliquam diam varius ac. Maecenas nisl nunc, molestie vitae eleifend vel.</p>
                        </div>
                        <div className="btn-wrapper text-center">
                            <Link to="/#" className="btn btn-transparent btn-effect-1 btn-border">LOAD MORE +</Link>
                        </div>
                        {/* pagination start */}
                        {/* 
      <div class="row">
          <div class="col-lg-12">
              <div class="ltn__pagination text-center margin-top-50">
                  <ul>
                      <li class="arrow-icon"><Link to="/#"> &leftarrow; </Link></li>
                      <li class="active"><Link to="/blog">1</Link></li>
                      <li><Link to="/blog-2">2</Link></li>
                      <li><Link to="/blog-2">3</Link></li>
                      <li><Link to="/blog-2">...</Link></li>
                      <li><Link to="/blog-2">10</Link></li>
                      <li class="arrow-icon"><Link to="/#"> &rightarrow; </Link></li>
                  </ul>
              </div>
          </div>
      </div>
      */}
                        {/* pagination end */}
                    </div>
                </div>
                {/* Gallery area end */}

                {/* BRAND LOGO AREA START */}
                <div className="ltn__brand-logo-area ltn__brand-logo-1 pt-80--- pb-110 plr--9">
                    <div className="container-fluid">
                        <div className="row ltn__brand-logo-active">
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src="assets/img/brand-logo/1.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src="assets/img/brand-logo/2.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src="assets/img/brand-logo/3.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src="assets/img/brand-logo/4.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src="assets/img/brand-logo/5.png" alt="Brand Logo" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="ltn__brand-logo-item">
                                    <img src="assets/img/brand-logo/3.png" alt="Brand Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BRAND LOGO AREA END */}
            </div>

        </>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'


export default function Blog() {
    return (
        <>
            {/* <!-- BREADCRUMB AREA START --> */}
            <div class="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="ltn__breadcrumb-inner">
                                <h1 class="page-title">News Feeds</h1>
                                <div class="ltn__breadcrumb-list">
                                    <ul>
                                        <li><Link to="/"><span class="ltn__secondary-color"><i class="fas fa-home"></i></span> Home</Link></li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- BREADCRUMB AREA END --> */}

            {/* <!-- BLOG AREA START --> */}
            <div class="ltn__blog-area mb-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="ltn__blog-list-wrap">
                                {/* <!-- Blog Item --> */}
                                <div class="ltn__blog-item ltn__blog-item-5">
                                    <div class="ltn__blog-img">
                                        <Link to="/blog-details"><img src="assets/img/blog/31.jpg" alt="Image" /></Link>
                                    </div>
                                    <div class="ltn__blog-brief">
                                        <div class="ltn__blog-meta">
                                            <ul>
                                                <li class="ltn__blog-category">
                                                    <Link to="/#">Real Estate</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 class="ltn__blog-title"><Link to="/blog-details">Real estate is property consisting of land and the buildings on it,
                                            along with its</Link></h3>
                                        <div class="ltn__blog-meta">
                                            <ul>
                                                <li>
                                                    <Link to="/#"><i class="far fa-eye"></i>232 Views</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#"><i class="far fa-comments"></i>35 Comments</Link>
                                                </li>
                                                <li class="ltn__blog-date">
                                                    <i class="far fa-calendar-alt"></i>June 22, 2020
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                        <div class="ltn__blog-meta-btn">
                                            <div class="ltn__blog-meta">
                                                <ul>
                                                    <li class="ltn__blog-author">
                                                        <Link to="/#"><img src="assets/img/blog/author.jpg" alt="#" />By: Ethan</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="ltn__blog-btn">
                                                <Link to="/blog-details"><i class="fas fa-arrow-right"></i>Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Blog Item (Video) --> */}
                                <div class="ltn__blog-item ltn__blog-item-5 ltn__blog-item-video">
                                    <div class="ltn__video-img">
                                        <img src="assets/img/blog/32.jpg" alt="video popup bg image" />
                                        <Link class="ltn__video-icon-2 ltn__secondary-bg ltn__video-icon-2-border---" to="/https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
                                            <i class="fa fa-play"></i>
                                        </Link>
                                    </div>
                                    <div class="ltn__blog-brief">
                                        <div class="ltn__blog-meta">
                                            <ul>
                                                <li class="ltn__blog-category">
                                                    <Link to="/#">Business</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 class="ltn__blog-title"><Link to="/blog-details">Adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore.</Link></h3>
                                        <div class="ltn__blog-meta">
                                            <ul>
                                                <li>
                                                    <Link to="/#"><i class="far fa-eye"></i>232 Views</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#"><i class="far fa-comments"></i>35 Comments</Link>
                                                </li>
                                                <li class="ltn__blog-date">
                                                    <i class="far fa-calendar-alt"></i>June 22, 2020
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                        <div class="ltn__blog-meta-btn">
                                            <div class="ltn__blog-meta">
                                                <ul>
                                                    <li class="ltn__blog-author">
                                                        <Link to="/#"><img src="assets/img/blog/author.jpg" alt="#" />By: Ethan</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="ltn__blog-btn">
                                                <Link to="/blog-details"><i class="fas fa-arrow-right"></i>Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Blog Item (Gallery) --> */}
                                <div class="ltn__blog-item ltn__blog-item-5 ltn__blog-item-gallery">
                                    <div class="ltn__blog-gallery-active slick-arrow-1 slick-arrow-1-inner">
                                        <div class="ltn__blog-gallery-item">
                                            <Link to="/blog-details"><img src="assets/img/blog/33.jpg" alt="Image" /></Link>
                                        </div>
                                        <div class="ltn__blog-gallery-item">
                                            <Link to="/blog-details"><img src="assets/img/blog/34.jpg" alt="Image" /></Link>
                                        </div>
                                        <div class="ltn__blog-gallery-item">
                                            <Link to="/blog-details"><img src="assets/img/blog/31.jpg" alt="Image" /></Link>
                                        </div>
                                    </div>
                                    <div class="ltn__blog-brief">
                                        <div class="ltn__blog-meta">
                                            <ul>
                                                <li class="ltn__blog-category">
                                                    <Link to="/#">Business</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 class="ltn__blog-title"><Link to="/blog-details">Magna aliqua. Ut enim ad minim venia
                                            m, quis nostrud exercitation ullamco</Link></h3>
                                        <div class="ltn__blog-meta">
                                            <ul>
                                                <li>
                                                    <Link to="/#"><i class="far fa-eye"></i>232 Views</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#"><i class="far fa-comments"></i>35 Comments</Link>
                                                </li>
                                                <li class="ltn__blog-date">
                                                    <i class="far fa-calendar-alt"></i>June 22, 2020
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                        <div class="ltn__blog-meta-btn">
                                            <div class="ltn__blog-meta">
                                                <ul>
                                                    <li class="ltn__blog-author">
                                                        <Link to="/#"><img src="assets/img/blog/author.jpg" alt="#" />By: Ethan</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="ltn__blog-btn">
                                                <Link to="/blog-details"><i class="fas fa-arrow-right"></i>Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Blog Item (Audio) --> */}
                                <div class="ltn__blog-item ltn__blog-item-5 ltn__blog-item-audio">
                                    <div class="post-audio embed-responsive embed-responsive-16by9">
                                        <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/837045328&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

                                    </div>
                                    <div class="ltn__blog-brief">
                                        <div class="ltn__blog-meta">
                                            <ul>
                                                <li class="ltn__blog-category">
                                                    <Link to="/#">Business</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 class="ltn__blog-title"><Link to="/blog-details">Laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor.</Link></h3>
                                        <div class="ltn__blog-meta">
                                            <ul>
                                                <li>
                                                    <Link to="/#"><i class="far fa-eye"></i>232 Views</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#"><i class="far fa-comments"></i>35 Comments</Link>
                                                </li>
                                                <li class="ltn__blog-date">
                                                    <i class="far fa-calendar-alt"></i>June 22, 2020
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                        <div class="ltn__blog-meta-btn">
                                            <div class="ltn__blog-meta">
                                                <ul>
                                                    <li class="ltn__blog-author">
                                                        <Link to="/#"><img src="assets/img/blog/author.jpg" alt="#" />By: Ethan</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="ltn__blog-btn">
                                                <Link to="/blog-details"><i class="fas fa-arrow-right"></i>Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Blog Item (No Image) --> */}
                                <div class="ltn__blog-item ltn__blog-item-5 ltn__blog-item-no-image">
                                    <div class="ltn__blog-brief">
                                        <div class="ltn__blog-meta">
                                            <ul>
                                                <li class="ltn__blog-category">
                                                    <Link to="/#">Business</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 class="ltn__blog-title"><Link to="/blog-details">In reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur.</Link></h3>
                                        <div class="ltn__blog-meta">
                                            <ul>
                                                <li>
                                                    <Link to="/#"><i class="far fa-eye"></i>232 Views</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#"><i class="far fa-comments"></i>35 Comments</Link>
                                                </li>
                                                <li class="ltn__blog-date">
                                                    <i class="far fa-calendar-alt"></i>June 22, 2020
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                        <div class="ltn__blog-meta-btn">
                                            <div class="ltn__blog-meta">
                                                <ul>
                                                    <li class="ltn__blog-author">
                                                        <Link to="/#"><img src="assets/img/blog/author.jpg" alt="#" />By: Ethan</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="ltn__blog-btn">
                                                <Link to="/blog-details"><i class="fas fa-arrow-right"></i>Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Blog Item (Quote) --> */}
                                <div class="ltn__blog-item ltn__blog-item-5 ltn__blog-item-quote bg-image bg-overlay-theme-90" data-bs-bg="img/blog/3.jpg">
                                    <div class="ltn__blog-brief">
                                        <blockquote>
                                            <Link to="/blog-details">Excepteur sint occaecat cupida
                                                tat non proident, sunt in.</Link>
                                        </blockquote>
                                        <div class="ltn__blog-meta mb-0">
                                            <ul>
                                                <li>
                                                    <Link to="/#"><i class="far fa-eye"></i>232 Views</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#"><i class="far fa-comments"></i>35 Comments</Link>
                                                </li>
                                                <li class="ltn__blog-date">
                                                    <i class="far fa-calendar-alt"></i>June 22, 2020
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Blog Item (Background Image) --> */}
                                <div class="ltn__blog-item ltn__blog-item-5 ltn__blog-item-bg-image bg-image bg-overlay-white-90" data-bs-bg="img/blog/2.jpg">
                                    <div class="ltn__blog-brief">
                                        <div class="ltn__blog-meta">
                                            <ul>
                                                <li class="ltn__blog-category">
                                                    <Link to="/#">Business</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 class="ltn__blog-title"><Link to="/blog-details">Culpa qui officia deserunt mollit anim
                                            id est laborum. Sed ut perspiciatis</Link></h3>
                                        <div class="ltn__blog-meta mb-0">
                                            <ul>
                                                <li>
                                                    <Link to="/#"><i class="far fa-eye"></i>232 Views</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#"><i class="far fa-comments"></i>35 Comments</Link>
                                                </li>
                                                <li class="ltn__blog-date">
                                                    <i class="far fa-calendar-alt"></i>June 22, 2020
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="ltn__pagination-area text-center">
                                        <div class="ltn__pagination">
                                            <ul>
                                                <li><Link to="/#"><i class="fas fa-angle-double-left"></i></Link></li>
                                                <li><Link to="/#">1</Link></li>
                                                <li class="active"><Link to="/#">2</Link></li>
                                                <li><Link to="/#">3</Link></li>
                                                <li><Link to="/#">...</Link></li>
                                                <li><Link to="/#">10</Link></li>
                                                <li><Link to="/#"><i class="fas fa-angle-double-right"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <aside class="sidebar-area blog-sidebar ltn__right-sidebar">
                                {/* <!-- Author Widget --> */}
                                <div class="widget ltn__author-widget">
                                    <div class="ltn__author-widget-inner text-center">
                                        <img src="assets/img/team/4.jpg" alt="Image" />
                                        <h5>Rosalina D. Willaimson</h5>
                                        <small>Traveller/Photographer</small>
                                        <div class="product-ratting">
                                            <ul>
                                                <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                <li><Link to="/#"><i class="fas fa-star-half-alt"></i></Link></li>
                                                <li><Link to="/#"><i class="far fa-star"></i></Link></li>
                                                <li class="review-total"> <Link to="/#"> ( 1 Reviews )</Link></li>
                                            </ul>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.</p>
                                        <div class="ltn__social-media">
                                            <ul>
                                                <li><Link to="/#" title="Facebook"><i class="fab fa-facebook-f"></i></Link></li>
                                                <li><Link to="/#" title="Twitter"><i class="fab fa-twitter"></i></Link></li>
                                                <li><Link to="/#" title="Linkedin"><i class="fab fa-linkedin"></i></Link></li>

                                                <li><Link to="/#" title="Youtube"><i class="fab fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Search Widget --> */}
                                <div class="widget ltn__search-widget">
                                    <h4 class="ltn__widget-title ltn__widget-title-border-2">Search Objects</h4>
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Search your keyword..." />
                                        <button type="submit"><i class="fas fa-search"></i></button>
                                    </form>
                                </div>
                                {/* <!-- Form Widget --> */}
                                <div class="widget ltn__form-widget">
                                    <h4 class="ltn__widget-title ltn__widget-title-border-2">Drop Messege For Book</h4>
                                    <form action="#">
                                        <input type="text" name="yourname" placeholder="Your Name*" />
                                        <input type="text" name="youremail" placeholder="Your e-Mail*" />
                                        <textareLink name="yourmessage" placeholder="Write Message..."></textareLink>
                                        <button type="submit" class="btn theme-btn-1">Send Messege</button>
                                    </form>
                                </div>
                                {/* <!-- Top Rated Product Widget --> */}
                                <div class="widget ltn__top-rated-product-widget">
                                    <h4 class="ltn__widget-title ltn__widget-title-border-2">Top Rated Product</h4>
                                    <ul>
                                        <li>
                                            <div class="top-rated-product-item clearfix">
                                                <div class="top-rated-product-img">
                                                    <Link to="/product-details"><img src="assets/img/product/1.png" alt="#" /></Link>
                                                </div>
                                                <div class="top-rated-product-info">
                                                    <div class="product-ratting">
                                                        <ul>
                                                            <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                            <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                            <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                            <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                            <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link to="/product-details">Luxury House In Greenville </Link></h6>
                                                    <div class="product-price">
                                                        <span>$30,000.00</span>
                                                        <del>$35,000.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="top-rated-product-item clearfix">
                                                <div class="top-rated-product-img">
                                                    <Link to="/product-details"><img src="assets/img/product/2.png" alt="#" /></Link>
                                                </div>
                                                <div class="top-rated-product-info">
                                                    <div class="product-ratting">
                                                        <ul>
                                                            <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                            <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                            <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                            <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                            <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link to="/product-details">Apartment with Subunits</Link></h6>
                                                    <div class="product-price">
                                                        <span>$30,000.00</span>
                                                        <del>$35,000.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="top-rated-product-item clearfix">
                                                <div class="top-rated-product-img">
                                                    <Link to="/product-details"><img src="assets/img/product/3.png" alt="#" /></Link>
                                                </div>
                                                <div class="top-rated-product-info">
                                                    <div class="product-ratting">
                                                        <ul>
                                                            <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                            <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                            <li><Link to="/#"><i class="fas fa-star"></i></Link></li>
                                                            <li><Link to="/#"><i class="fas fa-star-half-alt"></i></Link></li>
                                                            <li><Link to="/#"><i class="far fa-star"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                    <h6><Link to="/product-details">3 Rooms Manhattan</Link></h6>
                                                    <div class="product-price">
                                                        <span>$30,000.00</span>
                                                        <del>$35,000.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- Menu Widget (Category) --> */}
                                <div class="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2---">
                                    <h4 class="ltn__widget-title ltn__widget-title-border-2">Top Categories</h4>
                                    <ul>
                                        <li><Link to="/#">Apartments <span>(26)</span></Link></li>
                                        <li><Link to="/#">Picture Stodio <span>(30)</span></Link></li>
                                        <li><Link to="/#">Office  <span>(71)</span></Link></li>
                                        <li><Link to="/#">Luxary Vilas <span>(56)</span></Link></li>
                                        <li><Link to="/#">Duplex House <span>(60)</span></Link></li>
                                    </ul>
                                </div>
                                {/* <!-- Popular Product Widget --> */}
                                <div class="widget ltn__popular-product-widget">
                                    <h4 class="ltn__widget-title ltn__widget-title-border-2">Popular Properties</h4>
                                    <div class="row ltn__popular-product-widget-active slick-arrow-1">
                                        {/* <!-- ltn__product-item --> */}
                                        <div class="col-12">
                                            <div class="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                                                <div class="product-img">
                                                    <Link to="/product-details"><img src="assets/img/product-3/6.jpg" alt="#" /></Link>
                                                    <div class="real-estate-agent">
                                                        <div class="agent-img">
                                                            <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-info">
                                                    <div class="product-price">
                                                        <span>$349,00<label>/Month</label></span>
                                                    </div>
                                                    <h2 class="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
                                                    <div class="product-img-location">
                                                        <ul>
                                                            <li>
                                                                <Link to="/product-details"><i class="flaticon-pin"></i> Belmont Gardens, Chicago</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <ul class="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                                        <li><span>3 </span>
                                                            Bedrooms
                                                        </li>
                                                        <li><span>2 </span>
                                                            Bathrooms
                                                        </li>
                                                        <li><span>3450 </span>
                                                            square Ft
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- ltn__product-item --> */}
                                        <div class="col-12">
                                            <div class="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                                                <div class="product-img">
                                                    <Link to="/product-details"><img src="assets/img/product-3/4.jpg" alt="#" /></Link>
                                                    <div class="real-estate-agent">
                                                        <div class="agent-img">
                                                            <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-info">
                                                    <div class="product-price">
                                                        <span>$349,00<label>/Month</label></span>
                                                    </div>
                                                    <h2 class="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
                                                    <div class="product-img-location">
                                                        <ul>
                                                            <li>
                                                                <Link to="/product-details"><i class="flaticon-pin"></i> Belmont Gardens, Chicago</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <ul class="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                                        <li><span>3 </span>
                                                            Bedrooms
                                                        </li>
                                                        <li><span>2 </span>
                                                            Bathrooms
                                                        </li>
                                                        <li><span>3450 </span>
                                                            square Ft
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- ltn__product-item --> */}
                                        <div class="col-12">
                                            <div class="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                                                <div class="product-img">
                                                    <Link to="/product-details"><img src="assets/img/product-3/5.jpg" alt="#" /></Link>
                                                    <div class="real-estate-agent">
                                                        <div class="agent-img">
                                                            <Link to="/team-details"><img src="assets/img/blog/author.jpg" alt="#" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-info">
                                                    <div class="product-price">
                                                        <span>$349,00<label>/Month</label></span>
                                                    </div>
                                                    <h2 class="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
                                                    <div class="product-img-location">
                                                        <ul>
                                                            <li>
                                                                <Link to="/product-details"><i class="flaticon-pin"></i> Belmont Gardens, Chicago</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <ul class="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                                                        <li><span>3 </span>
                                                            Bedrooms
                                                        </li>
                                                        <li><span>2 </span>
                                                            Bathrooms
                                                        </li>
                                                        <li><span>3450 </span>
                                                            square Ft
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Popular Post Widget --> */}
                                <div class="widget ltn__popular-post-widget">
                                    <h4 class="ltn__widget-title ltn__widget-title-border-2">Leatest Blogs</h4>
                                    <ul>
                                        <li>
                                            <div class="popular-post-widget-item clearfix">
                                                <div class="popular-post-widget-img">
                                                    <Link to="/blog-details"><img src="assets/img/team/5.jpg" alt="#" /></Link>
                                                </div>
                                                <div class="popular-post-widget-brief">
                                                    <h6><Link to="/blog-details">Lorem ipsum dolor sit
                                                        cing elit, sed do.</Link></h6>
                                                    <div class="ltn__blog-meta">
                                                        <ul>
                                                            <li class="ltn__blog-date">
                                                                <Link to="/#"><i class="far fa-calendar-alt"></i>June 22, 2020</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="popular-post-widget-item clearfix">
                                                <div class="popular-post-widget-img">
                                                    <Link to="/blog-details"><img src="assets/img/team/6.jpg" alt="#" /></Link>
                                                </div>
                                                <div class="popular-post-widget-brief">
                                                    <h6><Link to="/blog-details">Lorem ipsum dolor sit
                                                        cing elit, sed do.</Link></h6>
                                                    <div class="ltn__blog-meta">
                                                        <ul>
                                                            <li class="ltn__blog-date">
                                                                <Link to="/#"><i class="far fa-calendar-alt"></i>June 22, 2020</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="popular-post-widget-item clearfix">
                                                <div class="popular-post-widget-img">
                                                    <Link to="/blog-details"><img src="assets/img/team/7.jpg" alt="#" /></Link>
                                                </div>
                                                <div class="popular-post-widget-brief">
                                                    <h6><Link to="/blog-details">Lorem ipsum dolor sit
                                                        cing elit, sed do.</Link></h6>
                                                    <div class="ltn__blog-meta">
                                                        <ul>
                                                            <li class="ltn__blog-date">
                                                                <Link to="/#"><i class="far fa-calendar-alt"></i>June 22, 2020</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="popular-post-widget-item clearfix">
                                                <div class="popular-post-widget-img">
                                                    <Link to="/blog-details"><img src="assets/img/team/8.jpg" alt="#" /></Link>
                                                </div>
                                                <div class="popular-post-widget-brief">
                                                    <h6><Link to="/blog-details">Lorem ipsum dolor sit
                                                        cing elit, sed do.</Link></h6>
                                                    <div class="ltn__blog-meta">
                                                        <ul>
                                                            <li class="ltn__blog-date">
                                                                <Link to="/#"><i class="far fa-calendar-alt"></i>June 22, 2020</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- Popular Post Widget (Twitter Post) --> */}
                                <div class="widget ltn__popular-post-widget ltn__twitter-post-widget">
                                    <h4 class="ltn__widget-title ltn__widget-title-border-2">Twitter Feeds</h4>
                                    <ul>
                                        <li>
                                            <div class="popular-post-widget-item clearfix">
                                                <div class="popular-post-widget-img">
                                                    <Link to="/blog-details"><i class="fab fa-twitter"></i></Link>
                                                </div>
                                                <div class="popular-post-widget-brief">
                                                    <p>Carsafe - #Gutenberg ready
                                                        @wordpress
                                                        Theme for Car Service, Auto Parts, Car Dealer available on
                                                        @website
                                                        <Link to="/https://website.net">https://website.net</Link></p>
                                                    <div class="ltn__blog-meta">
                                                        <ul>
                                                            <li class="ltn__blog-date">
                                                                <Link to="/#"><i class="far fa-calendar-alt"></i>June 22, 2020</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="popular-post-widget-item clearfix">
                                                <div class="popular-post-widget-img">
                                                    <Link to="/blog-details"><i class="fab fa-twitter"></i></Link>
                                                </div>
                                                <div class="popular-post-widget-brief">
                                                    <p>Carsafe - #Gutenberg ready
                                                        @wordpress
                                                        Theme for Car Service, Auto Parts, Car Dealer available on
                                                        @website
                                                        <Link to="/https://website.net">https://website.net</Link></p>
                                                    <div class="ltn__blog-meta">
                                                        <ul>
                                                            <li class="ltn__blog-date">
                                                                <Link to="/#"><i class="far fa-calendar-alt"></i>June 22, 2020</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="popular-post-widget-item clearfix">
                                                <div class="popular-post-widget-img">
                                                    <Link to="/blog-details"><i class="fab fa-twitter"></i></Link>
                                                </div>
                                                <div class="popular-post-widget-brief">
                                                    <p>Carsafe - #Gutenberg ready
                                                        @wordpress
                                                        Theme for Car Service, Auto Parts, Car Dealer available on
                                                        @website
                                                        <Link to="/https://website.net">https://website.net</Link></p>
                                                    <div class="ltn__blog-meta">
                                                        <ul>
                                                            <li class="ltn__blog-date">
                                                                <Link to="/#"><i class="far fa-calendar-alt"></i>June 22, 2020</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- Social Media Widget --> */}
                                <div class="widget ltn__social-media-widget">
                                    <h4 class="ltn__widget-title ltn__widget-title-border-2">Follow us</h4>
                                    <div class="ltn__social-media-2">
                                        <ul>
                                            <li><Link to="/#" title="Facebook"><i class="fab fa-facebook-f"></i></Link></li>
                                            <li><Link to="/#" title="Twitter"><i class="fab fa-twitter"></i></Link></li>
                                            <li><Link to="/#" title="Linkedin"><i class="fab fa-linkedin"></i></Link></li>
                                            <li><Link to="/#" title="Instagram"><i class="fab fa-instagram"></i></Link></li>

                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- Tagcloud Widget --> */}
                                <div class="widget ltn__tagcloud-widget">
                                    <h4 class="ltn__widget-title ltn__widget-title-border-2">Popular Tags</h4>
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
                                {/* <!-- Banner Widget --> */}
                                <div class="widget ltn__banner-widget d-none">
                                    <Link to="/shop"><img src="assets/img/banner/2.jpg" alt="#" /></Link>
                                </div>
                                {/* <!-- Instagram Widget --> */}
                                <div class="widget ltn__instagram-widget d-none">
                                    <h4 class="ltn__widget-title ltn__widget-title-border">Instagram Feeds</h4>
                                    <div class="ltn__instafeed ltn__instafeed-grid insta-grid-gutter"></div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- BLOG AREA END --> */}  
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'


export default function Wishlist() {
    return (
        <>
            <div>
                {/* BREADCRUMB AREA START */}
                <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ltn__breadcrumb-inner">
                                    <h1 className="page-title">Wishlist</h1>
                                    <div className="ltn__breadcrumb-list">
                                        <ul>
                                            <li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
                                            <li>Wishlist</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BREADCRUMB AREA END */}
                {/* WISHLIST AREA START */}
                <div className="liton__wishlist-area mb-105">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shoping-cart-inner">
                                    <div className="shoping-cart-table table-responsive">
                                        <table className="table">
                                            {/* <thead>
                              <th class="cart-product-remove">X</th>
                              <th class="cart-product-image">Image</th>
                              <th class="cart-product-info">Title</th>
                              <th class="cart-product-price">Price</th>
                              <th class="cart-product-quantity">Quantity</th>
                              <th class="cart-product-subtotal">Subtotal</th>
                          </thead> */}
                                            <tbody>
                                                <tr>
                                                    <td className="cart-product-remove">x</td>
                                                    <td className="cart-product-image">
                                                        <Link to="/product-details"><img src="assets/img/product/1.png" alt="#" /></Link>
                                                    </td>
                                                    <td className="cart-product-info">
                                                        <h4><Link to="/product-details">3 Rooms Manhattan</Link></h4>
                                                    </td>
                                                    <td className="cart-product-price">$85.00</td>
                                                    <td className="cart-product-stock">In Stock</td>
                                                    <td className="cart-product-add-cart">
                                                        <Link className="submit-button-1" href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">Add to Cart</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="cart-product-remove">x</td>
                                                    <td className="cart-product-image">
                                                        <Link to="/product-details"><img src="assets/img/product/2.png" alt="#" /></Link>
                                                    </td>
                                                    <td className="cart-product-info">
                                                        <h4><Link to="/product-details">Shock Mount Insulator</Link></h4>
                                                    </td>
                                                    <td className="cart-product-price">$89.00</td>
                                                    <td className="cart-product-stock">In Stock</td>
                                                    <td className="cart-product-add-cart">
                                                        <Link className="submit-button-1" href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">Add to Cart</Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="cart-product-remove">x</td>
                                                    <td className="cart-product-image">
                                                        <Link to="/product-details"><img src="assets/img/product/4.png" alt="#" /></Link>
                                                    </td>
                                                    <td className="cart-product-info">
                                                        <h4><Link to="/product-details">Tail Light Lens</Link></h4>
                                                    </td>
                                                    <td className="cart-product-price">$149.00</td>
                                                    <td className="cart-product-stock">In Stock</td>
                                                    <td className="cart-product-add-cart">
                                                        <Link className="submit-button-1" href="#" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">Add to Cart</Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* WISHLIST AREA START */}
            </div>

        </>
    )
}

import React from 'react'

export default function Modal() {
  return (
    <div>
<div>
  {/* MODAL AREA START (Quick View Modal) */}
  <div className="ltn__modal-area ltn__quick-view-modal-area">
    <div className="modal fade" id="quick_view_modal" tabIndex={-1}>
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
              {/* <i class="fas fa-times"></i> */}
            </button>
          </div>
          <div className="modal-body">
            <div className="ltn__quick-view-modal-inner">
              <div className="modal-product-item">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="modal-product-img">
                      <img src="assets/img/product/4.png" alt="#" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="modal-product-info">
                      <div className="product-ratting">
                        <ul>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star" /></a></li>
                          <li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
                          <li><a href="#"><i className="far fa-star" /></a></li>
                          <li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
                        </ul>
                      </div>
                      <h3>3 Rooms Manhattan</h3>
                      <div className="product-price">
                        <span>$149.00</span>
                        <del>$165.00</del>
                      </div>
                      <div className="modal-product-meta ltn__product-details-menu-1">
                        <ul>
                          <li>
                            <strong>Categories:</strong> 
                            <span>
                              <a href="#">Parts</a>
                              <a href="#">Car</a>
                              <a href="#">Seat</a>
                              <a href="#">Cover</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__product-details-menu-2">
                        <ul>
                          <li>
                            <div className="cart-plus-minus">
                              <input type="text" defaultValue={02} name="qtybutton" className="cart-plus-minus-box" />
                            </div>
                          </li>
                          <li>
                            <a href="#" className="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
                              <i className="fas fa-shopping-cart" />
                              <span>ADD TO CART</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="ltn__product-details-menu-3">
                        <ul>
                          <li>
                            <a href="#" className title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                              <i className="far fa-heart" />
                              <span>Add to Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className title="Compare" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                              <i className="fas fa-exchange-alt" />
                              <span>Compare</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <hr />
                      <div className="ltn__social-media">
                        <ul>
                          <li>Share:</li>
                          <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                          <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                          <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                          <li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
                        </ul>
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
  </div>
  {/* MODAL AREA END */}
  {/* MODAL AREA START (Add To Cart Modal) */}
  <div className="ltn__modal-area ltn__add-to-cart-modal-area">
    <div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
      <div className="modal-dialog modal-md" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="ltn__quick-view-modal-inner">
              <div className="modal-product-item">
                <div className="row">
                  <div className="col-12">
                    <div className="modal-product-img">
                      <img src="assets/img/product/1.png" alt="#" />
                    </div>
                    <div className="modal-product-info">
                      <h5><a href="product-details">3 Rooms Manhattan</a></h5>
                      <p className="added-cart"><i className="fa fa-check-circle" />  Successfully added to your Cart</p>
                      <div className="btn-wrapper">
                        <a href="cart" className="theme-btn-1 btn btn-effect-1">View Cart</a>
                        <a href="checkout" className="theme-btn-2 btn btn-effect-2">Checkout</a>
                      </div>
                    </div>
                    {/* additional-info */}
                    <div className="additional-info d-none">
                      <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                      <div className="payment-method">
                        <img src="assets/img/icons/payment.png" alt="#" />
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
  </div>
  {/* MODAL AREA END */}
  {/* MODAL AREA START (Wishlist Modal) */}
  <div className="ltn__modal-area ltn__add-to-cart-modal-area">
    <div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
      <div className="modal-dialog modal-md" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="ltn__quick-view-modal-inner">
              <div className="modal-product-item">
                <div className="row">
                  <div className="col-12">
                    <div className="modal-product-img">
                      <img src="assets/img/product/7.png" alt="#" />
                    </div>
                    <div className="modal-product-info">
                      <h5><a href="product-details">3 Rooms Manhattan</a></h5>
                      <p className="added-cart"><i className="fa fa-check-circle" />  Successfully added to your Wishlist</p>
                      <div className="btn-wrapper">
                        <a href="wishlist" className="theme-btn-1 btn btn-effect-1">View Wishlist</a>
                      </div>
                    </div>
                    {/* additional-info */}
                    <div className="additional-info d-none">
                      <p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
                      <div className="payment-method">
                        <img src="assets/img/icons/payment.png" alt="#" />
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
  </div>
  {/* MODAL AREA END */}
</div>

    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ hotTag, newTag }) => {
    return (
        //  {/* Start Single Product */}
        <div className="single-product">
            <div className="product-img">
                <Link to="/product-details/123">
                    <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                    <span className={hotTag ? 'out-of-stock' : newTag && 'new'}>{hotTag ? 'hot' : newTag && 'new'}</span>
                </Link>
                <div className="button-head">
                    <div className="product-action pr-2">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye" /><span>Quick Shop</span></a>
                        <a title="Contact Us" href="#"><i className="ti-mobile" /><span>Contact Us</span></a>
                    </div>
                    <div className="product-action-2 pl-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <h3><Link to="/product-details/123">Black Sunglass For Women</Link>
                </h3>
                <div className="product-price">
                    <span className="old">$60.00</span>
                    <span>$50.00</span>
                </div>
            </div>
        </div>
        //  {/* End Single Product */}

    )
}

export default Product

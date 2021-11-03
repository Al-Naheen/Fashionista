import React from 'react'
import Header from '../components/Header'
import './ProductDetailsScreen.css'

const ProductDetailsScreen = () => {
    return (
        <div style={{ background: 'rgb(243 243 243)' }}>
            <Header></Header>
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" />
                                    </div>
                                    <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
                                    <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                                    <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
                                    <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
                                </div>
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">men's shoes fashion</h3>
                                <div className="rating" style={{ display: 'flex' }}>
                                    <div className="stars" style={{ margin: '0px 15px 0 0' }}>
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star" />
                                    </div>
                                    <span className="review-no">41 reviews</span>
                                </div>
                                <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                                    cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.
                                </p>
                                <h4 className="price mt-2">current price: <span className="ml-2">$180</span></h4>
                                <h5 className="sizes mb-4" style={{ fontWeight: 600 }}>sizes:
                                    <span style={{ fontSize: '13.5px' }} className="size" data-toggle="tooltip" title="small">s</span>
                                    <span style={{ fontSize: '17px' }} className="size" data-toggle="tooltip" title="medium">m</span>
                                    <span style={{ fontSize: '20.5px' }} className="size" data-toggle="tooltip" title="large">l</span>
                                    <span style={{ fontSize: '22px' }} className="size" data-toggle="tooltip" title="xtra large">xl</span>
                                </h5>
                                <div className="action">
                                    <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsScreen

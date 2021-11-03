import React from 'react'
import Header from '../components/Header'
import Product from '../components/Product'

const ProductsScreen = () => {
    return (
        <>
            <Header></Header>
            {/* Start Product Area */}
            <div className="product-area section" style={{ padding: '50px 0', background: 'rgb(243 243 243)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product-info">
                                <div className="nav-main">
                                    {/* Tab Nav */}
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Man</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Woman</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Kids</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Accessories</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Essential</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#prices" role="tab">Prices</a></li>
                                    </ul>
                                    {/*/ End Tab Nav */}
                                </div>
                                <div className="tab-content" id="myTabContent">
                                    {/* Start Single Tab */}
                                    <div className="tab-pane fade show active" id="man" role="tabpanel">
                                        <div className="tab-single">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <Product hotTag></Product>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <Product hotTag></Product>
                                                </div><div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <Product></Product>
                                                </div><div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <Product ></Product>
                                                </div><div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <Product newTag></Product>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Single Tab */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Product Area */}
        </>
    )
}

export default ProductsScreen

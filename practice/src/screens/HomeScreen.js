import Header from "../components/Header";
import Product from "../components/Product";
import ReactElasticCarousel from "react-elastic-carousel";
import './HomeScreen.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },
];


const HomeScreen = () => {
    return (
        <>
            <Header />

            {/* Slider Area */}
            <section className="hero-slider">
                {/* Single Slider */}
                <div className="single-slider">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-9 offset-lg-3 col-12">
                                <div className="text-inner">
                                    <div className="row">
                                        <div className="col-lg-7 col-12">
                                            <div className="hero-text">
                                                <h1><span>UP TO 50% OFF </span>Shirt For Man</h1>
                                                <p>Maboriosam in a nesciung eget magnae <br /> dapibus disting tloctio in the find
                                                    it pereri <br /> odiy maboriosm.</p>
                                                <div className="button">
                                                    <a href="#" className="btn">Shop Now!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ End Single Slider */}
            </section>
            {/*/ End Slider Area */}

            {/* Start Small Banner  */}
            <section className="small-banner section">
                <div className="container-fluid">
                    <div className="row">
                        {/* Single Banner  */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-banner">
                                <img src="https://via.placeholder.com/600x370" alt="#" />
                                <div className="content">
                                    <p>Man's Collectons</p>
                                    <h3>Summer travel <br /> collection</h3>
                                    <a href="#">Discover Now</a>
                                </div>
                            </div>
                        </div>
                        {/* /End Single Banner  */}
                        {/* Single Banner  */}
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-banner">
                                <img src="https://via.placeholder.com/600x370" alt="#" />
                                <div className="content">
                                    <p>Bag Collectons</p>
                                    <h3>Awesome Bag <br /> 2020</h3>
                                    <a href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        {/* /End Single Banner  */}
                        {/* Single Banner  */}
                        <div className="col-lg-4 col-12">
                            <div className="single-banner tab-height">
                                <img src="https://via.placeholder.com/600x370" alt="#" />
                                <div className="content">
                                    <p>Flash Sale</p>
                                    <h3>Mid Season <br /> Up to <span>40%</span> Off</h3>
                                    <a href="#">Discover Now</a>
                                </div>
                            </div>
                        </div>
                        {/* /End Single Banner  */}
                    </div>
                </div>
            </section>
            {/* End Small Banner */}

            {/* Start Most Popular */}
            <div className="product-area most-popular section">
                <div className="container" style={{ maxWidth: '1450px' }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Trending Items</h2>
                            </div>
                        </div>
                    </div>
                    <div className="product-info product_slider">

                        <ReactElasticCarousel breakPoints={breakPoints}>
                            <Product col={12} hotTag></Product>
                            <Product col={12} ></Product>
                            <Product col={12} newTag></Product>
                            <Product col={12} hotTag></Product>
                            <Product col={12} newTag></Product>
                            <Product col={12} ></Product>
                        </ReactElasticCarousel>
                    </div>
                </div>
            </div>
            {/* End Most Popular Area */}

            <section className="section free-version-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8 offset-md-2 col-xs-12">
                            <div className="section-title mb-60">
                                <span className="text-white wow fadeInDown" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInDown' }}>Eshop
                                    Free
                                    Lite version</span>
                                <h2 className="text-white wow fadeInUp" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>Currently
                                    You
                                    are using free<br /> lite Version of Eshop.</h2>
                                <p className="text-white wow fadeInUp" data-wow-delay=".6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>Please,
                                    purchase full version of the template to get all pages,<br /> features and commercial
                                    license.
                                </p>
                                <div className="button">
                                    <a href="https://wpthemesgrid.com/downloads/eshop-ecommerce-html5-template/" target="_blank" rel="nofollow" className="btn wow fadeInUp" data-wow-delay=".8s">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Start Shop Services Area */}
            <section className="shop-services section home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-rocket" />
                                <h4>Free shiping</h4>
                                <p>Orders over $100</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-reload" />
                                <h4>Free Return</h4>
                                <p>Within 30 days returns</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-lock" />
                                <h4>Sucure Payment</h4>
                                <p>100% secure payment</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Service */}
                            <div className="single-service">
                                <i className="ti-tag" />
                                <h4>Best Peice</h4>
                                <p>Guaranteed price</p>
                            </div>
                            {/* End Single Service */}
                        </div>
                    </div>
                </div>
            </section>
            {/* End Shop Services Area */}
        </>
    )
}

export default HomeScreen

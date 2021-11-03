import React from 'react'
import CartItem from '../components/CartItem'
import Header from '../components/Header'

const CartScreen = () => {
    return (
        <>
            <Header />

            {/* Shopping Cart */}
            <div className="shopping-cart section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Shopping Summery */}
                            <table className="table shopping-summery">
                                <thead>
                                    <tr className="main-hading">
                                        <th>PRODUCT</th>
                                        <th>NAME</th>
                                        <th className="text-center">UNIT PRICE</th>
                                        <th className="text-center">QUANTITY</th>
                                        <th className="text-center">TOTAL</th>
                                        <th className="text-center"><i className="ti-trash remove-icon" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <CartItem></CartItem>
                                    <CartItem></CartItem>
                                    <CartItem></CartItem>
                                    <CartItem></CartItem>
                                    <CartItem></CartItem>
                                </tbody>
                            </table>
                            {/*/ End Shopping Summery */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {/* Total Amount */}
                            <div className="total-amount">
                                <div className="row" style={{ justifyContent: 'end' }}>
                                    <div className=" col-lg-5 col-md-7 col-12">
                                        <div className="right bg-white p-5">
                                            <ul>
                                                <li>Cart Subtotal<span>$330.00</span></li>
                                                <li>Shipping<span>Free</span></li>
                                                <li>You Save<span>$20.00</span></li>
                                                <li className="last">You Pay<span>$310.00</span></li>
                                            </ul>
                                            <div className="button5">
                                                <a href="#" className="btn">Checkout</a>
                                                <a href="#" className="btn">Continue shopping</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*/ End Total Amount */}
                        </div>
                    </div>
                </div>
            </div>
            {/* / End Shopping Cart */}
        </>

    )
}

export default CartScreen

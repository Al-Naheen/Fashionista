import React from 'react'

const CartItem = () => {
    return (
        <tr>
            <td className="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#" /></td>
            <td className="product-des" data-title="Description">
                <p className="product-name"><a href="#">Women Dress</a></p>
                <p className="product-des">Maboriosam in a tonto nesciung eget distingy magndapibus.</p>
            </td>
            <td className="price" data-title="Price"><span>$110.00 </span></td>
            <td className="qty" data-title="Qty">
                {/* Input Order */}
                <div className="input-group">
                    <div className="button minus">
                        <button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                            <i className="ti-minus" />
                        </button>
                    </div>
                    <input type="text" name="quant[1]" className="input-number" data-min={1} data-max={100} defaultValue={1} />
                    <div className="button plus">
                        <button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                            <i className="ti-plus" />
                        </button>
                    </div>
                </div>
                {/*/ End Input Order */}
            </td>
            <td className="total-amount" data-title="Total"><span>$220.88</span></td>
            <td className="action" data-title="Remove"><a href="#"><i className="ti-trash remove-icon" /></a></td>
        </tr>

    )
}

export default CartItem

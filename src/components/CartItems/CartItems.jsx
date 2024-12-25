import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
// import all_product from '../components/Assets/all_products';


const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // Handle missing or undefined values gracefully
    if (!all_product || !cartItems) {
        // console.log('show all products in list', all_product);
        // console.log('show all items in list', cartItems);
        
        return <p>Loading cart items...</p>;
    }

    const totalCartAmount = getTotalCartAmount ? getTotalCartAmount() : 0;

    return (
        <div className="cartItems">
            <div className="cartItems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                const quantity = cartItems[e.id] || 0;
                if (quantity > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartItems-format cartItems-format-main">
                                <img src={e.image} alt="" className="cartIcon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartItems-quantity">{quantity}</button>
                                <p>${(e.new_price * quantity).toFixed(2)}</p>
                                <img
                                    className="cartItems-remove-icon"
                                    src={remove_icon}
                                    onClick={() => removeFromCart && removeFromCart(e.id)}
                                    alt="Remove Icon"
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartItems-total-item">
                            <p>SubTotal</p>
                            <p>${totalCartAmount.toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartItems-total-item">
                            <h2>Total</h2>
                            <h2>${totalCartAmount.toFixed(2)}</h2>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartItems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartItems-promobox">
                        <input type="text" placeholder="Promo Code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;

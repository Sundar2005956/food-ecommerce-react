
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import "../pages/styles.css";

function Cart() {
    const { cart, setCart, increment, decrement, removeItem } =
        useContext(Context);

    const [paymentMode, setPaymentMode] = useState("UPI");

    const grandTotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    function closeall() {
        setCart([]);
    }

    function handlePayment() {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        alert(`Payment Mode: ${paymentMode}\nGrand Total: ₹${grandTotal}`);
         setCart([]);
    }

    return (
        <div className="cart">
            <div id="cart-height">
                {cart.map((item) => (
                    <div key={item.idMeal} className="cart-item">
                        <img src={item.strMealThumb} alt={item.strMeal} />

                        <div className="cart-p">
                            <p>{item.idMeal} {item.strMeal}</p>
                            <p>Price: ₹{item.price}</p>
                            <p>Total: ₹{item.price * item.quantity}</p>
                            <p>Quantity: {item.quantity}</p>

                            <div id="Incre-decre">
                                <button onClick={() => increment(item.idMeal)}>
                                    +
                                </button>

                                <button onClick={() => decrement(item.idMeal)}>
                                    -
                                </button>

                                <button onClick={() => removeItem(item.idMeal)}>
                                    ×
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="payment">
            <h4>Grand Total: ₹{grandTotal}</h4>

            <label>Payment Mode: </label>
            <select value={paymentMode}onChange={(e) => setPaymentMode(e.target.value)}>
                <option value="UPI">UPI</option>
                <option value="Credit/Debit Card">Credit/Debit Card</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
            </select>

                <div className="payment-button">
            <button onClick={handlePayment}>Proceed to Pay</button>
            <button onClick={closeall} id="cart-clearall">
                Clear All
            </button>
            </div>
            </div>
        </div>
    );
}

export default Cart;

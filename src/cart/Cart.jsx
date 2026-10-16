import { useContext } from "react";
import { Context } from "../context/Context";
import "../pages/styles.css";

function Cart() {
    const { cart, setCart, increment, decrement, removeItem } =
        useContext(Context);

    function closeall() {
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
                            <p>Quantity: {item.quantity}</p>

                            <div id="Incre-decre">
                                <button onClick={() => increment(item.idMeal)}> + </button>

                                <button onClick={() => decrement(item.idMeal)}>-</button>

                                <button onClick={() => removeItem(item.idMeal)}> ×</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={closeall}id="cart-clearall"style={{float: "right", height: "30px",width: "65px", marginTop: "13px"}}>
                ClearAll
            </button>
        </div>
    );
}

export default Cart;
import { useContext } from "react"
import { Context } from "../context/Context"
import '../pages/styles.css'
function Cart() {
    const { cart, setCart } = useContext(Context);

    function closeall() {
        setCart([]);
    }

    return (<div className="cart">

        <div id="cart-height">
            {cart.map((item) => (
                <div key={item.idMeal} className="cart-item" >
                    <img src={item.strMealThumb} alt="dds" />
                    <div className="cart-p">

                        <p>{item.idMeal}   {item.strMeal} </p>
                        <p >quantity: {item.quantity}</p>
                        <div id="Incre-decre">
                            <button>+</button>
                            <button>-</button></div>

                    </div>
                </div>
            ))}
        </div>
        <button onClick={closeall} id="cart-clearall" style={{ float: "right", height: "30px", width: "65px", marginTop: "13px" }}>clear all</button>

    </div>)
}
export default Cart
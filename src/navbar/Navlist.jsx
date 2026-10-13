import { Link, useNavigate } from "react-router-dom"
import logo from '../images/logo.jpg'
import { Context } from "../context/Context";
import { useContext, useState } from "react";
import Cart from "../cart/Cart";
import cartimg from '../images/cart.svg'

function Navlist({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const { cart, search, setSearch } = useContext(Context)
    const [showCart, setShowCart] = useState(false)

    return (<><div id="navlist1">
        <img src={logo} alt="" />
        <input type="search" placeholder="search here" value={search} onChange={(e) => setSearch(e.target.value)} /><button>search</button>
        <li><Link to="/" style={{ color: "white", textDecoration: "none", padding: "3px 28px 8px 28px" }}>Home</Link> </li>
        <li> <Link to="/about" style={{ color: "white", textDecoration: "none", padding: "3px 24px 8px 28px" }}>About</Link> </li>
        <li> <Link to="/service" style={{ color: "white", textDecoration: "none", padding: "3px 24px 8px 28px" }}>Services</Link> </li>
        <li  ><button onClick={() => setShowCart(!showCart)} style={{
            width: "70px", fontWeight: "bold", fontSize: "17px",
            border: "none", height: "30px", margin: "0", backgroundColor: "transparent", color: "white", cursor: "pointer"
        }}>cart  {cart.length} </button></li>
        {showCart && <Cart />}
        <li><button onClick={() => setIsLoggedIn(false)} style={{
            width: "70px", fontWeight: "bold", fontSize: "17px",
            border: "none", height: "30px", margin: "0", backgroundColor: "transparent", color: "white", cursor: "pointer"
        }}>logout</button></li>
    </div>

        <div id="navlist2">
            <img src={logo} alt="" />
            <input type="search" /><button>search</button>
            <select
                onChange={(e) => {
                    if (e.target.value === "logout") {
                        setIsLoggedIn(false);
                    } else {
                        navigate(e.target.value);
                    }
                }}
                id="food-bar-select"
            >
                <option disabled>Menu</option>
                <option value="/">Home</option>
                <option value="/about">About</option>
                <option value="/service">Services</option>
                <option value="logout">Logout</option>
            </select>
            <button onClick={() => setShowCart(!showCart)} id="cart-button">cart {cart.length} </button>
            {showCart && <Cart />}
        </div></>)
}
export default Navlist
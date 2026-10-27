
import { useContext, useEffect, useState } from "react";
import P_structure from "./P_structure";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

function Products() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    const { addtoCart, search, cart } = useContext(Context);

    useEffect(() => {
        async function items() {
            let data = await fetch(
                "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
            );
            let res = await data.json();
            setProduct(res.meals.map((item, index) => ({...item,price: 100 + (Number(item.idMeal) % 15) * 20})));
        }

        items();
    }, []);

    return (
        <>
            {product
                .filter((item) => item.strMeal.toLowerCase().includes(search.toLowerCase()))
                .map((item) => {const isAdded = cart.some((cartItem) => cartItem.idMeal === item.idMeal );

                    return (
                        <div key={item.idMeal} style={{ display: "block" }}>
                            <div onClick={() => navigate(`/productsbyid/${item.idMeal}`)}>
                                <P_structure item={item} />
                            </div>

                            <div style={{ textAlign: "center" }} id="addTocart">
                                <button onClick={() => addtoCart(item)}style={{backgroundColor: isAdded ? "yellow" : "white",color: "black"}}>
                                    {isAdded ? "Added ✓" : "+ Add"}
                                </button>
                            </div>
                        </div>
                    );
                })}
        </>
    );
}

export default Products;

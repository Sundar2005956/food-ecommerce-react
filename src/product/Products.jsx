import { useContext, useEffect, useState } from "react";
import P_structure from "./P_structure";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

function Products() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    const { addtoCart, search } = useContext(Context);

    useEffect(() => {
        async function items() {
            let data = await fetch(
                'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
            );
            let res = await data.json();
            setProduct(res.meals);
        }

        items();
    }, []);

    return (
        <>
            {product
                .filter((item) =>
                    item.strMeal.toLowerCase().includes(search.toLowerCase())
                )
                .map((item) => (

                    <div key={item.idMeal} style={{ display: "block" }}>

                        <div
                            onClick={() =>
                                navigate(`/productsbyid/${item.idMeal}`)
                            }
                        >
                            <P_structure item={item} />
                        </div>

                        <div
                            style={{ textAlign: "center" }}
                            id="addTocart"
                        >
                            <button onClick={() => addtoCart(item)}>
                                +Add
                            </button>
                        </div>

                    </div>
                ))}
        </>
    );
}

export default Products;
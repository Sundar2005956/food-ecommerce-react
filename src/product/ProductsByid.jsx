import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../pages/styles.css'
import { Context } from "../context/Context"
import logo from '../images/logo.jpg'

function ProductsByid() {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const { addtoCart,cart } = useContext(Context)
      const isAdded = cart.some((item) => item.idMeal === product.idMeal );
    useEffect(() => {
        async function item() {
            let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            let res = await data.json()
            setProduct(res.meals[0])
        }
        item()
    }, [id])
    return (<div style={{ display: "block" }} id="byid"> 
    <center> 
        <div className="productsbyid"> 
        <img src={product.strMealThumb} alt="dds" />
         <p>{product.idMeal}: {product.strMeal}</p>
          <p>Country: {product.strCountry}</p> </div> 
          </center> 
          <div style={{ textAlign: "center", marginTop: "-10px", marginBottom: "10px" }} id="addTocart" >
            <div style={{ textAlign: "center" }} id="addTocart">
                <button onClick={() => addtoCart(item)}style={{backgroundColor: isAdded ? "yellow" : "white",color: "black"}}>
                     {isAdded ? "Added ✓" : "+ Add"}
                </button>
            </div> 
           </div> 
             <div id="aboutid"> <p> Are you tired of bland, uninspiring meals that leave you feeling 
                unsatisfied? At Vizag Lunch Box, we understand that a truly wholesome meal doesn’t just nourish 
                the body, it nourishes the heart and soul. That’s why our dedicated home chefs are passionate 
                about creating meals that are not only delicious but also infused with love and care. </p>
                 <img src={logo} alt="" /> </div> 
                 <div id="aboutid"> <p> Are you tired of bland, uninspiring meals that leave you feeling 
                unsatisfied? At Vizag Lunch Box, we understand that a truly wholesome meal doesn’t just nourish 
                the body, it nourishes the heart and soul. That’s why our dedicated home chefs are passionate 
                about creating meals that are not only delicious but also infused with love and care. </p>
                 <img src={logo} alt="" /> </div> </div>)
}
export default ProductsByid
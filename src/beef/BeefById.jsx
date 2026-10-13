import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Context } from "../context/Context";
import { useContext } from "react";
import logo from '../images/logo.jpg'

function BeefById(){
    const[item,setItem]=useState({})
    const{id}=useParams()
     const{addtoCart}=useContext(Context)
    useEffect(()=>{
        async function itemfetch(){
            let data=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            let res=await data.json()
            setItem(res.meals[0])
        }
        itemfetch();
    },[id])
    return( <div style={{display:"block"}} id="byid">
        <center><div className="productsbyid">
         <img src={item.strMealThumb} alt="dds" />
        <p>{item.idMeal}: {item.strMeal}</p>    
             
             <p>Area: {item.strArea}</p>
             <p>Country: {item.strCountry}</p>
    </div></center>
     <div style={{textAlign:"center",marginTop:"-10px",marginBottom:"10px"}} id="addTocart"><button onClick={()=>addtoCart(item)}>+Add</button></div>
            <div id="aboutid">
                     <p>Are you tired of bland, uninspiring meals that leave you feeling unsatisfied? At Vizag Lunch Box, we understand that a truly wholesome meal doesn’t just nourish the body, it nourishes the heart and soul. That’s why our dedicated home chefs are passionate about creating meals that are not only delicious but also infused with love and care.
                     </p>
                     <img src={logo} alt="" />
                     </div>
            </div>
    )
}
export default BeefById
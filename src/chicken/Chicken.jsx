
import { useEffect, useState } from "react"
import Chicken_structure from "./Chicken_structure";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";

function Chicken(){
    const[item,setItem]=useState([])
    const{addtoCart,cart}=useContext(Context)
    const navigate=useNavigate();
    useEffect(()=>{
        async function fetchitem(){
            let data=await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
            let res=await data.json();
            setItem(res.meals)
        }
        fetchitem();
    },[])

    return(<div className="chicken">
        {item.map((item)=>(
            <div style={{display:"block"}}>
            <div key={item.idMeal}  onClick={()=>navigate(`/chickenbyid/${item.idMeal}`)}>
                <Chicken_structure item={item}/>
               
            </div>
             <div style={{textAlign:"center",marginTop:"10px"}} id="addTocart"><button  onClick={()=>addtoCart(item)} style={{backgroundColor:cart.some((p)=>p.idMeal===item.idMeal)?"yellow":"white",color:"black"}}>{cart.some((p)=>p.idMeal===item.idMeal)?"Added ✓":"+Add"}</button></div>
            </div>
        ))}
    </div>)
}
export default Chicken

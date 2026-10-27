
import { useState ,useEffect} from "react"
import Beef_structure from "./Beef_structure";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";


function Beef(){
    const[item,setItem]=useState([])
    const navigate=useNavigate();
     const{addtoCart,cart}=useContext(Context)
    useEffect(()=>{
        async function itemfetch(){
            let data=await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
            let res=await data.json();
            setItem(res.meals.map((item, index) => ({...item,price: 100 + (Number(item.idMeal) % 15) * 20})));
        }
        itemfetch();
    },[])
    return(
    <div className="chicken">
    {item.map((item)=>(
          <div style={{display:"block"}}>
        <div key={item.idMeal} onClick={()=>navigate(`/beefbyid/${item.idMeal}`)}>
            <Beef_structure item={item}/>
            </div>
            <div style={{textAlign:"center",marginTop:"10px"}} id="addTocart"><button onClick={()=>addtoCart(item)} style={{backgroundColor:cart.some((p)=>p.idMeal===item.idMeal)?"yellow":"white",color:"black"}}>{cart.some((p)=>p.idMeal===item.idMeal)?"Added ✓":"+Add"}</button></div>
            </div>
    ))}
    
    </div>)
}export default Beef

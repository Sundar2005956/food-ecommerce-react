import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Vege_structure from './Vege_structure'
import { Context } from "../context/Context";
import { useContext } from "react";

function Vegetarian(){
    const[item,setItem]=useState([])
    const navigate=useNavigate();
    const{addtoCart}=useContext(Context)
    useEffect(()=>{
        async function fetchitem(){
            let data=await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
            let res=await data.json();
            setItem(res.meals)
        }
        fetchitem();
    },[])

    return(<div className="chicken">
        {item.map((item)=>(
              <div style={{display:"block"}}>
            <div key={item.idMeal}  onClick={()=>navigate(`/vegebyid/${item.idMeal}`)}>
                <Vege_structure item={item}/>
            </div>
             <div style={{textAlign:"center",marginTop:"10px"}} id="addTocart"><button onClick={()=>addtoCart(item)}>+Add</button></div>
            </div>
        ))}
    </div>)
}
export default  Vegetarian
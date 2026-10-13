import { Link } from "react-router-dom";
import '../pages/styles.css'
function FoodBar(){
    return(<div className="foodbar">
    <li><Link to="/chicken" style={{ color: "white", textDecoration: "none",padding:"10px 25px 10px 10px",marginLeft:"-8px"}}>Chicken</Link></li>
 <li><Link to="/beef" style={{ color: "white", textDecoration: "none" ,padding:"10px 30px 10px 40px",marginLeft:"-10px"}}>Beef</Link></li>
 <li><Link to="/vegetarian" style={{ color: "white", textDecoration: "none" ,padding:"10px 4px 10px 10px",marginLeft:"-8px"}}>Vegetarian</Link></li>
 <li><Link to="/breakfast" style={{ color: "white", textDecoration: "none" ,padding:"10px 13px 10px 10px",marginLeft:"-8px"}}>Breakfast</Link></li>
   </div>
   )
}
export default FoodBar
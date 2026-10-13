import Navlist from "./Navlist"
import FoodBar from "./FoodBar"
function Navbar({setIsLoggedIn}){
    return(<div style={{position:"sticky",top:"0px",width:"1245px",color:"black",backgroundColor:"rgba(1, 92, 1, 0.847)",padding:"5px",borderRadius:"6px"}}>
    <Navlist setIsLoggedIn={setIsLoggedIn}/>
    <FoodBar/>
    </div>)
}
export default Navbar
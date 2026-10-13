function Beef_structure({item}){
    return(<div id="chicken_structure">
    
    <img src={item.strMealThumb} alt="no pic" />
    <p>{item.idMeal}:  {item.strMeal}</p>
    </div>)
}
export default Beef_structure
import '../pages/styles.css'
function Vege_structure({item}){
    return(<div id="chicken_structure">
        <img src={item.strMealThumb} alt="dds" />
        <p>{item.idMeal}: {item.strMeal}</p>
        <p>Area: {item.strArea}</p>
        <p>Price: ₹{item.price}</p>
    </div>)
}
export default Vege_structure
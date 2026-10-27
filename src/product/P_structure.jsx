import '../pages/styles.css'
function P_structure({item}){
    return(<div id="p_structure">
        <img src={item.strMealThumb} alt="dds" />
        <p>{item.idMeal}: {item.strMeal}</p>
        <p>Price: ₹{item.price}</p>
    </div>)
}
export default P_structure
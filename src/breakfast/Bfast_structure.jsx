import '../pages/styles.css'
function Bfast_structure({item}){
    return(<div id="chicken_structure">
        <img src={item.strMealThumb} alt="dds" />
        <p>{item.idMeal}: {item.strMeal}</p>
        <p>Area: {item.strArea}</p>
    </div>)
}
export default  Bfast_structure
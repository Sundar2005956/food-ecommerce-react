import { createContext, useState } from "react"
export const Context=createContext();

   export function ContextSharing({children}){
    const[cart,setCart]=useState([])
      const [search, setSearch] = useState("");

   function addtoCart(product){
            let exists=cart.find((item)=>item.idMeal===product.idMeal)

            setCart(exists?cart.map((item)=>item.idMeal===product.idMeal?{...item,quantity:item.quantity+1}:item)
              :[...cart,{...product,quantity:1}])
   }
        return(<>
        <Context.Provider value={{cart,addtoCart,setCart,search,setSearch}}>
            {children}
        </Context.Provider>
        </>)
    }  
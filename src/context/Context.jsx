
import { createContext, useState } from "react";

export const Context = createContext();

export function ContextSharing({ children }) {
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");

    function addtoCart(product) {
        const exists = cart.find(
            (item) => item.idMeal === product.idMeal
        );

        setCart(
            exists
                ? cart.map((item) =>
                    item.idMeal === product.idMeal
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
                : [...cart, { ...product, quantity: 1 }]
        );
    }

    // Increment quantity
    function increment(id) {
        setCart(cart.map((item) =>
            item.idMeal === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    }

    // Decrement quantity
    function decrement(id) {
        setCart(cart.map((item) =>
            item.idMeal === id
                ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                : item
        ));
    }

    // Remove product from cart
    function removeItem(id) {
        setCart(cart.filter(
            (item) => item.idMeal !== id
        ));
    }

    return (
        <Context.Provider
            value={{cart,setCart, addtoCart,increment,decrement,removeItem,search,setSearch
            }}
        >
            {children}
        </Context.Provider>
    );
}

import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities ] = useState(0);

    const handleShowCart = ()=> setShowCart(!showCart);


    return(
        <CartContext.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                handleShowCart

            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart (){
    const context = useContext(CartContext);
    return context;
}
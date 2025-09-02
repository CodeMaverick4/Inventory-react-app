import React, { useState } from "react"

export const CartContext = React.createContext(null)

const CartContextProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([]);
    const [totalAmount,setTotalAmount] = useState(0);
    
    return(
        <CartContext.Provider value={{ cartItems, setCartItems,totalAmount,setTotalAmount}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider
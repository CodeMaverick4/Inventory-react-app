import React, { useContext } from "react";
import Button from "./Button"
import { CartContext } from "../context/CartContext";

const Topbar = ({openCart})=>{
    // console.log("topbar rendering ...");
    const {cartItems} = useContext(CartContext);
    
    return(
        <div className="topbar">
            <Button  icon={<i className="bi bi-cart-fill"></i>} label="Cart"  extraCss="cart-btn-css" totalCount={cartItems.length} onClick={openCart} />
        </div>
    )
}
export default React.memo(Topbar)
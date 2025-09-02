import { useState } from "react";

const CartItem = ({ item ,handleDelete=()=>{}}) => {
   
    return (
        <div className="list-item">

            <div className="flex-grow-1 text-wrap ">
                <h6 className="mb-1 fw-bold">{item.medicineName}</h6>
                <p className="fst-italic w-90 text-break" ><small>{item.medicineDescription}</small></p>
            </div>

            <div className="d-flex flex-column me-3 my-md-3 my-0 ">
                <small>Price: {item.price}</small>
                <small>Quantity: {item.quantity}</small>
            </div>

            <button onClick={()=>handleDelete(item)}><i className="bi bi-trash"></i></button>                 
        </div>
    );
};

export default CartItem


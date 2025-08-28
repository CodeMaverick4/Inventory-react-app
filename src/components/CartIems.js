import { useState } from "react";

const CartItem = ({ item ,handleDelete=()=>{}}) => {
    
    const [quantity,setQuantity] = useState('')
    const handleChange = (e)=>{
        setQuantity(e.target.value);
    }
    
    return (
        <div className="list-item">
            {/* Left: Medicine details */}
            <div className="flex-grow-1 text-wrap ">
                <h6 className="mb-1 fw-bold">{item.medicineName}</h6>
                <p className="fst-italic w-90 text-break" ><small>{item.medicineDescription}</small></p>
            </div>

            {/* Middle: Price × Qty */}
            <div className="d-flex flex-column me-3">
                <small>Price: {item.price}</small>
                <small>Quantity: {item.quantity}</small>
            </div>

            {/* Right: Input + Buttons */}
            <div className="d-flex align-items-center gap-2">
                <input
                    type="number"
                    placeholder="Enter Quantity"                                        
                    value={quantity}
                    onChange={handleChange}
                />
                
                <button onClick={()=>handleDelete(item.id)}><i className="bi bi-trash"></i></button>                
            </div>
        </div>
    );
};

export default CartItem


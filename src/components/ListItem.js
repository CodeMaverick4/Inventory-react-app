import { useState } from "react";
import { toast } from "react-toastify";

const ListItem = ({ item ,handleDelete=()=>{},handleAdd=()=>{}}) => {
    const [quantity,setQuantity] = useState('')
    const handleChange = (e)=>{
        const val = Number(e.target.value)
        if(val > item.quantity){
            toast.error("Quantity can be greater than total.")
            return
        }else{
            setQuantity(e.target.value);
        }        
    }

    const clearInput =()=>{
        setQuantity('')
    }
    return (
        <div className="list-item ">
            {/* Left: Medicine details */}
            <div className="flex-grow-1 text-wrap ">
                <h6 className="mb-1 fw-bold">{item.medicineName}</h6>
                <p className="fst-italic w-md-90 text-break" ><small>{item.medicineDescription}</small></p>
            </div>

            {/* Middle: Price × Qty */}
            <div className="d-flex flex-column me-3 my-3 my-md-0">
                <small>Price: {item.price}</small>
                <small>Quantity: {item.quantity}</small>
            </div>

            {/* Right: Input + Buttons */}
            <div className="d-flex align-items-center gap-2 ">
                <input
                    type="number"
                    placeholder="Enter Quantity"                                        
                    value={quantity}
                    onChange={handleChange}
                />
                <button onClick={()=>handleAdd({...item,quantity:quantity},clearInput)}> <i className="bi bi-bag-plus-fill"></i> </button>
                <button onClick={()=>handleDelete(item.id)}><i className="bi bi-trash"></i></button>                
            </div>
        </div>
    );
};

export default ListItem


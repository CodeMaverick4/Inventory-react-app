import { useCallback, useContext, useState } from "react"
import Button from "./Button"
import Input from "./Input"
import { InventoryItemsContext } from "../context/InventoryContext"

const Form = () => {
    const { setInventoryItem } = useContext(InventoryItemsContext)
    const [formData, setFormData] = useState({
        medicineName: "asd",
        medicineDescription: "asd",
        price:'10',
        quantity: '1000'
    })
    const handleAddItem = () => {
        setInventoryItem(prev=> [...prev,formData])
    }
    return (
        <div className="d-flex justify-content-between flex-wrap gap-3 mt-5 px-4 px-md-0">
            {/* value, type, placeholder, label, name, parentDivCss = "", onChange = () => { }, required = false }) => { */}
            <div className=""><Input type={'text'} value={formData.medicineName} label={"Medicine name"} placeholder={"Enter medicine name"} /></div>
            <div className=""><Input type={'text'} value={formData.medicineDescription} label={"Description"} placeholder={"Enter Description"} /></div>
            <div className=""><Input type={'number'} value={formData.price} label={"Price"} placeholder={"Enter Price"} /></div>
            <div className=""><Input type={'number'} value={formData.quantity} label={"Quantity"} placeholder={"Enter Quantity"} /></div>
            <Button extraCss="" icon={<i class="bi bi-bag-plus-fill"></i>} label="Add to Inventory" onClick={handleAddItem} />
        </div>
    )
}

export default Form
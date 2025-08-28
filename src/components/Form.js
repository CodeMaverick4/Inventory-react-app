import { useContext, useState } from "react"
import Button from "./Button"
import Input from "./Input"
import { InventoryItemsContext } from "../context/InventoryContext"
import { nanoid } from "nanoid";
import { toast } from 'react-toastify';

const Form = () => {
    const { inventoryItems, setInventoryItem } = useContext(InventoryItemsContext)
    const [formData, setFormData] = useState({
        medicineName: "",
        medicineDescription: "",
        price: '',
        quantity: ''
    })
    const handleAddItem = () => {
        // checking for empty 
        for (let key in formData) {
            if (!formData[key]) {
                toast.error("Please fill out all the fields");
                return
            }
        }
        // checking for empty  already exxit medicine
        const has = inventoryItems.find(item => item.medicineName === formData.medicineName)
        if (has) {
            toast.error("Medicine name is already present");
            return
        }

        // adding medicine
        const newId = nanoid()
        setInventoryItem(prev => [...prev, { ...formData, id: newId }]);
        setFormData({
            medicineName: "",
            medicineDescription: "",
            price: '',
            quantity: ''
        })
    }

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap gap-3 mt-5 px-4 px-md-0">
                {/* value, type, placeholder, label, name, parentDivCss = "", onChange = () => { }, required = false }) => { */}
                <div className=""><Input type={'text'} name={"medicineName"} value={formData.medicineName} label={"Medicine name"} placeholder={"Enter medicine name"} onChange={handleChange} /></div>
                <div className=""><Input type={'text'} name={"medicineDescription"} value={formData.medicineDescription} label={"Description"} placeholder={"Enter Description"} onChange={handleChange} /></div>
                <div className=""><Input type={'number'} name={"price"} value={formData.price} label={"Price"} placeholder={"Enter Price"} onChange={handleChange} /></div>
                <div className=""><Input type={'number'} name={"quantity"} value={formData.quantity} label={"Quantity"} placeholder={"Enter Quantity"} onChange={handleChange} /></div>
                <Button extraCss="" icon={<i class="bi bi-bag-plus-fill"></i>} label="Add to Inventory" onClick={handleAddItem} />
            </div>
        </div>
    )
}

export default Form
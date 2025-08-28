import { useContext } from "react"
import ListItem from "./ListItem"
import { InventoryItemsContext } from "../context/InventoryContext"
import { toast } from "react-toastify"
import { CartContext } from "../context/CartContext"

const List = () => {
    const { inventoryItems, setInventoryItem } = useContext(InventoryItemsContext);
    const {cartItems,setCartItems} = useContext(CartContext);

    const handleDelete = (id) => {        
        let removedItem = inventoryItems.find(item => item.id === id);
        let name = removedItem ? removedItem.medicineName : "";

        const filteredItems = inventoryItems.filter(item => item.id !== id);
        setInventoryItem(filteredItems)
        toast.error(`${name} is deleted successfully.`);
    }

    const handleAdd = (item) => {
        setCartItems(prev => [...prev, item])
        toast.success(`${item.medicineName} Successfully Added`);
    }
    
    return (
        <div className="list-container">
            {inventoryItems.length > 0 ? inventoryItems.map(item => (
                <ListItem item={item} handleAdd={handleAdd} handleDelete={handleDelete} />
            )) :
                <p className="text-center py-5">No Item added yet in inventory</p>
            }
        </div>
    )
}

export default List
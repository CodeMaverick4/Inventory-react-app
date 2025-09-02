import { useContext } from "react"
import ListItem from "./ListItem"
import { InventoryItemsContext } from "../context/InventoryContext"
import { toast } from "react-toastify"
import { CartContext } from "../context/CartContext"

const List = () => {
    // console.log("List rendering ...");
    const { inventoryItems, setInventoryItem } = useContext(InventoryItemsContext);
    const {cartItems,setCartItems, totalAmount,setTotalAmount} = useContext(CartContext);

    const handleDeleteInventoryItem = (id) => {        
        let removedItem = inventoryItems.find(item => item.id === id);
        let name = removedItem ? removedItem.medicineName : "";

        const filteredItems = inventoryItems.filter(item => item.id !== id);
        setInventoryItem(filteredItems)
        toast.success(`${name} is deleted successfully.`);
    }

    const handleAddToCart = (item,clearInput) => {
        if(item.quantity === 0 || item.quantity === ''){
            toast.error(`Please add minimum 1 quantity`);    
            return
        }
        const hasItem = cartItems.find(invtItem=> item.medicineName === invtItem.medicineName )
        if(hasItem){
            toast.error(`${item.medicineName} already exist`);    
            return
        }
        const updatedInventoryItems = inventoryItems.map(invtItem=>{
            if(item.id === invtItem.id){
                return {...invtItem,quantity:invtItem.quantity - item.quantity}
            }else{
                return invtItem
            }
        })
        setTotalAmount(prev=>prev+item.quantity*item.price)
        setInventoryItem(updatedInventoryItems)
        setCartItems(prev => [...prev, item])    
        clearInput()    
    }
    
    // console.log("cartItems ",cartItems)
    return (
        <div className="list-container px-md-5 px-3">
            {inventoryItems.length > 0 ? inventoryItems.map((item,index) => (
                <ListItem key={`inventory_${index}`} item={item} handleAdd={handleAddToCart} handleDelete={handleDeleteInventoryItem} />
            )) :
                <p className="text-center py-5">No Item added yet in inventory</p>
            }
        </div>
    )
}

export default List
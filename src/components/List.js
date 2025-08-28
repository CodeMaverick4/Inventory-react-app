import { useContext } from "react"
import ListItem from "./ListItem"
import { InventoryItemsContext } from "../context/InventoryContext"

const List  = ()=>{
    const {inventoryItems, setInventoryItem} = useContext(InventoryItemsContext)
    console.log(inventoryItems)
    return(
        <div className="">            
            {inventoryItems.map(item=>(
                <ListItem item={item}/>
            ))}            
        </div>
    )
}

export default List
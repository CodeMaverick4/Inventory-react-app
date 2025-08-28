import React, { useState } from "react";

export const InventoryItemsContext = React.createContext(null);


export const InventoryItemsProvider = ({ children }) => {
  const [inventoryItems, setInventoryItem] = useState([]);

  return (
    <InventoryItemsContext.Provider value={{ inventoryItems, setInventoryItem }}>
      {children}
    </InventoryItemsContext.Provider>
  )};

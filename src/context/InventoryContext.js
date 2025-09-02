import React, { useState } from "react";

export const InventoryItemsContext = React.createContext(null);


export const InventoryItemsProvider = ({ children }) => {
  const [inventoryItems, setInventoryItem] = useState([
    {
      medicineName: 'Paracetamol',
      medicineDescription: 'Used to relieve pain and reduce fever.',
      price: '50',
      quantity: '100',
      id: 'med001'
    },
    {
      medicineName: 'Ibuprofen',
      medicineDescription: 'Nonsteroidal anti-inflammatory drug (NSAID) for pain, fever, and inflammation.',
      price: '120',
      quantity: '80',
      id: 'med002'
    },
    {
      medicineName: 'Amoxicillin',
      medicineDescription: 'Antibiotic used to treat bacterial infections.',
      price: '250',
      quantity: '50',
      id: 'med003'
    },
    {
      medicineName: 'Cetirizine',
      medicineDescription: 'Antihistamine used for allergy relief.',
      price: '90',
      quantity: '60',
      id: 'med004'
    },
    {
      medicineName: 'Metformin',
      medicineDescription: 'Medicine used to control high blood sugar in type 2 diabetes.',
      price: '180',
      quantity: '70',
      id: 'med005'
    }
  ]
  );

  return (
    <InventoryItemsContext.Provider value={{ inventoryItems, setInventoryItem }}>
      {children}
    </InventoryItemsContext.Provider>
  )
};

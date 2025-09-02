import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer } from 'react-toastify';
import { CartContext } from './context/CartContext';
import { useCallback, useContext, useState } from 'react';
import Modal from './components/Modal';
import Topbar from './components/Topbar';
import List from './components/List';
import Form from './components/Form'
import CartItem from './components/CartIems';
import { InventoryItemsContext } from './context/InventoryContext';


function App() {
  const [openModal, setOpenModal] = useState(false);
  const { cartItems, setCartItems, totalAmount, setTotalAmount } = useContext(CartContext);
  const { inventoryItems, setInventoryItem } = useContext(InventoryItemsContext);

  const handleDelete = (item) => {
    const updatedInventoryItems = inventoryItems.map(invtItem => {
      if (invtItem.id === item.id) {
        return { ...invtItem, quantity: Number(item.quantity) + Number(invtItem.quantity) }
      } else {
        return { ...invtItem }
      }
    });
    console.log(updatedInventoryItems)
    setInventoryItem(updatedInventoryItems);
    const filteredCartItems = cartItems.filter(ctsItems => ctsItems.id !== item.id);
    setCartItems(filteredCartItems);
    setTotalAmount(prev => prev - (item.quantity * item.price))
  }

  const openCart = useCallback(() => {
    setOpenModal(true)
  },[]);

  const HandleOrder = ()=>{
    console.log("My Order --> ",cartItems);
    setCartItems([]);
    setTotalAmount(0);
  }
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className='d-flex justify-content-center'>
        {/* <MainLayout /> */}
        <Topbar openCart={openCart} />
        <div className="d-flex flex-column gap-4 justify-content-center h-100vh w-md-75  mx-auto mt-5">
          <Form />
          <List />
        </div>
      </div>

      {openModal &&
        <Modal onClose={() => setOpenModal(false)}>
          {cartItems.length > 0 ? cartItems.map(item => (
            <CartItem item={item} handleDelete={handleDelete} />
          ))
            : <p className="text-center py-5">No Items in cart.</p>
          }

          <div className="border border-white rounded-3 p-2 d-flex justify-content-between align-items-center">
            <p >Total : {totalAmount}</p>
            <button className="btn btn-primary" onClick={HandleOrder}>Order</button>
          </div>
        </Modal>}

    </>
  );
}

export default App;

import './App.css';
import { InventoryItemsContext, InventoryItemsProvider } from './context/InventoryContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer } from 'react-toastify';
import CartContextProvider from './context/CartContext';
import { useContext, useState } from 'react';
import Modal from './components/Modal';
import Topbar from './components/Topbar';
import List from './components/List';
import Form from './components/Form'
import ListItem from './components/ListItem';


function App() {
  const [openModal, setOpenModal] = useState(false);
  const { inventoryItems, setInventoryItem } = useContext(InventoryItemsContext);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <InventoryItemsProvider>
        <CartContextProvider>
          <div className='d-flex justify-content-center'>
            {/* <MainLayout /> */}
            <Topbar setOpenModal={() => setOpenModal(true)} />
            <div className="d-flex flex-column gap-4 justify-content-center h-100vh w-md-75  mx-auto mt-5">
              <Form />
              <List />
            </div>
          </div>

          {openModal &&
            <Modal onClose={() => setOpenModal(false)}>
              {inventoryItems.length > 0 ? inventoryItems.map(item => (
                <ListItem item={item}  handleDelete={handleDelete} />
              )) :
                <p className="text-center py-5">No Items in cart.</p>
              }
            </Modal>}

        </CartContextProvider>
      </InventoryItemsProvider>
    </>
  );
}

export default App;

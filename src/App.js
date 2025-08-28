import './App.css';
import { InventoryItemsProvider } from './context/InventoryContext';
import MainLayout from './layout/mainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <InventoryItemsProvider>
      <div className='d-flex justify-content-center'>
        <MainLayout />
      </div>
    </InventoryItemsProvider>
  );
}

export default App;

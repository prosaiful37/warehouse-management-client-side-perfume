import logo from './logo.svg';
import { Route, Routes} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/Shared/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register/Register';
import InventoryDetails from './InventoryDetails/InventoryDetails';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import AddInventory from './pages/AddInventory/AddInventory';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          
          <Route path='/product/:inventoryId' element={
            <RequireAuth>
              <InventoryDetails></InventoryDetails>
            </RequireAuth>

          }></Route>
          <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
          <Route path='/addInventory' element={<AddInventory></AddInventory>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

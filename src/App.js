import './App.css';
import './Pages/GlobalCss/grobal.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import 'boxicons';
import Header from './Static/Header/Header';
import Footer from './Static/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn&Register/Login/LogIn';
import Register from './Pages/LogIn&Register/Register/Register';
import Page404 from './Pages/Page404/Page404';
import VerfPage from './Pages/VerfPage/VerfPage';
import RequireAuth from './Pages/LogIn&Register/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookInfo from './Pages/BookInfo/BookInfo';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Additem from './Pages/Additem/Additem';


function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<VerfPage></VerfPage>} />
        <Route path="/book/:id" element={
          <RequireAuth>
            <BookInfo></BookInfo>
          </RequireAuth>
        } />
        <Route path="/manageinventory" element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        } />
        <Route path="/additem" element={
          <RequireAuth>
            <Additem></Additem>
          </RequireAuth>
        } />
        <Route path="*" element={<Page404 />} />

      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;

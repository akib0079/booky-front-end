import './App.css';
import './Pages/GlobalCss/grobal.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import 'boxicons';
import Header from './Static/Header/Header';
import Footer from './Static/Footer/Footer';
import Home from './Pages/Home/Home';
import Page404 from './Pages/Page404/Page404';



function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;

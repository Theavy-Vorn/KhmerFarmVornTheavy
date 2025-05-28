import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VegitablePage from './pages/Cateogries/VegitablePage';
import FruitPage from './pages/Cateogries/FruitPage';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import SlideComponent from './components/SlideComponent';
import SearchComponent from './components/SearchComponent';
import ReadFuritPage from './pages/ReadFuritPage';
import ReadVegitablePage from './pages/ReadVegitablePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';

function App() {
  return (
      <BrowserRouter>
        <Routes >
          <Route path={"/"} element={<MainLayout />}>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/vegitableproduct"} element={<VegitablePage />} />
            <Route path={"/fruitproduct"} element={<FruitPage />} />
            <Route path={"/service"} element={<ServicePage />} />
          </Route>
          
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/contact"} element={<ContactPage />} />
          <Route path={"/fruits/:id"} element={<ReadFuritPage />} />
          <Route path={"/vegitables/:id"} element={<ReadVegitablePage />} />
         
        </Routes>
      </BrowserRouter>

  );
}

export default App;

function MainLayout(){
  return(
     <>
        <NavbarComponent />
        <SearchComponent />
        <SlideComponent />
        <Outlet />
        <FooterComponent />
     </>
  )
}

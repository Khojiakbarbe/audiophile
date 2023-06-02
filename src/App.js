import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Categorys from './Components/Categorys';
import { CategoryProvider, ProductsProvider } from './Components/DataProvider/DataContext'
import Details from './Components/Details/Details';

import './App.scss';
import Checkout from './Components/Checkout';


function App() {
  return (
    <BrowserRouter>
      <CategoryProvider>
        <ProductsProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<Categorys />} />
            <Route path='/category/:id' element={<Details />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </ProductsProvider>
      </CategoryProvider>
    </BrowserRouter>
  );
}

export default App;
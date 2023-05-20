import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';

import './App.scss';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Categorys from './Components/Categorys';

import { CategoryProvider } from './Components/DataProvider/DataContext'
import Details from './Components/Details';

function App() {
  return (
    <BrowserRouter>
      <CategoryProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Categorys />} />
          <Route path='/category/:id' element={<Details />} />
        </Routes>
        <Footer />
      </CategoryProvider>
    </BrowserRouter>
  );
}

export default App;
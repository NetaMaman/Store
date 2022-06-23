import {Route, Routes} from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage';
import Cart from './pages/CartPage';
import FruitsPage from './pages/FruitsPage'
import VeggiesPage from './pages/VeggiesPage';
import SpecialPage from './pages/SpecialPage';
import Layout from './components/layout/Layout'
import {useState} from 'react';
import AboutPage from './pages/AboutPage';
import DeliveriesPage from './pages/DeliveriesPage';
import ContactUsPage from './pages/ContactUsPage';
function App() {

  const [color, changeColor] = useState("#fbff0020");

  document.body.style.backgroundColor = color;
  return (
    <Layout>
    <main>
    <Routes>
    <Route path='/' element= {<Homepage />} /> 
    <Route path='/products/fruits' element={<FruitsPage />} />
    <Route path='/products/veggies' element={<VeggiesPage />} />
    <Route path='/products/special' element={<SpecialPage />} />
    <Route path='/fruits' element={<FruitsPage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/deliveries' element={<DeliveriesPage />} />
    <Route path='/contact-us' element={<ContactUsPage />} />
    {/* <Route path='/users/sign-in' element={<SignInPage />} /> */}
    {/* <Route path='/product' exact element= {<Cart />} /> */}
    <Route path='/cart' element= {<Cart />} />
    </Routes>
    </main>
    </Layout>

    // <Route path='/'>
    //   <Homepage />
    // </Route>

    // <Route path='/cart'>
    //   <Cart />
    // </Route>
    // <Route path='/'>
    //   <Homepage />
    // </Route>
  
  
);
}

/* <div>
<Appbar />
<Homepage />
<Cart />
  </div> */
export default App;

import {Route, Routes} from 'react-router-dom'
import Appbar from './components/Appbar';
import './App.css';
import Homepage from './components/Homepage';
import Cart from './components/Cart';
import FruitsPage from './pages/FruitsPage'
import VeggiesPage from './pages/VeggiesPage';
import SpecialPage from './pages/SpecialPage';
import Layout from './components/layout/Layout'
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <Layout>
    <main>
    <Routes>
    <Route path='/' element= {<Homepage />} /> 
    <Route path='/products/fruits' element={<FruitsPage />} />
    <Route path='/products/veggies' element={<VeggiesPage />} />
    <Route path='/products/special' element={<SpecialPage />} />
    <Route path='/fruits' element={<FruitsPage />} />
    <Route path='/users/sign-in' element={<SignInPage />} />
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

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import classes from './Appbar.module.css'
// // import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import IconButton from '@mui/material/IconButton';
// // import Stack from '@mui/material/Stack';
// import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';
// import { TbTallymark1 } from "react-icons/tb";
import logo from './resources/logo.png'
// import Popup from './ui/Popup'
import {useState} from "react";
import SignIn from './SignIn';


    
    
  
    import * as Icons from 'react-icons/fa';
    // import Button from './Buttons';
    import classes from './Appbar.module.css';
    
    // sx={{merginLeft:"auto"}}
    function Appbar(){
      const [isOpen, setIsOpen]= useState(false);
    
      function togglePopup(){
        setIsOpen(!isOpen);
      }
      return (
        <header className={classes.header} >
        <div>
        <NavLink to='/'><img className={classes.logo} src={logo}  height={125}/></NavLink>
          {/* The_Garden <Icons.FaTree/>  */}
         </div>
        <nav>
            <ul>
                <li>
                    <NavLink to='/products/fruits'>
                    <button className={`${classes.btn}  ${classes.btn_center}`}>Fruits </button>
                    </NavLink>
                    {/* <Link to='/'>All Meetups</Link> */}
                </li>
                <li>
                    <NavLink to='/products/veggies'>
                   <button className={`${classes.btn}  ${classes.btn_center}`}>Veggies </button>
                   </NavLink>
                    {/* <Link to='/new-meetup'>Add New meetups</Link> */}
                </li>
                <li>
                  <NavLink to="/products/special">
                  <button className={`${classes.btn}  ${classes.btn_center}`}>Speciales </button>
                  </NavLink>
                    {/* <Link to='/favorites'>My Favorites</Link> */}
                </li>
                <li>
        <div>
          <ul>
          
          </ul>
        <Icons.FaSistrix/>
        <button className={`${classes.btn}  ${classes.btn_left}`}  onClick={togglePopup}>sign in</button>
            {isOpen && <SignIn handleClose={togglePopup}/>}
        </div>
        <button className={`${classes.btn}  ${classes.btn_left}`}>Sign up</button>
                </li>
            </ul>
        </nav>
    </header>
    );
  }
  export default Appbar;
  
  {/* {isOpen && <Popup
    handleClose={togglePopup}
    content= {
      <div> <h2> Sign in</h2>
      <p>add things</p>
      </div>
    }/>
  } */}
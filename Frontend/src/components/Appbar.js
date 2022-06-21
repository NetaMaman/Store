import { NavLink } from 'react-router-dom';
import logo from './resources/logo.png'
import {useState} from "react";
import SignInForm from './SignInForm';
import * as Icons from 'react-icons/fa';
import classes from './Appbar.module.css';
    
    function Appbar(){
      const [isOpen, setIsOpen]= useState(false);
    
      function togglePopup(){
        setIsOpen(!isOpen);
      }
      return (
        <header className={classes.header} >
        <div>
        <NavLink to='/'><img className={classes.logo} src={logo}  height={125}/></NavLink>
         </div>
        <nav>
            <ul>
                <li>
                    <NavLink to='/products/fruits'>
                    <button className={`${classes.btn}  ${classes.btn_center}`}>Fruits </button>
                    </NavLink>
                 </li>
                <li>
                    <NavLink to='/products/veggies'>
                   <button className={`${classes.btn}  ${classes.btn_center}`}>Veggies </button>
                   </NavLink>

                </li>
                <li>
                  <NavLink to="/products/special">
                  <button className={`${classes.btn}  ${classes.btn_center}`}>Speciales </button>
                  </NavLink>
                </li>
      
          </ul>
          <div>
          <ul>
            <div className={`${classes.btn}  ${classes.btn_left}  ${classes.search}`}>
            <Icons.FaSistrix/>
            </div>
        
        <NavLink to="/users/sign-in">
        <button className={`${classes.btn}  ${classes.btn_left}`}  onClick={togglePopup}>sign in</button>
            {isOpen && <SignInForm handleClose={togglePopup}/>}
            </NavLink>
        
        <button className={`${classes.btn}  ${classes.btn_left}`}>Sign up</button>
        <NavLink to='cart'>
        <div className={`${classes.btn}  ${classes.btn_left} ${classes.cart}`} ><Icons.FaCartPlus/></div>
        </NavLink>
        </ul>
        </div>
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
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


// function Appbar(){
  //   };
  
  
  //    return (
    //     <header className={classes.header}>
    //       <div  className={classes.appbar}>
    //       <Box sx={{ flexGrow: 1, backgroundColor: 'darkkhaki' }}>
    
    //       <AppBar className={classes.appbar} position="static">
    //         <Toolbar>
    //           <IconButton
    //             size="large"
    //             edge="start"
    //             color="inherit"
    //             aria-label="menu"
    //             sx={{ mr: 2 }}
    //           >
    //           </IconButton>
    //           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //           </Typography>
    
    //             <NavLink to='/products/fruits'>
    //             <Button className={`${classes.btn}  ${classes.btn_center}`} color="inherit">Fruits </Button>
    //             </NavLink>
    //             <NavLink to='/products/veggies'>
    //             <Button className={`${classes.btn}  ${classes.btn_center}`} color="inherit">Veggies </Button>
    //             </NavLink>
    //             <NavLink to="/products/special">
    //             <Button className={`${classes.btn}  ${classes.btn_center}`} color="inherit">Speciales </Button>
    //             </NavLink>
    
    
    //           {/* <Stack direction="row" spacing={-1}>   */}
    
    //           <IconButton color="inherit" aria-label="search"> 
    //           <SearchIcon />
    //           </IconButton>
    //           <TbTallymark1 className={classes.separator} />
    
    
    //           <IconButton color="inherit" aria-label="add to shopping cart">
    //             <ShoppingCartIcon />
    
    //           </IconButton>
    
    //         </Toolbar>
    //       </AppBar>
    
    //     </Box>
    //     </div>
    //   </header>
    //    );
    // }
    
    // export default Appbar;
    
    
    
    import {Link} from 'react-router-dom'
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
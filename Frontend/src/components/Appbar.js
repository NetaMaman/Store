import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import classes from './Appbar.module.css'
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';
import { TbTallymark1 } from "react-icons/tb";
import logo from './resources/logo.png'



function Appbar(){


   return (
    <header className={classes.header}>
      <div  className={classes.appbar}>
      <Box sx={{ flexGrow: 1, backgroundColor: 'darkkhaki' }}>
        
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to='/'><img  className={classes.logo} src={logo} alt='logo image' height={125}/></NavLink>
          </Typography>

            <NavLink to='/products/fruits'>
            <Button className={`${classes.btn}  ${classes.btn_center}`} color="inherit">Fruits </Button>
            </NavLink>
            <NavLink to='/products/veggies'>
            <Button className={`${classes.btn}  ${classes.btn_center}`} color="inherit">Veggies </Button>
            </NavLink>
            <NavLink to="/products/special">
            <Button className={`${classes.btn}  ${classes.btn_center}`} color="inherit">Speciales </Button>
            </NavLink>
            
              
          {/* <Stack direction="row" spacing={-1}>   */}
          
          <IconButton color="inherit" aria-label="search"> 
          <SearchIcon />
          </IconButton>
          <TbTallymark1 className={classes.separator} />

          <NavLink to='/users/sign-in'>
          <Button className={`${classes.btn}  ${classes.btn_left}`} color="inherit">sign in</Button>
          {/* {isOpen && <Popup
            handleClose={togglePopup}
            content= {
              <div> <h2> Sign in</h2>
              <p>add things</p>
              </div>
            }/>
          } */}
       
          </NavLink>
          <Button className={`${classes.btn}  ${classes.btn_left}`} color="inherit">Sign up</Button>

          <IconButton color="inherit" aria-label="add to shopping cart">
            <ShoppingCartIcon />
      
          </IconButton>
     
        </Toolbar>
      </AppBar>
      
    </Box>
    </div>
  </header>
   );
}

export default Appbar;




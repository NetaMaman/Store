import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import * as Icons from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import classes from './MenuBar.module.css'

function MenuBar() {
    return (
        <div>
        <Menu menuButton={<MenuButton className={classes.menuButtonClassName}><Icons.FaBars className={classes.icon} /></MenuButton>} menuClassName={classes.menuClassName} direction='bottom'>
            <NavLink to='/about'> <MenuItem >About</MenuItem></NavLink>
           <NavLink to='/deliveries'><MenuItem>Deliveries</MenuItem></NavLink>
            <NavLink to='/contact-us'><MenuItem className={classes.menuItemClassName}>Contact Us</MenuItem></NavLink>
            
            
        </Menu>
        </div>
    );
}

export default MenuBar;
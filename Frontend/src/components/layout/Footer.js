import classes from './Footer.module.css';
import * as Icons from 'react-icons/fa';

function Footer(){
    return(
        <footer className={classes.footer}>
           <div>
           <div className={classes.icon}/><Icons.FaRegCopyright />
           MonCherry 
           </div>


       

        </footer>
    );
}

export default Footer;
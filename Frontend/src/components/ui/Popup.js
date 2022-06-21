import classes from './Popup.module.css'
import {useState} from 'react'
import Backdrop from '../layout/Backdrop';


function Popup(props){
    const [popupIsOpen, setPopupIsOpen]= useState(false); 


    function closePopupHandler(){
        setPopupIsOpen(!popupIsOpen); 
    }

    return(
        <div className={classes.popup_box}>
            <div className={classes.box}>
                <button className={classes.btn_close} onClick={props.handleClose}>X</button>
                {props.children}

            </div>
            <div>
                {popupIsOpen && <Backdrop onClick={closePopupHandler} />}
            </div>
        </div>
    );
}

export default Popup;


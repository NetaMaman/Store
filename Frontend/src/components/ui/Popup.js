import classes from './Popup.module.css'


function Popup(props){

    return(
        <div className={classes.popup_box}>
            <div className={classes.box}>
                <button className={classes.btn_close} onClick={props.handleClose}>X</button>
                {props.children}

            </div>
        </div>
    );
}

export default Popup;
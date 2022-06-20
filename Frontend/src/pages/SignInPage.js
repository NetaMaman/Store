
import { useHistory } from 'react-router-dom';
import {useRef} from 'react';
import Popup from "../components/ui/Popup";
import classes from "./SignIn.module.css"


function SignIn(props){
    // const userNameInputRef = useRef();
    const emailInputRef = useRef();
    // const emailInputRef = useRef();
    const passwordInputRef = useRef();

   function submitHandler(event){
    event.preventDefault();

    const enteredEmail= emailInputRef.current.value; 
    const enteredPassword= passwordInputRef.current.value; 

    const user={
        email: enteredEmail,
        password: enteredPassword
    };

    console.log(user);

   }


return (
<Popup className={classes.popup} handleClose={props.handleClose}>
    <h1>Sign in</h1>
    <form className= {classes.form} onSubmit={submitHandler}>
    {/* <div className={classes.control}>
        <label htmlFor="user-name">User Name</label>
        <input type='text' required id='user-name'/>
    </div> */}
    {/* <div className={`${classes.last_name}  ${classes.text}`}>
        <label htmlFor="Last-name">Last Name</label>
        <input type='text' required id='Last-name'/>
    </div> */}
    <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type='email' required id='email' ref={emailInputRef}/>
    </div>
    <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type='password' required id='password' ref={passwordInputRef} />
    </div>
    {/* <div className={classes.control}>
        <label htmlFor="password">Confim password</label>
        <input type='password' required id='password'/>
    </div> */}
    <div>
        <button className={classes.btn_sign}>sign in</button> </div>
    </form>

<h1>Sign Up</h1>


</Popup>



);
}

export default SignIn;
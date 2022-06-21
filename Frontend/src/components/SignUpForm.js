import {useRef} from 'react';
import Popup from "./ui/Popup";
import classes from "./SignInForm.module.css"

function SignUpForm(props){
    const userPrivateNameInputRef = useRef();
    const userLastNameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();

   function submitHandler(event){
    event.preventDefault();

    const enteredUserPrivateName= userPrivateNameInputRef.current.value; 
    const enteredUserLastName= userLastNameInputRef.current.value; 
    const enteredEmail= emailInputRef.current.value; 
    const enteredPassword= passwordInputRef.current.value; 
    const enteredConfirmPassword=confirmPasswordInputRef.current.value;

    const user={
        privateName:enteredUserPrivateName, 
        lastName: enteredUserLastName,
        email: enteredEmail,
        password: enteredPassword,
        confirmPassword: enteredConfirmPassword,
    };

    console.log(user);
    props.loginUserHandler(user);
   }
   

return (
<Popup className={classes.popup} handleClose={props.handleClose}>
    <h1>Sign up</h1>
    <form className= {classes.form} onSubmit={submitHandler}>
    <div className={classes.control}>
        <label htmlFor="user-name">User Name</label>
        <input type='text' required id='user-name'/>
    </div> 
    <br /> 

    <div className={`${classes.last_name}  ${classes.text}`}>
        <label htmlFor="Last-name">Last Name</label>
        <input type='text' required id='Last-name'/>
    </div>
    <br />

    <div className={classes.lable}>
        <label htmlFor="email">Email</label>
        <br/>

        <input className={classes.input} type='email' required id='email' ref={emailInputRef}/>
    </div>
    <div className={classes.lable}>
        <label htmlFor="password">Password</label>
        <br/>

        <input className={classes.input} type='password' required id='password' ref={passwordInputRef} />
    </div>
    <div className={classes.control}>
        <label htmlFor="password">Confim password</label>
        <input type='password' required id='password'/>
    </div>
    <div>
        <button className={classes.btn_sign}>login</button> </div>
    </form>
</Popup>



);
}

export default SignUpForm;
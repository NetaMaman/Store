
import {useRef} from 'react';
import Popup from "./ui/Popup";
import classes from "./SignInForm.module.css"
import {useNavigate} from 'react-router-dom';


function SignInForm(props){
    const navigate= useNavigate();

    function signinUserHandler(user){
        fetch('localhost:3000',
        {
            method: 'POST',
            body:JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // .then(()=> {navigate(-1, {replace:true});})
        props.handleClose();
        // navigate(-1);
    }


    const emailInputRef = useRef();
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
    signinUserHandler(user);
   }

return (
<Popup className={classes.popup} handleClose={props.handleClose}>
    <h1>Sign in</h1>
    <form className= {classes.form} onSubmit={submitHandler}>
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
    <div>
        <button className={classes.btn_sign}>sign in</button> </div>
    </form>



</Popup>



);
}

export default SignInForm;
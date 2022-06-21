import {useRef} from 'react';
import Popup from "./ui/Popup";
import classes from "./SignUp.module.css"
import {useNavigate} from 'react-router-dom';


function SignUpForm(props){
    const navigate= useNavigate();

    function signupUserHandler(user){
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

    const PrivateNameInputRef = useRef();
    const LastNameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();

   function submitSignUpHandler(event){
    console.log('in subbmit');
    event.preventDefault();

    const enteredUserPrivateName= PrivateNameInputRef.current.value; 
    const enteredUserLastName= LastNameInputRef.current.value; 
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
    signupUserHandler(user);
   }
   

return (
<Popup className={classes.popup} handleClose={props.handleClose}>
    
    <h1>Sign up</h1>
    <form className= {classes.form} onSubmit={submitSignUpHandler}>

    <div className={classes.lable}>
        <label htmlFor="privaetName">User Name</label>
        <input type='text' required id='privaetName' ref={PrivateNameInputRef}/>
    </div> 
    <br /> 

    <div className={`${classes.last_name}  ${classes.lable}`}>
        <label htmlFor="LastName">Last Name</label>
        <input type='text' required id='LastName'  ref={LastNameInputRef}/>
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

    <div className={classes.lable}>
        <label htmlFor="confirmPassword">Confim password</label>
        <input type='password' required id='confirmPassword' ref={confirmPasswordInputRef}/>
    </div>
    <br />

    <div>
        <button className={classes.btn_sign}>login</button> 
        </div>
    </form>
</Popup>



);
}

export default SignUpForm;
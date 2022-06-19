import Popup from "./ui/Popup";
import classes from "./SignIn.module.css"



function SignIn(props){
return (
<Popup handleClose={props.handleClose}>
    <h1>Sign in</h1>
    <form className= {classes.form}>
    <div className={classes.control}>
        <label htmlFor="Pname">First Name</label>
        <input type='text' required id='name'/>
    </div>
    <div className={classes.control}>
        <label htmlFor="Pname">Last Name</label>
        <input type='text' required id='Pname'/>
    </div>
    <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type='email' required id='email'/>
    </div>
    <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type='password' required id='password'/>
    </div>
    <div className={classes.control}>
        <label htmlFor="password">Confim password</label>
        <input type='password' required id='password'/>
    </div>
    </form>
<h1>Sign Up</h1>






</Popup>



);
}

export default SignIn;
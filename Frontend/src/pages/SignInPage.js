import classes from './SignInPage.module.css';
// import { useHistory } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import SignInForm from '../components/SignInForm';


function SignInPage(){
    // const history=useHistory();
    const history= useNavigate();
    function loginUserHandler(user){
        fetch('localhost:3000',
        {
            method: 'POST',
            body:JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // .then(()=> {history.replace('/');})

    }


    

    return(
    <section>
        <SignInForm   onLoginUser={loginUserHandler}/>
    
    </section>);
}

export default SignInPage;

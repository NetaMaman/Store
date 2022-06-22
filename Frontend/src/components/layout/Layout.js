import Appbar from "../Appbar";
import Footer from "./Footer";
import classes from './Layout.module.css'

function Layout(props){
    return (
<div>
    <Appbar />
    <main className={classes.main}>
        {props.children}
    </main>
    <Footer />

</div>


    );
}

export default Layout;
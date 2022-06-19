import Appbar from "../Appbar";
import classes from './Layout.module.css'

function Layout(props){
    return (
<div>
    <Appbar />
    <main className={classes.main}>
        {props.children}
    </main>
</div>

    );
}

export default Layout;
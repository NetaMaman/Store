import classes from './Product.module.css'
import Card from './ui/Card';

function Product(props){
    return (
        <Card>
    <li className={classes.product_display} id={props.id}>
        <div className={classes.product_name}> 
            <h3>{props.name}</h3>
        </div>
        <div className={classes.image}> 
            <img src={props.image} alt={props.name} height={125}></img>
        </div>
        <div className={classes.description}> 
            <p>{props.description}</p>
        </div>
    </li>
    </Card>);
}
export default Product;
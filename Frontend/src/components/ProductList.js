import classes from './ProductList.module.css';
import Product from './Product'

function ProductList(props){
    return ( 
    <ul className={classes.list}>
        {props.products.map(product => <Product 
        key={product.id} 
        id={product.id} 
        name={product.name} 
        image={product.image} 
        description={product.description} 

        />)}
    </ul>
    );
}

export default ProductList;
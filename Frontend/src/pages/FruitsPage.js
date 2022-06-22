import Product from "../components/Product";
import ProductList from "../components/ProductList";
import banana from '../components/resources/banana.png'
import broccoli from '../components/resources/purple broccoli.png'


const FRUITS_ARRAY=[
    {
        id:'1',
        name:'Banana', 
        image: banana ,
        description:'white banana'
    }, 
    {
        id:'2',
        name:'Purple Broccoli', 
        image:broccoli,
        description:'purple broccoli', 
    }
];


function FruitsPage(){
    return (
    <section>
    <h1> all fruits</h1>
    <ProductList products={FRUITS_ARRAY} /> 
    </section>);
}

export default FruitsPage;
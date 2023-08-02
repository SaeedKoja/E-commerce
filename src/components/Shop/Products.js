import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id:1,
    title:"First Product",
    price:200,
  },
  {
    id:2,
    title:"Second Product",
    price:300,
  },
  {
    id:3,
    title:"Third Product",
    price:100,
  },
  {
    id:4,
    title:"Fourth Product",
    price:500,
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>{
          return(
            <ProductItem
            title={product.title}
            price={product.price}
            id={product.id}
            key={product.id}
          />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;

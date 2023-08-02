import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartAction } from "../store/cart";
import { useDispatch } from "react-redux";


const ProductItem = (props) => {
  const { title, price, id } = props;
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(cartAction.addItemToCart({id,title,price}))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiAction } from '../store/ui';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector((state)=>state.cart.totalQuantity)
  const showCart = useSelector((state)=>state.ui.showCart)
  const showCartHandler = () => {
    dispatch(uiAction.toglleShow())
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>{showCart ? "Product" : "My Cart"}</span>
     {!showCart && <span className={classes.badge}>{totalQuantity}</span>}
    </button>
  );
};

export default CartButton;

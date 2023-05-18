import { useDispatch } from "react-redux";
import dishesData from "../../data/DishesData";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({ cartItem }) => {
  const dishes = dishesData.find((item) => item.id === cartItem.dishId);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{dishes.name}</p>
      <p>{cartItem.quantity} portion(s)</p>
      <p>Price: ${dishes.price * cartItem.quantity}</p>
      <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width='30px' alt="delete"/>
    </span>
    </div>
  );
};
export default CartItem;

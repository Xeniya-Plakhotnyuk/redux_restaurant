import dishesData from "../../data/DishesData";

const CartItem = ({ cartItem }) => {
  const dishes = dishesData.find((item) => item.id === cartItem.dishId);

  return (
    <div>
      <p>{dishes.name}</p>
      <p>{cartItem.quantity} portion(s)</p>
      <p>Price: ${dishes.price * cartItem.quantity}</p>
    </div>
  );
};
export default CartItem;

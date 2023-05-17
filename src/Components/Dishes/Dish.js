import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";


const Dish =({dish}) =>{

const [quantity, setQuantity] = useState(1);


    return(
<div>
<div>
<h2>
{dish.name}
</h2>
<p>$ {dish.price}</p>
<img src={dish.img} width='500px' alt="dish_photo"/>
</div>
<ChangeQuantity quantity={quantity} setQuantity = {setQuantity} />
<button>ADD TO CART</button>

</div>

    )
}

export default Dish;
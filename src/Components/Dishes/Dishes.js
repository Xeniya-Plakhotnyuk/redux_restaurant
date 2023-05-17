import { useSelector } from 'react-redux';
import dishesData from '../../data/DishesData';
import { getSelectedCategory } from '../../redux/dishesSlices';
import Dish from './Dish';

const Dishes =() => {

        const selectedCategory = useSelector(getSelectedCategory);

    return(
         <div>
        {dishesData
        .filter( (dish) =>{
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === dish.category;
        })
        
        .map(element =>
            <Dish dish ={element}  />)}
       
        </div>
    )
}
export default Dishes;
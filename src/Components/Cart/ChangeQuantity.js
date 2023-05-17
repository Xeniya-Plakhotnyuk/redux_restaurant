
 const ChangeQuantity = ({quantity, setQuantity}) =>{

const addQuantity = () =>{
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
}


const removeQuantity = () =>{
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
}
    return(
        <div className="App">
        <div>
          <button onClick={addQuantity}>+</button>  
        </div>
        
        
        <span>{quantity}</span>
        
        <div>
        <button onClick = {removeQuantity}>-</button>
        </div>
        </div>
    )

}

export default ChangeQuantity;
export const Cart = ({cartItems,removeFromCart,updateQuantity}) => {
    const getTotal = () => {
        return cartItems
            .reduce((total,item)=> total+item.price*item.quantity,0);
    };
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {
                    cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x {' '}
                            <input type="number" value={item.quantity}
                                   onChange={(event) => updateQuantity(item.id,event.target.value)}/> = ${item.price*item.quntity}
                            <button onClick={()=> {removeFromCart(item.id)}}>Remove From Cart</button>
                        </li>
                    ))
                }
            </ul>

            <p>Total = {getTotal()}</p>
        </div>
    );
}
export const Product = ({product,addCart}) => {
    return (<div>
        <img src={product.thumbnail} alt={product.title}/>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>$ {product.price}</p>
        <button onClick={addCart}>Add To Cart</button>
    </div>);
}

const ProductItemList = ({product, current, index, navigate}) =>{
    // console.log(index, current);
    return (
        <li className={current === index ? "list-group-item active" : "list-group-item"}
            style={{cursor:'pointer'}}
            onClick={navigate}
        >
            {product.productName} {(product.productCategory)}
        </li>
        )
}

export default ProductItemList;
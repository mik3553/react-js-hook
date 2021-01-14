
import ProductItemList from "./ProductItemList";
import Buttons from "./Buttons";

const ProductList = ({products, next, previous, current, navigate}) => {
    const allProducts = products.slice(current , current +5).map((product, index ) => <ProductItemList key={product.productId}
                                                                                               product={product}
                                                                                               current={current} index={index}
                                                                                               navigate={()=>navigate(index)} />)
    return (
        <section>
            <div>
                <ul className="list-group">
                    {allProducts}
                </ul>
            </div>
            <Buttons next={next} previous={previous} />
        </section>
    );
};

export default ProductList;

import ProductItemList from "./ProductItemList";
import Buttons from "./Buttons";

const ProductList = ({products, next, previous, current, navigate}) => {

    const allProducts = products
        .map((product, index ) =>
            <ProductItemList key={product.productId} product={product}
                             current={current} index={index}
                             navigate={()=>navigate(index)}
            />)
        .slice(current >= products.length -5 ? products.length -5 : current  , current + 5)


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
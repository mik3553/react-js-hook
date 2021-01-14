import {Fragment} from 'react';

const ProductCard = ({product, addProduct}) => {

    return (
        <Fragment>
            {product && // <== si le produit exite on affiche
                <section className="card" >
                    <img className="card-img-top" src={product.productImage} alt="" />
                    <div className="card-body">
                        <h3 className="card-title">{product.productName}</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum ipsum</p>
                        <p>{product.productCategory}</p>
                        <span>{product.salePrice.toFixed(2)} euros</span>
                    </div>
                    <div className="card-body">
                        <button disabled={!product.productStock} className={product.productStock ? "btn btn-success" : "btn btn-danger"} onClick={ () => addProduct(product) }>
                            {product.productStock ? 'Ajouter' : 'Non disponible'}
                        </button>
                    </div>
                </section>
            }
        </Fragment>
    )
}

export default ProductCard;
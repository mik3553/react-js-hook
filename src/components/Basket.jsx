
const Basket = ({basket, total}) => {
    return (
        <section>
            <h2>Panier</h2>
            <p>Nombre d'items : <span>{basket.length}</span></p>
            <p style={{backgroundColor:'lightgreen', width:'10rem'}}>Total : <span>{total.toFixed(2)} euros</span></p>
        </section>
    )
}

export default Basket;
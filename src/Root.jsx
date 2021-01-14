import { useState, useEffect } from "react";
import Header from './components/Header';
import Basket from './components/Basket';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard'

import {products}  from './data/products';

const Root = () => {

    //initialisation des states
    let [current, setCurrent] = useState(0);
    const [basket, setBasket] = useState([]);
    let [total, setTotal] = useState(0);
    const [allProducts, setAllProducts] = useState([]);
    const [search, setSearch] = useState('');

    // useEffect() similaire à componentdidmount()
    useEffect(() => {
        // le rendu du tableau se fait dynamiquement par rapport a la search bar (recherche sensible à la casse "Category 1")
        const searched = allProducts.filter(product => (product.productCategory === search));
        if(searched.length > 0)
            setAllProducts(searched); // <= si recherche existe alors on "setState" le allProducts
        else
            setAllProducts(products) // <= si non on le charge avec les datas (import products ligne 7)

    },[search]) // <= tableau de dépendances (component update si search change de valeur (dépend du onChange() sur le input Header))

    // fonctions de l'appli
    const next = () => (setCurrent(current === allProducts.length - 1 ? 0 : current +1));
    const previous = () => setCurrent(current <= 0 ? allProducts.length -1 : current -1 );
    const navigate = (i) => setCurrent(i);

    const addProduct = (product) => {
        if(!basket.includes(product)){ // <= si le produit n'existe pas dans le state basket alors on le rajoute
            setBasket([...basket, product]);
            setTotal(total += product.salePrice ); // <== dans la foulée on update le total du produit ajoutée
        }else{
            setBasket([...basket])
        }
    }

    return(
        <main style={{width: '20rem'}}>
            <Header setSearch={setSearch} />
            <Basket basket={basket} total={total} />
            <ProductList products={allProducts} current={current} next={next} previous={previous} navigate={navigate}  />
            <ProductCard product={allProducts[current]} addProduct={addProduct} />
        </main>
    )
}

export default Root;

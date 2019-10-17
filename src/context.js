import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data'
const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        productOfshop: storeProducts,
        detailProduct: detailProduct,
        cart: []
    }
    getItem = (id) => {
        const product = this.state.productOfshop.find(item => item.id == id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })

    };
    findindex(id) {
        const obj = this.state.productOfshop;
        for (let i = 0; i <= obj.length; i++) {
            if (obj[i].id == id) {
                return i
            }
        }
    }
    addToCart = (id) => {
        const product = this.getItem(id);
        let tempProduct = this.state.productOfshop;
        const index = this.findindex(id);
        console.log(index);
        tempProduct[index].inCart = true;
        this.setState(() => {
            return {
                cart: [...this.state.cart, product],
                productOfshop: tempProduct,
            }
        })

    };
    deleteFromCart = (id) => {
        const product = this.getItem(id);
        let products = this.state.productOfshop;
        const index = this.findindex(id);
        products[index].inCart = false;
        const newCart = this.state.cart.filter(c => c.id != id);
        this.setState({ productOfshop: products, cart: newCart }, () => {
            console.log(this.state.productOfshop[id])
        });

    };
    render() {
        return (
            <ProductContext.Provider value={{

                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                deleteFromCart: this.deleteFromCart
            }}>

                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer }
import React, { Component } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import Social from './Social'

export default class Shop extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                { id: 1, title: 'Album 1', price: 5, img: '/src/components/Shop/images/Album 1.png' },
                { id: 2, title: 'Album 2', price: 15, img: '/src/components/Shop/images/Album 2.png' },
                { id: 3, title: 'Album 3', price: 20, img: '/src/components/Shop/images/Album 3.png' },
                { id: 4, title: 'Album 4', price: 100, img: '/src/components/Shop/images/Album 4.png' },
                { id: 5, title: 'Coffee', price: 5, img: '/src/components/Shop/images/Cofee.png' },
                { id: 6, title: 'Shirt', price: 50, img: '/src/components/Shop/images/Shirt.png' },
            ],

            shoppingCart: [],
            socials: [
                { id: 1, href: 'https://www.youtube.com', img: '/src/components/Shop/images/YouTube Logo.png' },
                { id: 2, href: 'https://www.spotify.com', img: '/src/components/Shop/images/Spotify Logo.png' },
                { id: 3, href: 'https://www.facebook.com', img: '/src/components/Shop/images/Facebook Logo.png' },
            ],
        }

        this.addProductToCart = this.addProductToCart.bind(this)
        this.removeProduct = this.removeProduct.bind(this)
        this.emptyShoppingCart = this.emptyShoppingCart.bind(this)
    
    }

    addProductToCart(productId){
        
        let mainProduct = this.state.products.find(product => {
            return product.id === productId
        })
        

        this.setState(prevstate => {
            return{
                shoppingCart : [...prevstate.shoppingCart , mainProduct]
            }
        })
    }
    
    removeProduct(productId){
        

        let newProduct = this.state.shoppingCart.filter(product => {
            return product.id !== productId
        })
        
        
        this.setState({
            shoppingCart: newProduct
        })
    }

    emptyShoppingCart(){
        this.setState({
            shoppingCart : []
        })
    }

    render() {
        return (
            <>
                <header className="main-header">
                    <nav class="main-nav nav">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">STORE</a></li>
                            <li><a href="#">ABOUT</a></li>
                        </ul>
                    </nav>
                    <h1 class="band-name band-name-large">parya shop</h1>
                </header>
                <section class="container content-section">
                    <div class="shop-items">
                        {this.state.products.map(product => (
                            <Product key={Math.random()} {...product} onAddProduct={this.addProductToCart}/>
                        ))}
                        
                    </div>
                </section>
                <section class="container content-section">
                    <h2 class="section-header">CART</h2>
                    <div class="cart-row">
                        <span class="cart-item cart-header cart-column">ITEM</span>
                        <span class="cart-price cart-header cart-column">PRICE</span>
                        <span class="cart-quantity cart-header cart-column">Doing</span>
                    </div>
                    <div class="cart-items">
                        {this.state.shoppingCart.map(product => (
                            <CartProduct key={product.id} {...product} onRemoveProduct={this.removeProduct}/>
                        ))}
                        


                    </div>
                    <button class="btn btn-primary btn-purchase" type="button"
                        onClick={this.emptyShoppingCart}
                    >
                        Empty Cart
                    </button>
                </section>
                <footer class="main-footer">
                    <div class="container main-footer-container">
                        <h3 class="band-name">The Generics</h3>
                        <ul class="nav footer-nav">
                            {this.state.socials.map(social => (
                                <Social key={social.id} {...social}/>
                            ))}
                            
                        </ul>
                    </div>
                </footer>


            </>
        )
    }
}
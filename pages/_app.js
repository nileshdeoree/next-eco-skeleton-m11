import { Component, useEffect, useState } from "react"
import Cart from "../Components/Cart"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import '../styles/globals.css'
import { useRouter } from "next/router"
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps: { session, ...pageProps } }) {

    const [cart, setCart] = useState({})
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        try {
            if (localStorage.getItem('cart')) {
                setCart(JSON.parse(localStorage.getItem('cart')))
                saveCart(JSON.parse(localStorage.getItem('cart')))
            }
        } catch (error) {
            console.error(error.message)
            localStorage.clear()
        }
    }, [])

    const saveCart = (myCart) => {
        localStorage.setItem('cart', JSON.stringify(myCart))
        let subt = 0;
        let keys = Object.keys(myCart)
        for (let i = 0; i < keys.length; i++) {
            subt += myCart[keys[i]].price * myCart[keys[i]].qty
        }

        setSubTotal(subt)
    }

    const addToCart = (itemCode, qty, price, name, size, variant) => {
        let newCart = cart
        if (itemCode in cart) {
            newCart[itemCode].qty = newCart[itemCode].qty + qty
        }
        else {
            newCart[itemCode] = { qty: 1, price, name, size, variant }
        }

        setCart(newCart)
        saveCart(newCart)
    }

    const removeFromCart = (itemCode, qty) => {
        let newCart = JSON.parse(JSON.stringify(cart))
        if (itemCode in cart) {
            newCart[itemCode].qty = newCart[itemCode].qty - qty
        }
        if (newCart[itemCode]["qty"] <= 0) {
            delete newCart[itemCode]
        }

        setCart(newCart)
        saveCart(newCart)
    }

    const clearCart = () => {
        setCart({})
        saveCart({})
    }

    return <>

        <SessionProvider session={session}>

            <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
            <Navbar />
            <Component clearCart={clearCart} cart={cart} subTotal={subTotal} addToCart={addToCart} {...pageProps} />
            <Footer />

        </SessionProvider>

    </>
}

export default MyApp
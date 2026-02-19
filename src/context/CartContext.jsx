import { createContext, useContext, useMemo, useState } from "react";

import cartData from '../data/data.json'
const MyContext = createContext();
const MyUseContext = () => useContext(MyContext)
import { ToastContainer, toast } from 'react-toastify';
const MyProvider = ({ children }) => {


    const [cart, setCart] = useState([]);
    // add Items in Cart

    const addToCart = (product) => {

        setCart(prev => {
            const existingId = prev.find((item) => item.id == product.id);
            if (existingId) {
                return prev.map(item =>
                    item.id === product.id ?
                        { ...item, quantity: item.quantity + 1, } :
                        item,
                )
            } else {
                return [...prev, { ...product, quantity: 1 }]
            }


        });
        toast.success("ADD TO CART!");
    };




    const removeFromCart = (id, removeAll = false) => {
        setCart(prev => {
            // 🔴 Agar pura item delete karna ho
            if (removeAll) {
                return prev.filter(item => item.id !== id);
            }

            // 🟢 Sirf quantity 1 kam karni ho
            const updatedCart = prev.map(item => item.id === id ?
                { ...item, quantity: item.quantity - 1 } : item);

            return updatedCart.filter(item => item.quantity > 0);


        }

        );

        if (removeAll) return toast.success("CLEAR TO CART!");

        toast.success(" Remove TO CART! 🤣🤣🤣 ");

    };

    // clear cart

    const clearCart = () => setCart([]);



    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);


    const totalPrice = useMemo(() => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cart]);



    // 



    const values = {

        addToCart,
        removeFromCart,
        cart,
        clearCart,
        cartCount,
        totalPrice,
    }
    return (
        <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>)
}

export { MyProvider, MyUseContext }
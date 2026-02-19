
import { create } from 'zustand'
import { persist } from 'zustand/middleware';


const inputName = {
    name: '',
    address: '',
    city: '',
    zip: '',
};

const store = ((set, get) => ({
    cart: [],
    input: { ...inputName },
    
    formdata: (data) => set({ input: data }),
    resetForm:()=>set({input:{...inputName}}), 


    addToCart: (product) => {
        set(state => {
            const existingId = state.cart.find(item => item.id === product.id);
            if (existingId) {
                return {
                    cart: state.cart.map(item => item.id === product.id ?
                        { ...item, quantity: item.quantity + 1 } : item
                    )
                }
            };

            return {
                cart: [...state.cart, { ...product, quantity: 1 }]
            }
        });
    },

    removeFromCart: (productId, removeAll = false) => {
        set(state => {
            if (removeAll) {
                return {
                    cart: state.cart.filter(item => item.id !== productId)
                };
            };
            return {
                cart: state.cart.map(item => {
                    if (item.quantity === 1) {
                        return item.id === productId ?
                            { ...item, quantity: 1 } : item
                    }
                    return item.id === productId ?
                        { ...item, quantity: item.quantity - 1 } : item
                })
            }
        });
    },
    clearCart:()=>set({cart:[]}),


}));


const useMyStore = create( persist (store,{name:'MyStore'}));

export default useMyStore;
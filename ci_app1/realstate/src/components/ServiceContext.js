import React, { createContext, useState } from 'react'

export const ServiceContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < 5 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export default function ServiceContextProvider(props) {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // const getTotalCartAmount = () => {
    //   let totalAmount = 0;
    //   for (const item in cartItems) {
    //     if (cartItems[item] > 0) {
    //       let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
    //       totalAmount += cartItems[item] * itemInfo.price;
    //     }
    //   }
    //   return totalAmount;
    // };
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] +1}));
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] -1}));
    }
    const updateCartItemCount = (newAmount, itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };
  
    const checkout = () => {
      setCartItems(getDefaultCart());
    };

    const contextValue = {
      cartItems,
      addToCart,
      updateCartItemCount,
      removeFromCart,
      // getTotalCartAmount,
      checkout,
    };
  return (
    <div>
        <ServiceContext.Provider value={contextValue}>{props.children}</ServiceContext.Provider>
    </div>
  )
}

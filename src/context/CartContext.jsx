import { createContext, useContext, useState } from "react";

//Creamos el contexto (el "espacio global")
const CartContext = createContext();

// Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {
  // Estado que guarda los productos del carrito
  const [cartItems, setCartItems] = useState([]);

  // 🟢 Agregar un producto al carrito
  const addToCart = (product) => {
    // Si el producto ya existe, aumentamos la cantidad
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
      // Mapeamos para actualizar la cantidad
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Lo agregamos nuevo con quantity = 1
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  //Eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ⚪ Vaciar el carrito
  const clearCart = () => setCartItems([]);

  //Retornamos el proveedor con las funciones y el estado
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Creamos un hook personalizado para acceder más fácil
export const useCart = () => useContext(CartContext);

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define Product Type
export interface Product {
    id: string;
    name: string;
    image: string;
    price: string;
    description: string;
    inStock: boolean;
}

// Define Cart Item Type
export interface CartItem extends Product {
    quantity: number;
}

// Define Context Type
interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    totalAmount: number;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: Product) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find((item) => item.id === product.id);
            if (itemExists) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        setCartItems((prevItems) => {
            if (quantity < 1) return prevItems.filter((item) => item.id !== id);
            return prevItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            );
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    // Calculate Total Amount
    const totalAmount = cartItems.reduce((total, item) => {
        // Parse price removing currency symbol and commas
        const priceValue = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
        return total + priceValue * item.quantity;
    }, 0);

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalAmount, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
}; 

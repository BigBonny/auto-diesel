"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type StoreUser = {
  id?: string;
  email?: string;
  firstname?: string;
  lastname?: string;
};

export type CartProduct = {
  id: number;
  name: string;
  price: number;
  img: string;
};

type CartItem = CartProduct & {
  quantity: number;
};

type StoreContextValue = {
  cart: CartItem[];
  cartCount: number;
  user: StoreUser | null;
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: number) => void;
  updateCartQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  signIn: (email: string, password: string) => Promise<string | null>;
  signOut: () => Promise<void>;
};

const CART_STORAGE_KEY = "auto-diesel-cart";
const USER_STORAGE_KEY = "auto-diesel-user";
const StoreContext = createContext<StoreContextValue | null>(null);

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<StoreUser | null>(null);
  const [hasRestoredCart, setHasRestoredCart] = useState(false);

  useEffect(() => {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart) as CartItem[]);
      } catch {
        window.localStorage.removeItem(CART_STORAGE_KEY);
      }
    }

    const storedUser = window.localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser) as StoreUser);
      } catch {
        window.localStorage.removeItem(USER_STORAGE_KEY);
      }
    }

    setHasRestoredCart(true);
  }, []);

  useEffect(() => {
    if (hasRestoredCart) {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, hasRestoredCart]);

  const value = useMemo<StoreContextValue>(() => ({
    cart,
    cartCount: cart.reduce((total, item) => total + item.quantity, 0),
    user,
    addToCart: (product) => {
      setCart((currentCart) => {
        const existingItem = currentCart.find((item) => item.id === product.id);

        if (existingItem) {
          return currentCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
        }

        return [...currentCart, { ...product, quantity: 1 }];
      });
    },
    removeFromCart: (id) => setCart((currentCart) => currentCart.filter((item) => item.id !== id)),
    updateCartQuantity: (id, quantity) => setCart((currentCart) => quantity < 1 ? currentCart.filter((item) => item.id !== id) : currentCart.map((item) => item.id === id ? { ...item, quantity } : item)),
    clearCart: () => setCart([]),
    signIn: async (email, password) => {
      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json() as { error?: string; user?: StoreUser };
        if (!response.ok || !data.user) return data.error ?? "Connexion impossible.";
        setUser(data.user);
        window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data.user));
        return null;
      } catch {
        return "Le service de connexion est temporairement indisponible.";
      }
    },
    signOut: async () => {
      setUser(null);
      window.localStorage.removeItem(USER_STORAGE_KEY);
    },
  }), [cart, user]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used inside StoreProvider");
  }

  return context;
}

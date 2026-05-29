import React, { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Load products from localStorage if exist
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  const [removedProducts, setRemovedProducts] = useState(() => {
    const saved = localStorage.getItem("removedProducts");
    return saved ? JSON.parse(saved) : [];
  });

  // Save products whenever they change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("removedProducts", JSON.stringify(removedProducts));
  }, [removedProducts]);

  // ➕ Add product
  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  // ❌ Remove product
  const removeProduct = (id) => {
    const productToRemove = products.find((p) => p.id === id);
    if (productToRemove) {
      setRemovedProducts((prev) => [
        ...prev,
        { ...productToRemove, removedDate: new Date().toLocaleDateString() },
      ]);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  // ✏️ Update product
  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  // 🧹 Clear all products (added + removed)
  const clearAllProducts = () => {
    setProducts([]);
    setRemovedProducts([]);
    localStorage.removeItem("products");
    localStorage.removeItem("removedProducts");
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        removedProducts,
        addProduct,
        removeProduct,
        updateProduct, // ✅ added here
        clearAllProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);

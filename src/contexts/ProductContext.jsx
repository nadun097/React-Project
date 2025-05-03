import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	// products state
	const [products, setProducts] = useState([]);
	// fetch products
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products"); // Fixed typo in URL
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				if (Array.isArray(data)) {
					setProducts(data); // Ensure only valid data is set
				} else {
					console.error("Unexpected data format:", data);
				}
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};
		fetchProducts();
	}, []);

	return (
		<ProductContext.Provider value={{ products }}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;

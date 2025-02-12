import { createContext, ReactNode, useState } from "react"
import { Product, ProductContextProps } from "../Types/product"

export const ProductContext = createContext<ProductContextProps>({
    products: [],
    fetchProductsQuery: async () => {
        console.warn("fetchProductsQuery no está implementado correctamente en ProductContextProvider")
    },
    fetchProductsCategory: async () => {
        console.warn("fetchProductsCategory no está implementado correctamente en ProductContextProvider")
    },
    loading: true,
})

const ProductContextProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    const fetchProductsQuery = async (query: string) => {
        try {
            setLoading(true)
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            if (!response.ok) {
                throw new Error("Error al buscar productos")
            }
            const data = await response.json()
            setProducts(data.results)
        } catch (err) {
            console.error("Error al cargar productos por búsqueda:", err)
        } finally {
            setLoading(false)
        }
    }

    const fetchProductsCategory = async (category: string) => {
        try {
            setLoading(true)
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${category}`)
            if (!response.ok) {
                throw new Error("Error al buscar productos")
            }
            const data = await response.json()
            setProducts(data.results)
        } catch (err) {
            console.error("Error al cargar productos por categoría:", err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <ProductContext.Provider value={{ products, fetchProductsQuery, fetchProductsCategory, loading }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
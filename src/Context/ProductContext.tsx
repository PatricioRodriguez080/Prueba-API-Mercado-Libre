import { createContext, ReactNode, useEffect, useState } from "react"
import { Product, ProductContextProps } from "../Types/product"

export const ProductContext = createContext<ProductContextProps>({
    products: [],
    fetchProducts: async () => {
        console.warn("fetchProducts fue llamado fuera de ProductContextProvider")
    },
    loading: true
})

const ProductContextProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchInitialProducts = async () => {
            try {
                const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=monitor`)
                if (!response.ok) {
                    throw new Error("Error al buscar productos iniciales")
                }
                const data = await response.json()
                setProducts(data.results.slice(0, 12))
                setLoading(false)
            } catch (err) {
                console.error("Error al cargar los productos iniciales", err)
            }
        }
        fetchInitialProducts()
    }, [])

    const fetchProducts = async (query: string) => {
        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            if (!response.ok) {
                throw new Error("Error al buscar productos")
            }
            const data = await response.json()
            setProducts(data.results)
            setLoading(false)
        } catch (err) {
            console.error("Error al llamar productos", err)
        }
    }

    return (
        <ProductContext.Provider value={{ products, fetchProducts, loading }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
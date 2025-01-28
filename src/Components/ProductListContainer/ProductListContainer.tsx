import ProductList from "./ProductList"
import SkeletonProductList from "../Skeletons/SkeletonProductList/SkeletonProductList"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Product } from "../../Types/product"

const ProductListContainer = () => {
    const { category, query } = useParams()
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    const fetchProductsCategory = async (category: string | undefined) => {
        try {
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

    const fetchProductsQuery = async (query: string) => {
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

    useEffect(() => {
        setLoading(true)
        if (category) {
            fetchProductsCategory(category)
        } else if (query) {
            fetchProductsQuery(query)
        }
    }, [category, query])

    return (
        <div>
            {loading ? <SkeletonProductList /> : <ProductList products={products} />}
        </div>
    )
}

export default ProductListContainer
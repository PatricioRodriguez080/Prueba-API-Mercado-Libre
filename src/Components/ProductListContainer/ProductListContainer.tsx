import ProductList from "./ProductList"
import SkeletonProductList from "../Skeletons/SkeletonProductList/SkeletonProductList"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Product } from "../../Types/product"

const ProductListContainer = () => {
    const { category } = useParams()
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    const fetchProductsCategory = async (category: string | undefined) => {
        if (!category) return
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

    useEffect(() => {
        setLoading(true)
        fetchProductsCategory(category)
    }, [category])

    return (
        <div>
            {loading ? <SkeletonProductList /> : <ProductList products={products} />}
        </div>
    )
}

export default ProductListContainer
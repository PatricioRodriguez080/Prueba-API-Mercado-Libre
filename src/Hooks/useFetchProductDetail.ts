import { useState } from "react"
import { ProductDetail } from "../Types/product"

export const useFetchProductDetail = () => {
    const [product, setProduct] = useState<ProductDetail>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchProductDetail = async (productId: string) => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(`https://api.mercadolibre.com/items/${productId}`)
            if (!response.ok) {
                throw new Error("Error al buscar productos")
            }
            const data = await response.json()
            setProduct(data)
        } catch (err) {
            setError((err as Error).message)
        } finally {
            setLoading(false)
        }
    }

    return { product, loading, error, fetchProductDetail }
}
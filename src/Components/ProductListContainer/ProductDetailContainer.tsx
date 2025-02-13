import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useFetchProductDetail } from "../../Hooks/useFetchProductDetail"
import ProductDetailComponent from "./ProductDetailComponent"

const ProductDetailContainer = () => {
    const { productId } = useParams<{ productId: string }>()
    const { product, fetchProductDetail, loading } = useFetchProductDetail()

    useEffect(() => {
        if (productId) {
            fetchProductDetail(productId)
        }
    }, [productId])

    return (
        loading ? (
            <h2>cargando</h2>
        ) : (
            <ProductDetailComponent product={product!} />
        )

    )
}

export default ProductDetailContainer
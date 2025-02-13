import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useFetchProductDetail } from "../../Hooks/useFetchProductDetail"
import SkeletonProductDetail from "../Skeletons/SkeletonProductDetail/SkeletonProductDetail"
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
        loading ? <SkeletonProductDetail /> : <ProductDetailComponent product={product!} />
    )
}

export default ProductDetailContainer
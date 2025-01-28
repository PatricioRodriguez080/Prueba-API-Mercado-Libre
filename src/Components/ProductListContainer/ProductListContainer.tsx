import ProductList from "./ProductList"
import SkeletonProductList from "../Skeletons/SkeletonProductList/SkeletonProductList"
import { useParams } from "react-router-dom"
import { ProductContext } from "../../Context/ProductContext"
import { useContext, useEffect } from "react"

const ProductListContainer = () => {
    const { category, query } = useParams()
    const { fetchProductsQuery, fetchProductsCategory, products, loading } = useContext(ProductContext)

    useEffect(() => {
        if (category) {
            fetchProductsCategory(category)
        } else if (query) {
            fetchProductsQuery(query)
        }
    }, [category, query, fetchProductsCategory, fetchProductsQuery])

    return (
        <div>
            {loading ? <SkeletonProductList /> : <ProductList products={products} />}
        </div>
    )
}

export default ProductListContainer
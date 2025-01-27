import { useContext } from "react"
import ProductList from "./ProductList"
import { ProductContext } from "../../Context/ProductContext"
import SkeletonProductList from "../Skeletons/SkeletonProductList/SkeletonProductList"

const ProductListContainer = () => {
    const { products, loading } = useContext(ProductContext)

    return (
        <div>
            {loading ? <SkeletonProductList /> : <ProductList products={products} />}
        </div>
    )
}

export default ProductListContainer
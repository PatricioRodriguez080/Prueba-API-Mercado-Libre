import { useContext } from "react"
import ProductList from "./ProductList"
import { ProductContext } from "../Context/ProductContext"

const ProductListContainer = () => {
    const { products, loading } = useContext(ProductContext)

    return (
        <div>
            {loading ? (
                <h1 className="text-white">CARGANDO PRODUCTOS</h1>
            ) : (
                <ProductList products={products} />
            )}
        </div>
    )
}

export default ProductListContainer
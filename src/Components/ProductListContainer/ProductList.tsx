import { Product } from "../../Types/product"
import ProductCard from "../ProductListContainer/ProductCard"

interface ProductListProps {
    products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 justify-center mt-4">
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div >
    )
}

export default ProductList
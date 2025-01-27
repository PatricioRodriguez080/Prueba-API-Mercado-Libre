import { Product } from "../Types/product"
import ProductCard from "./ProductCard"

interface ProductListProps {
    products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 justify-center mt-4">
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div >
    )
}

export default ProductList
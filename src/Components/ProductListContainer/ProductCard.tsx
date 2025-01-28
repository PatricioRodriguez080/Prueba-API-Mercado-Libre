import "../../index.css"
import { Link } from "react-router-dom"
import { Product } from "../../Types/product"

interface ProductCardProps {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="bg-gray-700 rounded-lg overflow-hidden flex flex-col">
            <Link to={`/${product.id}`} style={{ textDecoration: 'none' }}>
                <div className="w-full h-48 rounded-t-lg">
                    <img
                        src={product.thumbnail}
                        className="rounded-t-lg object-cover h-full"
                        alt={product.title}
                    />
                </div>
                <div className="p-4">
                    <h5 className="text-xl font-bold text-white">{product.title}</h5>
                    <p className="font-normal text-gray-300">
                        {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(product.price)}
                    </p>
                </div>
            </Link>
            <div className="p-4 pt-0">
                <a
                    href={product.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg p-2.5"
                >
                    Ver Producto ML
                </a>
            </div>
        </div>
    )
}

export default ProductCard
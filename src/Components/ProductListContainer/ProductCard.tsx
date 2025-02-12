import "../../index.css";
import { Link } from "react-router-dom";
import { Product } from "../../Types/product";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="bg-gray-700 rounded-lg p-4 mt-4">
            <div className="flex flex-col items-center lg:flex-row">
                <div className="flex justify-center p-4 lg:w-1/3">
                    <img
                        src={product.thumbnail}
                        className="object-cover w-40 h-40 rounded-lg"
                        alt={product.title}
                    />
                </div>

                <div className="p-4 text-center lg:text-left lg:w-2/3 lg:py-4 lg:pl-0">
                    <Link to={`/${product.id}`} style={{ textDecoration: "none" }}>
                        <h5 className="text-xl font-bold text-white">{product.title}</h5>
                        <p className="font-normal text-gray-300">
                            {new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(product.price)}
                        </p>
                    </Link>
                    <a
                        href={product.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-700 hover:bg-blue-800 text-white rounded-lg px-4 py-2 mt-4"
                    >
                        Ver Producto ML
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
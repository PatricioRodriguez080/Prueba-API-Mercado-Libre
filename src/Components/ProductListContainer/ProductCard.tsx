import "../../index.css";
import { Link } from "react-router-dom";
import { Product } from "../../Types/product";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="bg-gray-700 rounded-lg overflow-hidden flex flex-col lg:flex-row">
            <div className="w-full h-48 lg:w-1/3">
                <img
                    src={product.thumbnail}
                    className="object-cover h-[150px] w-[150px] rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                    alt={product.title}
                />
            </div>

            <div className="flex flex-col justify-between p-4 lg:w-2/3 lg:py-4 lg:pl-0">
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
                    className="text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg p-2.5 mt-4"
                >
                    Ver Producto ML
                </a>
            </div>
        </div>
    )
}

export default ProductCard
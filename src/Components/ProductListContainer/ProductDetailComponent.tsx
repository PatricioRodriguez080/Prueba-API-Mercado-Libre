import type { ProductDetail } from "../../Types/product"

interface ProductDetailComponentProps {
    product: ProductDetail
}

const ProductDetailComponent = ({ product }: ProductDetailComponentProps) => {

    const getColor = (product: ProductDetail): string => {
        return product.attributes.find(attr => attr.id === "COLOR" || attr.name.toLowerCase() === "color")?.value_name || "No especificado"
    }

    return (
        <div className="bg-gray-700 rounded-lg p-4 mt-4">
            <div className="flex flex-col items-center lg:flex-row">
                <div className="flex justify-center p-4 lg:w-1/4">
                    <img
                        src={product?.thumbnail}
                        className="object-cover w-60 h-60 rounded-lg"
                        alt={product?.title}
                    />
                </div>

                <div className="p-4 text-center space-y-1 lg:text-left lg:w-2/4 lg:py-4 lg:pl-0">
                    <h5 className="text-xl font-bold text-white">{product?.title}</h5>
                    <p className="font-normal text-gray-300">
                        <strong>
                            {new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(product?.price ?? 0)}
                        </strong>
                    </p>
                    <p className="font-normal text-gray-300">Color: {product ? getColor(product) : "Cargando..."}</p>
                    <p className="font-normal text-gray-300">Condicion: {product?.condition}</p>
                    <p className="font-normal text-gray-300">{product?.warranty}</p>
                    <a
                        href={product?.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-700 hover:bg-blue-800 text-white rounded-lg px-4 py-2 mt-4"
                    >
                        Ver Producto ML
                    </a>
                </div>
            </div>
        </div>)
}

export default ProductDetailComponent
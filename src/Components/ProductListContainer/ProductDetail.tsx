import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useFetchProductDetail } from "../../Hooks/useFetchProductDetail"

const ProductDetail = () => {
    const { productId } = useParams<{ productId: string }>()
    const { product, fetchProductDetail } = useFetchProductDetail()

    useEffect(() => {
        fetchProductDetail(productId!) // Con ! le digo que nunca sera undefined, simepre me va a llegar un id //
    }, [productId])

    return (
        <div className="bg-gray-700 rounded-lg mt-4">
            <div className="flex flex-col lg:flex-row">
                <div className="flex justify-center p-4 rounded-lg lg:p-0">
                    <img src={product?.thumbnail} className="w-full sm:w-80 md:w-96 h-80 rounded-lg object-cover" alt={product?.title} />                    {/* va ? porque me aseguro de no intentar acceder a una propiedad nula */}
                </div>
                <div className="p-4">
                    <div>
                        <h5 className="text-white text-xl font-bold">{product?.title}</h5>
                        <p className="font-normal text-gray-300">${product?.price}</p>
                        <p><small>{product?.description}</small></p>
                        <p><small>{product?.avaliableQuantity}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
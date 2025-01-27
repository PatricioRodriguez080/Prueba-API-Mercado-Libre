import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useFetchProductDetail } from "../../Hooks/useFetchProductDetail"

const ProductDetail = () => {
    const { productId } = useParams<{ productId: string }>()
    const { product, fetchProductDetail, loading, error } = useFetchProductDetail()

    useEffect(() => {
        fetchProductDetail(productId!) // Con ! le digo que nunca sera undefined, simepre me va a llegar un id //
    }, [productId])

    return (
        <div>
            <div className="card mb-3" style={{ width: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product?.thumbnail} className="img-fluid rounded-start" alt="..." />
                        {/* va ? porque me aseguro de no intentar acceder a una propiedad nula */}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product?.title}</h5>
                            <p className="card-text">{product?.price}</p>
                            <p className="card-text"><small className="text-body-secondary">{product?.description}</small></p>
                            <p className="card-text"><small className="text-body-secondary">{product?.avaliableQuantity}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDetail
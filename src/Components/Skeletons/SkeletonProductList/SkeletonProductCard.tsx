import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const SkeletonProductCard = () => {
    return (
        <div className="bg-gray-700 rounded-lg">
            {/* Imagen del producto */}
            <Skeleton
                height={150}
                className="rounded-t-lg"
                baseColor="#202020"
                highlightColor="#444"
            />

            {/* Contenido del producto */}
            <div className="p-4">
                {/* Título del producto */}
                <Skeleton
                    height={20}
                    width={`80%`}
                    baseColor="#202020"
                    highlightColor="#444"
                    className="mb-2"
                />
                {/* Precio del producto */}
                <Skeleton
                    height={15}
                    width={`60%`}
                    baseColor="#202020"
                    highlightColor="#444"
                />
            </div>

            {/* Botón de Mercado Libre */}
            <Skeleton
                height={40}
                width={`90%`}
                className="rounded-lg m-4"
                baseColor="#202020"
                highlightColor="#444"
            />
        </div>
    )
}

export default SkeletonProductCard
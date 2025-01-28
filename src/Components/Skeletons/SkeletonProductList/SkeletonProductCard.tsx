import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const SkeletonProductCard = () => {
    return (
        <div className="bg-gray-700 rounded-lg">
            <Skeleton
                height={160}
                className="rounded-t-lg"
                baseColor="#202020"
                highlightColor="#444"
            />

            <div className="p-4">
                <Skeleton
                    height={20}
                    width={`80%`}
                    baseColor="#202020"
                    highlightColor="#444"
                    className="mb-2"
                />
                <Skeleton
                    height={15}
                    width={`60%`}
                    baseColor="#202020"
                    highlightColor="#444"
                />
            </div>
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
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const SkeletonProductCard = () => {
    return (
        <div className="bg-gray-700 hover:bg-gray-500 rounded-lg p-4 mt-4">
            <div className="flex flex-col items-center lg:flex-row">
                <div className="flex justify-center p-4 lg:w-1/3">
                    <Skeleton
                        height={160}
                        width={160}
                        className="rounded-lg"
                        baseColor="#202020"
                        highlightColor="#444"
                    />
                </div>

                <div className="p-4 text-center lg:text-left lg:w-2/3 lg:py-4 lg:pl-0 space-y-4">
                    <Skeleton
                        height={24}
                        width="80%"
                        baseColor="#202020"
                        highlightColor="#444"
                        className="mb-2"
                    />
                    <Skeleton
                        height={20}
                        width="40%"
                        baseColor="#202020"
                        highlightColor="#444"
                        className="mb-2"
                    />
                    <Skeleton
                        height={40}
                        width="20%"
                        baseColor="#202020"
                        highlightColor="#444"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default SkeletonProductCard
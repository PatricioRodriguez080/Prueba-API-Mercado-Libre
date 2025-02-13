import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const SkeletonProductDetail = () => {
    return (
        <div className="bg-gray-700 rounded-lg p-4 mt-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
                <div className="flex justify-center p-4 lg:w-1/4">
                    <Skeleton
                        height={240}
                        width={240}
                        className="rounded-lg"
                        baseColor="#202020"
                        highlightColor="#444"
                    />
                </div>

                <div className="p-4 text-center lg:text-left lg:w-2/4 space-y-4 w-full">
                    <Skeleton
                        height={24}
                        width="60%"
                        baseColor="#202020"
                        highlightColor="#444"
                        className="mb-2"
                    />
                    <Skeleton
                        height={20}
                        width="20%"
                        baseColor="#202020"
                        highlightColor="#444"
                        className="mb-2"
                    />
                    <Skeleton
                        height={15}
                        width="10%"
                        baseColor="#202020"
                        highlightColor="#444"
                        className="mb-2"
                    />
                    <Skeleton
                        height={15}
                        width="10%"
                        baseColor="#202020"
                        highlightColor="#444"
                        className="mb-2"
                    />
                    <Skeleton
                        height={15}
                        width="10%"
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

export default SkeletonProductDetail
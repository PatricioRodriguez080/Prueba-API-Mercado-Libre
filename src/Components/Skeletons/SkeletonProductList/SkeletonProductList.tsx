import SkeletonProductCard from "./SkeletonProductCard"

const SkeletonProductList = () => {
    return (
        <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 justify-center mt-4">
            {Array.from({ length: 12 }).map((_, index) => (
                <SkeletonProductCard key={index} />
            ))}
        </div>
    )
}

export default SkeletonProductList
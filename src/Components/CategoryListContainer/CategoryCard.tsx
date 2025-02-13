import { Link } from "react-router-dom"
import { Category } from "../../Types/product"

interface CategoryCardProps {
    categoria: Category
}

const CategoryCard = ({ categoria }: CategoryCardProps) => {
    return (
        <Link to={`category/${categoria.id}`}>
            <div className="bg-gray-700 rounded-lg flex flex-col items-center justify-center p-4">
                <div className="flex items-center justify-center h-80 w-80">
                    <img
                        src={`/Images/${categoria.name}.webp`}
                        className="h-full w-full object-cover rounded-md"
                        alt={categoria.name}
                    />
                </div>
                <h1 className="text-white text-xl text-center mt-2">{categoria.name}</h1>
            </div>
        </Link>
    )
}

export default CategoryCard
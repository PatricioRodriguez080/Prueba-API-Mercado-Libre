import { Link } from "react-router-dom"
import { Category } from "../../Types/product"

interface CategoryCardProps {
    categoria: Category
}

const CategoryCard = ({ categoria }: CategoryCardProps) => {
    return (
        <Link to={`category/${categoria.id}`}>
            <div className="bg-gray-700 rounded-lg flex flex-col justify-center">
                <img src={`/Images/${categoria.name}.webp`} className="h-80 w-full object-cover rounded-md" alt={categoria.name} />
                <h1 className="text-white text-xl text-center">{categoria.name}</h1>
            </div>
        </Link>
    )
}

export default CategoryCard
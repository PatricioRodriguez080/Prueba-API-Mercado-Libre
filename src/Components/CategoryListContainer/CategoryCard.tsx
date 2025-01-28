import { Category } from "../../Types/product"

interface CategoryCardProps {
    categoria: Category
}

const CategoryCard = ({ categoria }: CategoryCardProps) => {
    return (
        <div className="bg-gray-700 rounded-lg flex flex-col justify-center">
            <img src={`/Images/${categoria.name}.webp`} className="max-h-56 object-cover rounded-md" alt={categoria.name} />
            <h1 className="text-white text-xl text-center">{categoria.name}</h1>
        </div>
    )
}

export default CategoryCard
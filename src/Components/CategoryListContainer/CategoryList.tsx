import { Category } from "../../Types/product"
import CategoryCard from "./CategoryCard"

interface CategoryListProps {
    categorias: Category[]
}

const CategoryList = ({ categorias }: CategoryListProps) => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categorias.map((categoria) => (
                <CategoryCard categoria={categoria} />
            ))}
        </div>
    )
}

export default CategoryList
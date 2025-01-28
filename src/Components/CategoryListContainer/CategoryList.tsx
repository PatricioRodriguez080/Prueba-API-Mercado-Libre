import { Category } from "../../Types/product"
import CategoryCard from "./CategoryCard"

interface CategoryListProps {
    categorias: Category[]
}

const CategoryList = ({ categorias }: CategoryListProps) => {
    return (
        <div>
            {categorias.map((categoria) => (
                <CategoryCard categoria={categoria} />
            ))}
        </div>
    )
}

export default CategoryList
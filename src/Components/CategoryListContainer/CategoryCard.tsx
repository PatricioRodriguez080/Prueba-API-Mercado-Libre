import { Category } from "../../Types/product"

interface CategoryCardProps {
    categoria: Category
}

const CategoryCard = ({ categoria }: CategoryCardProps) => {
    return (
        <div>
            <h1>{categoria.name}</h1>
        </div>
    )
}

export default CategoryCard
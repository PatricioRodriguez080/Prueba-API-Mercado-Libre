import { Category } from "../../Types/product"
import CategoryList from "./CategoryList"

const CategoryListContainer = () => {
    const categorias: Category[] = [{ name: "Televisores" }, { name: "Celulares" }, { name: "Ropa" }, { name: "Automoviles" },]

    return (
        <div className="mt-4">
            <CategoryList categorias={categorias} />
        </div>
    )
}

export default CategoryListContainer
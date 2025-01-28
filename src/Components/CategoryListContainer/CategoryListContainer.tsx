import { Category } from "../../Types/product"
import CategoryList from "./CategoryList"

const CategoryListContainer = () => {
    const categorias: Category[] = [{ name: "Computacion" }, { name: "Celulares" }, { name: "Ropa" }, { name: "Automoviles" },]

    return (
        <div>
            <CategoryList categorias={categorias} />
        </div>
    )
}

export default CategoryListContainer
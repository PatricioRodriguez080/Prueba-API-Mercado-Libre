import { Category } from "../../Types/product"
import CategoryList from "./CategoryList"

const CategoryListContainer = () => {
    const categorias: Category[] = [{ name: "Televisores", id: "MLA1002" }, { name: "Celulares", id: "MLA1055" }, { name: "Ropa", id: "MLA1430" }, { name: "Automoviles", id: "MLA1743" },]

    return (
        <div className="mt-28">
            <h2 className="flex justify-center text-2xl text-white mb-4">Busqueda por categorias</h2>
            <CategoryList categorias={categorias} />
        </div>
    )
}

export default CategoryListContainer
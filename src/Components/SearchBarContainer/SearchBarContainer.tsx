import { useContext } from "react"
import { ProductContext } from "../../Context/ProductContext"
import SearchBar from "./SearchBar"

const SearchBarContainer = () => {
    const { fetchProducts } = useContext(ProductContext)

    return (
        <div>
            <SearchBar onSearch={fetchProducts} />
        </div>
    )
}

export default SearchBarContainer
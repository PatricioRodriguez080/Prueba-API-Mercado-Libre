import { useContext } from "react"
import { ProductContext } from "../../Context/ProductContext"
import SearchBar from "./SearchBar"
import { useNavigate } from "react-router-dom"

const SearchBarContainer = () => {
    const { fetchProducts } = useContext(ProductContext)
    const navigate = useNavigate()

    const handleSearch = (query: string) => {
        fetchProducts(query)
        navigate(`/search/${query}`)
    }

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
        </div>
    )
}

export default SearchBarContainer
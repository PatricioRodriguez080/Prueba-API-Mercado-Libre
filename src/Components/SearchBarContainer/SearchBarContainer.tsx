import { useContext } from "react"
import { ProductContext } from "../../Context/ProductContext"
import SearchBar from "./SearchBar"
import { useNavigate } from "react-router-dom"

const SearchBarContainer = () => {
    const { fetchProductsQuery } = useContext(ProductContext)
    const navigate = useNavigate()

    const handleSearch = (query: string) => {
        fetchProductsQuery(query)
        navigate(`/search/${query}`)
    }

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
        </div>
    )
}

export default SearchBarContainer
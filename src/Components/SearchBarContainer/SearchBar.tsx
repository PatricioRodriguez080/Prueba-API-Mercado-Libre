import { useState } from "react"

interface SerchBarProps {
    onSearch: (query: string) => void
}

const SearchBar = ({ onSearch }: SerchBarProps) => {
    const [query, setQuery] = useState("")

    const handleSearch = () => {
        onSearch(query)
    }

    return (
        <div className="flex justify-center mt-6">
            <input
                className="bg-gray-700 text-white text-sm rounded-lg block p-2.5"
                type="text"
                placeholder="Ingrese producto"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch} className="bg-gray-700 rounded-lg text-white cursor-pointer p-2.5">Buscar</button>
        </div>
    )
}

export default SearchBar
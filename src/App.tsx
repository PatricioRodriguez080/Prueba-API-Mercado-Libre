import "./index.css"
import ProductContextProvider from "./Context/ProductContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductDetail from "./Components/ProductListContainer/ProductDetail"
import SearchBarContainer from "./Components/SearchBarContainer/SearchBarContainer"
import CategoryListContainer from "./Components/CategoryListContainer/CategoryListContainer"
import ProductListContainer from "./Components/ProductListContainer/ProductListContainer"
import Titulo from "./Components/Titulo/Titulo"

function App() {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <div className="bg-gray-900 p-10 min-h-screen w-full">
          <Titulo />
          <SearchBarContainer />
          <Routes>
            <Route path="/" element={<CategoryListContainer />} />
            <Route path="category/:category" element={<ProductListContainer />} />
            <Route path="/search/:query" element={<ProductListContainer />} />
            <Route path="/:productId" element={<ProductDetail />} />
          </Routes>
        </div>
      </ProductContextProvider>
    </BrowserRouter>
  )
}

export default App
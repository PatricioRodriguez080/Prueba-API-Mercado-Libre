import "./index.css"
import ProductContextProvider from "./Context/ProductContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductDetail from "./Components/ProductDetail"
import SearchBarContainer from "./Components/SearchBarContainer/SearchBarContainer"
import ProductListContainer from "./Components/ProductListContainer"

function App() {
  return (
    <ProductContextProvider>
      <div className="bg-gray-900 p-10">
        <h1 className="flex justify-center text-2xl text-white">Busqueda de productos</h1>
        <SearchBarContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductListContainer />} />
            <Route path="/:productId" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </div >
    </ProductContextProvider>
  )
}

export default App

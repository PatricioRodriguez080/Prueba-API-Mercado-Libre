import { Link } from "react-router-dom"

const Titulo = () => {
    return (
        <Link to={"/"}>
            <h1 className="flex justify-center text-4xl text-white mt-4 text-center">Busqueda de productos</h1>
        </Link>
    )
}

export default Titulo
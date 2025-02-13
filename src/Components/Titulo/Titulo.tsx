import { Link } from "react-router-dom"

const Titulo = () => {
    return (
        <Link to={"/"}>
            <h1 className="flex justify-center text-4xl text-white">Busqueda de productos</h1>
        </Link>
    )
}

export default Titulo
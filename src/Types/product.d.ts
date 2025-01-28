export interface Product {
    id: string,
    title: string,
    price: number,
    thumbnail: string,
    permalink: string
}

export interface ProductDetail extends Product {
    avaliableQuantity: number,
    soldQuantity: number,
    description: string
}

export interface Category {
    id: string,
    name: string
}

interface ProductContextProps {
    products: Product[]
    fetchProducts: (query: string) => void
    loading: boolean
}
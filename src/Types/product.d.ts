export interface Product {
    id: string,
    title: string,
    price: number,
    thumbnail: string,
    permalink: string
}

interface Attribute {
    id: string
    name: string
    value_name: string | null
}

export interface ProductDetail extends Product {
    avaliableQuantity: number,
    soldQuantity: number,
    description: string,
    condition: string,
    warranty: string,
    attributes: Attribute[]
}

export interface Category {
    id: string,
    name: string
}

interface ProductContextProps {
    products: Product[],
    fetchProductsQuery: (query: string) => void,
    fetchProductsCategory: (category: string) => void,
    loading: boolean
}
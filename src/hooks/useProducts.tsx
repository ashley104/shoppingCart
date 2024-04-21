import { useContext } from "react"
import ProductsContext from "../context/productsProvider"
import { UseProductsContextType } from "../context/productsProvider"

const useProducts = (): UseProductsContextType => {
    return useContext(ProductsContext)
}

export default useProducts
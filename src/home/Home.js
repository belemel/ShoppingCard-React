import { useEffect, useState } from "react"


const Home = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchProducts = async() => {
            try {
                const res = await fetch(`http://localhost:4000/api/v1/products`)
                const data = await res.json()
                setProducts(data)
            } catch (error) {
                setError(prev => error.message)
                console.log(error)
            }
        }
        fetchProducts()
    }, [])

    console.log(products, "products")

    return (
        <div>
          
        </div>
    )
}

export default Home
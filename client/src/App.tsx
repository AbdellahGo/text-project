import axios from "axios"
import { useEffect, useState } from "react"

type products = {
  productDetails: {
    primaryImage: string
    title: string,
    overview: string,
    originalPrice: string
    discountedPrice: string
    id: string
  }
}[]

const App = () => {
  const [products, setProducts] = useState<products | []>([])
  const fetchProducts = async () => {
    const res = (await axios.get('http://localhost:3000/api/products')).data
    setProducts(res)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="p-[50px] grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[50px]">
      {products.map(({ productDetails: {id, primaryImage, title, overview, originalPrice, discountedPrice}}) => (
        <div className="bg-gray-200 p-[30px]">
          <h1 className="bg-gray-100 flex items-center justify-center w-[50px] mb-[20px] border-1 border-amber-400 h-[50px] mx-auto text-[30px] font-bold">{id}</h1>
          <div className="w-[300px] h-[300px] mx-auto">
            <img src={`http://localhost:3000${primaryImage}`} className="w-full h-full object-cover" alt="" />
          </div>
          <h1 className="text-[25px] mt-[20px] font-semibold text-center border-b-1 border-orange-500 pb-[8px]">
            {title}
          </h1>
          <span className="text-[35px] font-bold mt-[15px]">{discountedPrice}</span>
          <span className="text-[20px] font-semibold text-gray-600 mt-[15px] ml-[5px] ">{originalPrice}</span>
          <p className="text-[18px] font-medium">
            {overview}
          </p>
        </div>
      ))}

    </div>
  )
}

export default App
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const ProductPage = ({addToCart}) => {

    const router = useRouter()
    const { slug } = router.query;
    const [product, setProduct] = useState()

    useEffect(() => {

        const fetchProductData = async () => {
            let response = await fetch(`/api/product/${slug}`)
            let productData = await response.json()

            setProduct(productData)
        }

        if (slug) {
            fetchProductData()
        }
    }, [slug])

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    <button onClick={()=> addToCart(product._id, 1, product.price, product.title, 'l', 'm')}>Add to Cart</button>
                </div>
            ): (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default ProductPage
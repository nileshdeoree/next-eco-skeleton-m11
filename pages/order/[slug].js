import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const OrderPage = () => {

    const router = useRouter()
    const {slug} = router.query;
    const [order, setOrder] = useState()

    useEffect(() => {

        const fetchOrderData = async () => {
            let response = await fetch(`/api/order/${slug}`)
            let orderData = await response.json()

            setOrder(orderData)
        }

        if (slug) {
            fetchOrderData()
        }
    }, [slug])

    return (
        <div>
            {order ? (
                <div>
                <h1>{order.name}</h1>
                <p>{order.price}</p>
            </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default OrderPage
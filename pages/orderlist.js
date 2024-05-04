import React from 'react'
import Link from 'next/link'

const admin = ({orders}) => {
  return (
    <div>
        <h1>All Orders</h1>

        <ul>
            {orders.map(order => (
                <li key={order._id}>
                    <Link href={`order/${order._id}`}><a>{order.name}</a></Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export async function getStaticProps(){
    let res = await fetch('http://localhost:3000/api/getorders')
    let orders = await res.json()

    return {
        props: {
            orders
        }
    }
}

export default admin
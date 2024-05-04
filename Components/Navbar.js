import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-lime-400 flex'>
        <Link href={`/`}>Navbar</Link>

        <div className='mx-2'>
            <Link href={`http://localhost:3000/productlist`}>Product List</Link>
        </div>
        <div className='mx-2'>
            <Link href={`http://localhost:3000/orderlist`}>Order List</Link>
        </div>
        <div className='mx-2'>
            <Link href={`http://localhost:3000/login`}>Login</Link>
        </div>
    </div>
  )
}

export default Navbar
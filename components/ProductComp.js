import Link from 'next/link'
import React from 'react'

export const ProductComp = ({product}) => {
  return (
    <div>
        <Link href = {`/products/${product.id}`}>
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>
        </Link>
    </div>
  )
}

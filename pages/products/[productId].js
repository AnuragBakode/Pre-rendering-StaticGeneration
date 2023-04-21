import React from 'react'
import {useRouter} from 'next/router'
 
const ProductDetails = ({product}) => {
    const router = useRouter();

    if(router.isFallback){
        return <h1>Loading Data .....</h1>
    }
  return (
    <div>
        <h1>Product name  : {product.name}</h1>
        <h1>Product Price : {product.price}</h1>
    </div>
  )
}

export default ProductDetails;

export async function getStaticPaths(){
    return {
        paths : [
            {
                params :  {productId : '1'}
            }
        ],
        fallback : true
    }
}

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json()

    if(!data.id){
        return{
            notFound : true
        }
    }

    return {
        props : {
            product  : data
        }, 
        revalidate : 5
    }
}

import React from 'react'
import styles  from '../../styles/Home.module.css'
import { ProductComp } from '@/components/ProductComp'

const index = ({products}) => {
  return (
    <main className={styles.main}>
        <div className={styles.description}>
            {
                products.map(product => {
                    return <ProductComp   key = {product.id} product = {product}/>
                }) 
            }
        </div>
    </main>
  )
}


export default index;

export async function getStaticProps(){
    const response = await fetch('http://localhost:4000/products')
    const data = await response .json()

    return {
        props : {
            products : data
        }, 
        revalidate : 5
    }

}

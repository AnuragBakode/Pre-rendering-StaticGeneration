import React from 'react'
import styles from '../../styles/Home.module.css'
import {PostComp} from '../../components/PostComp'

const index = ({posts}) => {
  return (
    
        <div>
            {
                posts.map(post => {
                    return <PostComp key = {post.id}  post = {post}/>
                })
            }
        </div>
    
  )
}
export default  index;

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();

    return {
        props : {
            posts : data
        }
    }
}

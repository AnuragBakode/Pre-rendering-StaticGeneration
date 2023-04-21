import React from 'react'
import {useRouter} from 'next/router'

const PostDetail = ({post}) => {
    const router = useRouter()

    if(router.isFallback){
        return <h1>Loading data..</h1>
    }
  return (
    <div>
        <h1>{post.title}</h1>
        <h1>{post.body}</h1>
    </div>
  )
}

export default PostDetail

export async function getStaticPaths(){
    return{
        paths : [
            {
                params : {postId : '1'}
            }
        ],
        fallback : 'blocking'
    }
}

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    if(!data.id){
        return {
            notFound : true
        }
    }
    return{
        props : {
            post : data
        }
    }
}

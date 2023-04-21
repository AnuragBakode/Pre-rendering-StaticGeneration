import Link from 'next/link'
import React from 'react'

export const PostComp = ({post}) => {
  return (
    <div>
        <Link href = {`/posts/${post.id}`}>
        <h1>{post.id}</h1>
        <h1>{post.title}</h1>
        </Link>
    </div>
  )
}

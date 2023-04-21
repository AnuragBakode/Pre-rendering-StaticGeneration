import Link from 'next/link'
import React from 'react'


export const UserComp = ({user}) => {
  return (
    <div>
        <Link href = {`/users/${user.id}`}>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        </Link>
    </div>
  )
}

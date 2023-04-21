import React from 'react'
import styles from "../../styles/Home.module.css"
import { UserComp } from '@/components/UserComp'

const Users = ({users}) => {
  return (
    <main className={styles.main}>
        {
            users.map(user => {
                return <UserComp key = {user.id} user = {user}/>
            })
        }
    </main>
  )
}

export default Users;

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    return{
        props : {
            users : data
        }
    }
}

import React from 'react'

const UserDetails = ({userDetail}) => {

  return (
    <div>
        <h1>The user name is {userDetail.name}.</h1>
        <h2>His email address is {userDetail.email}.</h2>
        <h3>He lives in {userDetail.address.city} city . </h3>
        <h3>And his Phone number is {userDetail.phone}.</h3>
    </div>
  )
}

export default UserDetails;

export async function getStaticPaths(){
    return {
        paths : [
            {
                params : {userId : '1'}
            },
            {
                params : {userId : '2'}
            },
            {
                params : {userId : '3'}
            }
        ],
        fallback : false
    }
}

export async function getStaticProps(context){
    const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await response.json()

    return{
        props : {
            userDetail : data
        }
    }
}

// import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from './AuthProvi'

const RequiredAuth = (props) => {

    const auth = useAuth()
    if(!auth.user){
        return(
            <>
            {props.children}
            </>
        )
    }
    else{
        return <Navigate to='/signup'/>
    }
}

export default RequiredAuth
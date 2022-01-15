import React from 'react'
import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/layout'
import "./greeting.css"

const Greeting = () => {
    let userProfile =  {firstname : "Gabriel", lastname : "Tommy"}
    let [name, setName] = useState([])

    useEffect(() => {
        setName(userProfile.firstname.toUpperCase())
    }, [])
    

    //data from json-server
    /**
    let [name, setName] = useState([])
    useEffect(() => {
        const getProfileFromServer = async ()=>{
            const profileFromServer = await fetchProfile()
            setName(profileFromServer.firstname.toUpperCase())
        }
        getProfileFromServer()
    }, [])*/

    //fetch profile 
    // const fetchProfile = async () => {
    //     const res = await fetch('http://localhost:5001/profile')
    //     const data = await res.json()
    //     return data
    // }

    return (
        <Box position="absolute" width="500" top="98" left="400" display="block">
           <h1 className="greeting">👋WELCOME!{name}</h1>
        </Box>
    )
}

export default Greeting


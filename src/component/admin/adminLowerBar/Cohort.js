import React from 'react'
// import axios from 'axios'
import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/layout'
import "./board.css"
import Status from './Status'
import Detail from './Detail'
import Action from './Action'

const Cohort = () => {
    let cohortData = [
        {
          "id": 1,
          "cohort": "cohort 5",
          "name": "galaxy",
          "natives": 25,
          "status": "inactive",
          "details": "view",
          "action": "inactive" 
        },
        {
          "id": 2,
          "cohort": "cohort 6",
          "name": "engineers",
          "natives": 23,
          "status": 5,
          "details": "view",
          "action": "active" 
        },
    
        {
          "id": 3,
          "cohort": "cohort 7",
          "name": "sages",
          "natives": 20,
          "status": 20,
          "details": "view",
          "action": "active" 
        },
    
        {
          "id": 4,
          "cohort": "cohort 8",
          "name": "phoenix",
          "natives": 32,
          "status": 20,
          "details": "view",
          "action": "active" 
        },
    
        {
          "id": 5,
          "cohort": "cohort 10",
          "name": "heroes",
          "natives": 40,
          "status": 30,
          "details": "view",
          "action": "inactive" 
        }
      ]
    let [cohorts, setCohorts] = useState([])

    useEffect(() => {
       setCohorts(cohortData)
    }, [])

    //DATA FROM JSON SERVER  
    /** 
    let [cohorts, setCohort] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:5001/cohorts").then(response => {
            setCohort(response.data)
        })
    }, [])
    */

    
    return (
        <Box position="absolute" width="1127.99" top="220" left="350" display="block">
            <div className="board_header">
                <h5 className="title">COHORT</h5>
                <h5 className="title">NAME</h5>
                <h5 className="title">NATIVES</h5>
                <h5 className="title">STATUS</h5>
                <h5 className="title">DETAILS</h5>
                <h5 className="title">ACTION</h5>
            </div>
            <hr className="line"></hr>
            {cohorts.map((cohort, index) => {
              return <> 
                <div className="board_header" key={index}>
                    <h5 className="title_two">{cohort.id}</h5>
                    <h5 className="title_two title_three">{cohort.cohort.toUpperCase()}</h5>
                    <h5 className="title_two title_three">{cohort.name.toUpperCase()}</h5>
                    <h5 className="title_two title_three">{cohort.natives}</h5>
                    <Status natives={cohort.natives} status={cohort.status} />
                    <Detail details = {cohort.details.toUpperCase()}/>    
                    <Action action = {cohort.action.toUpperCase()}/>                
                </div>
            <hr className="line"></hr>
            </>
            })} 
        </Box>
    )
}

export default Cohort

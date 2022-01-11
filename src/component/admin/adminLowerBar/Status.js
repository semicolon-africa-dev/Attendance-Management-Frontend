import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'

const Status = ({natives, status}) => {
    const cohortStatus = () =>{
        if(typeof(status) !== 'number'){
            return "INACTIVE"
        }
        else{
            
            return `${status}/${natives}`
        }
    }

    let currentStatus = cohortStatus()
    if (currentStatus === "INACTIVE"){
        return (
            <Box display="flex" border="2px solid #ffffff" borderRadius = "30px" bgColor={currentStatus === "INACTIVE" ? "red" : "white"} 
            width="60px" height="30px" padding="5px 30px 15px 30px" marginRight="60px" marginLeft="0px"
            marginTop="15px" color={currentStatus === "INACTIVE" && "white"}>
                <Text fontSize="14px" fontFamily="Arial, Helvetica, sans-serif" 
                fontStyle="normal" fontWeight="bold" textAlign="center" width="70px">
                    {currentStatus}
                </Text>
            </Box>  
        )
    }

    return (
        <Box display="flex" border="2px solid" marginRight="60px" marginLeft="0px"
        borderColor={(status < (natives/2) ? "red": (status >= (natives/2) && status < natives ? "orange" : "rgba(0, 214, 137, 1)"))} 
        borderRadius = "30px" bgColor={currentStatus === "INACTIVE" ? "red" : "white"} 
        width="60px" height="30px" padding="5px 30px 12px 30px" 
        marginTop="15px" color={currentStatus === "INACTIVE" && "white"}>

            <Text fontSize="14px" fontFamily="Arial, Helvetica, sans-serif" 
            fontStyle="normal" fontWeight="bold" textAlign="right" width="35px" marginRight = "0px" 
            color = {(status < (natives/2) ? "red": (status >= (natives/2) && status < natives ? "orange" : "rgba(0, 214, 137, 1)"))}>
                {status}
            </Text>

            <Text fontSize="14px" fontFamily="Arial, Helvetica, sans-serif" marginLeft= "0px"
            fontStyle="normal" fontWeight="bold" textAlign="left" width="35px" color="rgba(0, 214, 137, 1)">
                /{natives}
            </Text>

        </Box>
    )
}

Status.defaultProps = {
    natives: 20,
    status : 10
}

export default Status

import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'

const Action = ({action}) => {

    if(action === "INACTIVE"){
        return (
            <Box display="flex" border="2px solid #ffffff" borderRadius = "30px" bgColor="red" 
            width="60px" height="30px" padding="5px 30px 15px 30px" marginRight="60px" marginLeft = "10px"
            marginTop="15px" color={action === "INACTIVE" && "white"}>
                <Text fontSize="14px" fontFamily="Arial, Helvetica, sans-serif" 
                fontStyle="normal" fontWeight="bold" textAlign="center" width="70px">
                    {action}
                </Text>
            </Box>  
        )
    }
    

    return (
        <Box display="flex" border="2px solid #ffffff" borderRadius = "30px" bgColor="rgba(0, 214, 137, 1)
        " 
            width="60px" height="30px" padding="5px 30px 15px 30px" marginRight="60px" marginLeft = "10px"
            marginTop="15px" color="white">
                <Text fontSize="14px" fontFamily="Arial, Helvetica, sans-serif" 
                fontStyle="normal" fontWeight="bold" textAlign="center" width="70px">
                    {action}
                </Text>
        </Box>
    )
}

Action.defaultProps = {
    action : "INACTIVE"
}

export default Action


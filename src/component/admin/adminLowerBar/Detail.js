import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/react'

const Detail = ({details}) => {


    return (
        <Box display="flex" border="2px solid #ffffff" borderRadius = "30px" bgColor="rgba(0, 214, 137, 1)
        " 
            width="60px" height="30px" padding="5px 30px 15px 30px" marginRight="60px"
            marginTop="15px" color="white">
                <Text fontSize="14px" fontFamily="Arial, Helvetica, sans-serif" 
                fontStyle="normal" fontWeight="500px" textAlign="center" width="70px">
                    {details}
                </Text>
            </Box>
    )
}

Detail.defaultProps = {
    details : "VIEW"
}

export default Detail

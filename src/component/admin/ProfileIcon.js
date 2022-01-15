import {React} from 'react'
import { Box, Center } from '@chakra-ui/layout'
import {Text} from '@chakra-ui/react'

const ProfileIcon = (props) => {
    let firstLetter = "P";
    const dropdownState = props.dropdownState;
    const setDropdownState = props.setDropdownState;
    return (
         <Box h="40px" w="40px" bg="#ff113a" rounded="30px" textAlign="center" textColor="#ffffff" onClick={()=>{dropdownState==="hidden"?setDropdownState("visible"):setDropdownState("hidden")}}>
             <Center mt="-8px" fontWeight="extrabold">
                <Text fontSize="large" mb="20px">{firstLetter}</Text>
             </Center>
         </Box>
            
    )
}

export default ProfileIcon
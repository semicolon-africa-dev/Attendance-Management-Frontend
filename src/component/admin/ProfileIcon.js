import {React} from 'react'
import { Box } from '@chakra-ui/layout'
import {Text} from '@chakra-ui/react'

const ProfileIcon = (props) => {
    let firstLetter = "P";
    const state = props.state;
    const setState = props.setstate;
    return (
         <Box h="22px" w="22px" bg="#ff113a" rounded="30px" textAlign="center" textColor="#ffffff" onClick={()=>{state==="hidden"?setState("visible"):setState("hidden")}}>
                <Box paddingTop="2px" fontWeight="extrabold">
                    <Text fontSize="small">{firstLetter}</Text>
                </Box>
         </Box>
            
    )
}

export default ProfileIcon
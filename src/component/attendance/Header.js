import { Box } from '@chakra-ui/layout'
import {React, useState} from 'react'
import bell from '../../assets/notification-bell.svg'
import bell2 from '../../assets/smart-bell.svg'
import {Center, Divider, Image} from '@chakra-ui/react'
import {ListItem,UnorderedList} from '@chakra-ui/react'



const Header = () => {
    const [dropdownState, setDropdownState] = useState("hidden");
    const [bellState, setBellState] = useState(bell);
    let messages= ['There will be a general public holiday tomorrow Friday 13/10/2021.',
    'Cohort 8 will be going on 2weeks break due to so many of them falling sick.', 
    'There will be muslim public holiday Thurs 17th & Fri 18th of Oct 2021.']
    
    return (
        <Box onLoad={()=>{if (messages.length>0){
            setBellState(bell2)
        }}}>
            <Box display="flex" float="right" mt="22px" mr="25px">
                <Box paddingRight="30px" paddingTop="0.5px" >
                    <Image src={bellState} onClick={()=>{dropdownState==="hidden"?setDropdownState("visible"):setDropdownState("hidden")}}></Image>
                </Box>
                
            </Box>
            
          <UnorderedList listStyleType="none" w="300px" h="300px" bg="#ffffff" float="right" mt="50px" rounded="10px" textAlign="center" visibility={dropdownState} mb="10px">
                {
                messages.map((message)=>{ 
                   return <Box textAlign = "center" fontSize="small">
                            <ListItem key={message.id} mt="20px" mb="10px">{ message } </ListItem>
                            <Center><Divider w="80%"/></Center>
                        </Box>
                 })
                 } 
            </UnorderedList>
            
        </Box>
       
    )
}
export default Header

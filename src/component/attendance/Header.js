import { Box } from '@chakra-ui/layout'
import {React, useState} from 'react'
import bell from '../../assets/notification-bell.svg'
import bell2 from '../../assets/smart-bell.svg'
import {Center, Divider, Image} from '@chakra-ui/react'
import {ListItem,UnorderedList} from '@chakra-ui/react'



const Header = (props) => {
    const [dropdownState, setDropdownState] = useState("hidden");
    const [bellState, setBellState] = useState(bell);
    let messages = props.messages;
    // let messages= []
    
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

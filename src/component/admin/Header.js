import { Box} from '@chakra-ui/layout'
import {React, useState} from 'react'
import dropdown from '../../assets/dropdown-button.svg'
import {Text, Image} from '@chakra-ui/react'
import {ListItem, List} from '@chakra-ui/react'
import ProfileIcon from './ProfileIcon'
import logout from '../../assets/logout-icon.svg'
import edit_profile from '../../assets/edit_profile-icon.svg'

//


const Header = () => {
    const [dropdownState, setDropdownState] = useState("hidden")
    let email='patiencetommy@gmail.com'
    return (
        <Box>
            <Box display="flex" float="right" mt="22px" mr="25px" pr="30px" pt="0.5px">
               
               <ProfileIcon dropdownState={dropdownState} setDropdownState = {setDropdownState}/>
                <Box paddingLeft="15px" paddingTop="8px">
                    <img src= {dropdown} onClick={()=>{dropdownState==="hidden"?setDropdownState("visible"):setDropdownState("hidden")}} alt="dropdown-icon"></img>
                </Box>
            </Box>
            
          <List listStyleType="none" w="250px" h="300px" bg="#ffffff" float="right" mt="50px" rounded="10px" textAlign="center" visibility={dropdownState} mb="10px" paddingTop="30px">
                <Box textAlign = "center" fontSize="small" display="flex" ml="25px">
                    <ProfileIcon/>
                    <ListItem fontWeight="bold" ml="15px">{ email } </ListItem>
                </Box>

                <ListItem ml="25px" display="flex" pt="20px" > 
                        <Image  src={edit_profile}/>
                        <Text ml="10px" fontSize="small" fontWeight="bold"> edit profile </Text>
                        
                </ListItem>

                <ListItem ml="25px" display="flex" pt="20px" > 
                        <Image  src={logout}/>
                        <Text ml="10px" fontSize="small" fontWeight="bold"> Logout </Text>
                        
                </ListItem>
            </List>
            
        </Box>
       
    )
}
export default Header

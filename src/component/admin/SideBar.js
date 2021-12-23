import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Button, Image } from '@chakra-ui/react';
import logo from './../../images/logo.svg'
import pic from './../../images/pic.svg'
import emoji1 from './../../images/emoji1.svg'
import users from './../../images/users.svg'
import plus from './../../images/plus-square.svg'
import settings from './../../images/settings.svg'

const SideBar = () => {
    return (
        <Box>
            <Box>
                <Image src={logo} alt="semicolonlog" paddingTop = "1.6rem"/>
            </Box>

            <Box>
                <Image src={pic} alt="human" paddingTop = "1rem"/>
            </Box>

            <Box lineHeight = "1px">
                <h4>Patience Tommy</h4>
                <p >zick.e.tommy@gmail.com</p>
            </Box>

            <Box lineHeight = "8px" paddingTop = "1rem">
                <h2>8:45am</h2>
                <h4>11-11-2021</h4>
               
            </Box>

            <Box display="flex" ml="4vh">           
                <Button w="19rem" h="3rem" bgColor=" #E3FBF2" mr="2rem" color="#00D689" fontWeight="bold" 
                fontSize="1.1rem" border="none" borderRadius = "1.2rem" _hover = {{
                    background: "#00D689",
                    color: "white",
                  }}> Overview </Button>  
                <Image src={emoji1} alt="square" position = "absolute" left = "4rem" paddingTop ="0.6rem"/>  
            </Box>
           

            <Box display="flex" ml="4vh" paddingTop = "1.5rem">
                <Button w="19rem" h="3rem" bgColor=" #E3FBF2" mr="2rem" color="#00D689" fontWeight="bold" 
                fontSize="1.1rem" border="none" borderRadius = "1.2rem" _hover = {{
                    background: "#00D689",
                    color: "white",
                  }}> Cohorts </Button>
                <Image src={users} alt="user" position = "absolute" paddingTop = "0.5rem" left = "4rem"/>
                <Image src={plus} alt="plus" mr="3px" position = "absolute" left = "16rem" paddingTop = "0.6rem"/>
            </Box>
            

            <Box display="flex" ml="4vh" paddingTop = "1.5rem">
                <Button w="19rem" h="3rem" bgColor="#E3FBF2" mr="2rem" color="#00D689" 
                fontWeight="bold" fontSize="1.1rem" 
                border="none" borderRadius = "1.2rem" _hover = {{
                    background: "#00D689",
                    color: "white",
                  }}> Settings</Button>
                   <Image src={settings} alt="settings" position = "absolute" left = "4rem" paddingTop = "0.6rem"/>
            </Box>
            
        </Box>

    )
}

export default SideBar

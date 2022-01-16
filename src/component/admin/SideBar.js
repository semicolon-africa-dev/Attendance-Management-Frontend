import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Button, Image } from '@chakra-ui/react';
import logo from './../../images/logo.svg'
import pic from './../../images/pic.svg'
import emoji1 from './../../images/emoji1.svg'
import users from './../../images/users.svg'
import plus from './../../images/plus-square.svg'
import settings from './../../images/settings.svg'
import bell from './../../images/bell.svg'
import {  } from '@chakra-ui/color-mode';

const SideBar = () => {

    let date = new Date();
    let currentTime = date.toLocaleTimeString('en-US', {hour: 'numeric', hour12: true, minute: 'numeric'});

    let currentDay = date.getDate();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    return (
    
        <Box>
            <Box>
                <Image src={logo} alt="semicolonlog" paddingTop = "0.8rem"/>
            </Box>

            <Box>
                <Image src={pic} alt="human" paddingTop = "0.5rem"/>
            </Box>

            <Box lineHeight = "2px">
                <h4>Patience Tommy</h4>
                <p >zick.e.tommy@gmail.com</p>
            </Box>

            <Box lineHeight = "8px" paddingTop = "1rem">
                <h3>{currentTime}</h3>
                <h5>{currentDay}-{currentMonth + 1}-{currentYear}</h5>
               
            </Box>

            <Box display="flex" ml="4vh">  
            <Image src={emoji1} alt="square" position = "absolute" left = "4rem" paddingTop ="0.6rem"/>           
                <Button w="19rem" h="3rem" bgColor=" #E3FBF2" mr="2rem" color="#00D689" fontWeight="bold" 
                fontSize="18px" border="none" borderRadius = "1.2rem" _hover = {{background: "#00D689", color: "white",
                  }}> Overview </Button>  
               
            </Box>
           

            <Box display="flex" ml="4vh" paddingTop = "0.5rem">
                <Button w="19rem" h="3rem" bgColor=" #E3FBF2" mr="2rem" color="#00D689" fontWeight="bold" 
                fontSize="18px" border="none" borderRadius = "1.2rem" _hover = {{
                    background: "#00D689",
                    color: "white",
                  }}> Cohorts </Button>
                <Image src={users} alt="user" position = "absolute" paddingTop = "0.5rem" left = "4rem"/>
                <Image src={plus} alt="plus" mr="3px" position = "absolute" left = "16rem" paddingTop = "0.6rem"/>
            </Box>
            

            <Box display="flex" ml="4vh" paddingTop = "0.5rem">
                <Button w="19rem" h="3rem" bgColor="#E3FBF2" mr="2rem" color="#00D689" 
                fontWeight="bold" fontSize="18px" 
                border="none" borderRadius = "1.2rem" _hover = {{
                    background: "#00D689",
                    color: "white",
                  }}> Settings</Button>
                   <Image src={settings} alt="settings" position = "absolute" left = "4rem" paddingTop = "0.6rem"/>
            </Box>

            <Box display="flex" ml="4vh" paddingTop = "0.5rem">
                <Button w="19rem" h="3rem" bgColor="#E3FBF2" mr="2rem" color="#00D689" 
                fontWeight="bold" fontSize="18px" 
                border="none" borderRadius = "1.2rem" _hover = {{
                    background: "#00D689",
                    color: "white",
                  }}> Notification </Button>
                   <Image src={bell} alt="settings" position = "absolute" left = "4rem" paddingTop = "0.3rem"/>
            </Box>
            
        </Box>

    )
}

export default SideBar

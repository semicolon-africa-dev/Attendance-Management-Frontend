import React from 'react';
import {Box, Button} from "@chakra-ui/react";

const GeneralButton = (props) => {
    const{name, onclick} = props
    return (
        <Button _hover={{bg: '#00D667'}} _active={{bg: 'teal'}} border="unset" variant='solid' colorScheme='teal'
                onClick={onclick} box-shadow="none" display="flex" alignContent="center" justifyContent="center"
                p={"25px 30px"} rounded={"10px"} w={"25vw"} h={"1vh"} color={"white"} bg="#00D689" fontWeight="600"  fontSize="24px" >
            {name}
        </Button>
    );
};
export default GeneralButton;

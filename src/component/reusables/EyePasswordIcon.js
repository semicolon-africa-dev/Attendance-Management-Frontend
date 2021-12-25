import React, {useState} from 'react';
import {Box, Button} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon bg={"white"} h={'1.7vh'} w={'2vh'} icon={faEye} />;


const EyePasswordIcon = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <Box>
            <Button color={"#9FACA5"} mt={"3vh"} border={"unset"} bg={"white"} onClick={togglePasswordVisibility}>
                {eye}
            </Button>
        </Box>
    );
};

export default EyePasswordIcon;

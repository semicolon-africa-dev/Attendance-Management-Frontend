import React from 'react';
import {Box, Input, Text} from "@chakra-ui/react";

const InputField = (props) => {
    const {field, onChange, value} = props

    return (
        <Box>
            <Text>{field.label}</Text>
                <Input p={"0 1vw"} border={"unset"} rounded="10px" w={"23vw"} h={"5vh"} value={value} name={field.name} onChange={onChange}/>
        </Box>
    );
};

export default InputField;

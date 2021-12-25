import React from 'react';
import {Box, Text} from "@chakra-ui/react";
import {Box} from "@chakra-ui/react";
import SideBar from './SideBar';

const AdminSideBar = () => {
    return (
        <Box bg="#E3FBF2" w="20%" h="95%" rounded="20px" justify="center" align="center">
            <SideBar/>
        </Box>
    );
};

export default AdminSideBar;

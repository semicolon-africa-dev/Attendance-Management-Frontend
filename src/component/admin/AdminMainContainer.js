import React from 'react';
import {Box} from "@chakra-ui/react"
import AdminCohortBoard from './adminLowerBar/view/AdminCohortBoard';

const AdminMainContainer = () => {
    return (
        <Box w="80%" h="95%" bg="#E3FBF2" rounded="20px" ml="20px" justify="left" align="left" display="block">
            <AdminCohortBoard />
        </Box>
    );
};

export default AdminMainContainer;

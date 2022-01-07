import React from 'react';
import {Box} from "@chakra-ui/react";
import AdminSideBar from "../../component/admin/AdminSideBar";
import AdminMainContainer from "../../component/admin/AdminMainContainer";

const Admin = () => {
    return (
        <Box p="0 20px" h="100vh" fontFamily="Montserrat" fontStyle="normal"  w="100vw" d="flex" justifyContent="center" alignItems="center">
            <AdminSideBar/>
            <AdminMainContainer/>
        </Box>
    );
};

export default Admin;

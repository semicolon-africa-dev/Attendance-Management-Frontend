import React from 'react';
import {Box} from '@chakra-ui/react'
import AttendanceSideBar from "../../component/attendance/AttendanceSideBar";
import AttendanceMainContainer from "../../component/attendance/AttendanceMainContainer";

const Attendance = () => {
    return (
        <Box p="0 20px" h="100vh" fontFamily ="Montserrat" fontStyle="normal"  w="100vw" d="flex" justifyContent="center" alignItems="center">
            <AttendanceSideBar/>
            <AttendanceMainContainer/>
        </Box>
    );
};

export default Attendance;

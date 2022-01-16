import React from 'react';
import {background, color} from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import img from "../../images/move.svg"
import rectangle from '../../images/rectangle.svg'
import square2 from '../../images/square2.svg'
import square3 from '../../images/square3.svg'
import square4 from '../../images/square4.svg'
import symbol from '../../images/symbol.svg'

const AdminActionBar = () => {
    return (
        <div style={{backgroundColor: 'white', width: '278px', padding: '5px'}} >
            <Box display="flex">
                <img src={symbol} style={{marginLeft: 15}}/> <h4 style={{marginLeft : 15}}> patiencetommy@gmail.com</h4>
            </Box>

            <Box display='flex'>
                 <DeleteIcon w={28} h={30} style={{ marginTop: 20, marginLeft: 15}}/>   <h4 style={{marginLeft: 25 }}>Disable User</h4>
            </Box>

            <Box display='flex'>
                 <img src={img} height={28} width={30} style={{ marginTop: 20, marginLeft: 15}}/> <h4 style={{marginLeft: 25, marginTop: 25, marginBottom: 25}}>  Move User</h4>
            </Box>

            <Box display='flex'>
                <EditIcon w={28} h={30} style={{ marginTop: 20, marginLeft: 15}}/>  <h4 style={{marginTop: 25, marginBottom: 25, marginLeft: 25}}>Edit Profile</h4>
            </Box>

            <Box display='flex'>
               <img src={rectangle} height={28} width={30} style={{ marginTop: 20, marginLeft: 15}}/> <h4 style={{marginTop: 25, marginBottom: 25, marginLeft: 25}}>Suspend User</h4>
            </Box>

            <Box display='flex'>
                <img src={square2} height={28} width={30} style={{ marginTop: 20, marginLeft: 15}}/>  <h4 style={{marginTop: 25, marginBottom: 25, marginLeft: 25}}>Mark User Present</h4>
            </Box>

             <Box display='flex'>
                 <img src={square3} height={28} width={30} style={{ marginTop: 20, marginLeft: 15}}/>  <h4 style={{marginTop: 25, marginBottom: 25, marginLeft: 25}}>Mark User Late</h4>
             </Box>

            <Box display='flex'>
                <img src={square4} height={28} width={30} style={{ marginTop: 20, marginLeft: 15}}/> <h4 style={{marginTop: 25, marginBottom: 25, marginLeft: 25}}>Mark User Absent</h4>
            </Box>

        </div>
    );
};

export default AdminActionBar;
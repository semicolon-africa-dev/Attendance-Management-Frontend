import React from 'react';
import {Box, Text, Heading, Font, IconButton} from "@chakra-ui/react";
import ellipse from '../../utilities/Ellipse_13.svg'
import CircleHeader from './CircleHeader';

const AdminHeader = () => {
  let cohort = "Cohort 7"
    return (
        <Box >
          <Box  display="flex" >
            <Text mt="91px" fontWeight="bold" ml="7px" font="
              IBM Plex Sans" fontStyle="normal" fontSize="60px">{cohort}</Text>
            <Box ml="700px" mt="40px">
              <CircleHeader />
            </Box>
        
             
            
              
            
            
            
          </Box>
         


        </Box>
    );
};

export default AdminHeader;

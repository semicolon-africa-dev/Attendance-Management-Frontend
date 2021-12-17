import React from 'react';
import {Box} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
} from '@chakra-ui/react';
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import logo from '../admin/images/Frame 418.png'
import img from '../admin/images/Ellipse 8.png'
import icon1 from '../admin/images/Vector.png'
import icon2 from '../admin/images/Group 48095461.svg'
import icon3 from '../admin/images/Group 48095462.svg'
import icon4 from '../admin/images/Setting.svg'

const AdminSideBar = () => {
    return (
        <Box bg="#E3FBF2" w="20%" h="95%" rounded="20px" justify="center" align="center" paddingTop={"26px"}>

            <Image

                src={logo}
                alt='semicolo logo'
            />

            <Wrap justify='center' marginTop={"15px"}>
                <WrapItem>
                    <Avatar size='2xl' name='Patience Tommy' src={img}  />
                </WrapItem>
            </Wrap>
            <Heading as='h5' size='sm' paddingTop={"10px"}>
                Patience Tommy
            </Heading>
            <Text fontSize='sm'>zick.e.tommy@gmail.com</Text>

            <Heading as='h4' size='sm' fontSize='24px' fontWeight='700' fontFamily={"IBM Plex Sans"} marginTop={"23px"}>
                8:45am
            </Heading>
            <Heading as='h6' size='sm' fontSize='14px' fontWeight='bold' fontFamily={"IBM Plex Sans"}>
                11-11-2021
            </Heading>

            <Stack direction='row' paddingTop={"42px"}>
                <Image
                    paddingLeft={"20px"}
                    objectFit='cover'
                    src={icon1}
                />
                <Heading as='h6' size='sm' fontSize='18px' fontWeight='700' fontFamily={"IBM Plex Sans"} paddingLeft={"28.5px"} color={"#00D689"}>
                    Overview
                </Heading>
            </Stack>
            <Stack direction='row' marginTop={"27.5px"} height={"50px"} borderRadius={"20px"} paddingTop={"13.5px"} paddingBottom={"13.5px"} paddingRight={"12.5px"} backgroundColor={"#00D689"} marginRight={"4px"} marginLeft={"4px"}>
                <Image
                    paddingLeft={"20px"}
                    objectFit='cover'
                    src={icon2}
                />
                <Heading as='h6' size='sm' paddingRight={"58px"} fontSize='18px' fontWeight='700' fontFamily={"IBM Plex Sans"} paddingLeft={"28.5px"} color={"#ffffff"}>
                    Cohorts
                </Heading>
                <Image
                    paddingLeft={"20px"}
                    objectFit='cover'
                    src={icon3}
                />
            </Stack>

            <Stack direction='row' paddingTop={"28.5px"}>
                <Image
                    paddingLeft={"20px"}
                    objectFit='cover'
                    src={icon4}
                />
                <Heading as='h6' size='sm' fontSize='18px' fontWeight='700' fontFamily={"IBM Plex Sans"} paddingLeft={"28.5px"} color={"#00D689"}>
                    Settings
                </Heading>
            </Stack>

        </Box>
    );
};

export default AdminSideBar;

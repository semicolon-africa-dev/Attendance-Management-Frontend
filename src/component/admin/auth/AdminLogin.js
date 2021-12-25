import {
    Box,
    Button,
    FormControl,
    Input,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    VStack
} from "@chakra-ui/react";
import {useState} from "react";
import GeneralButton from "../../reusables/GeneralButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {TriangleDownIcon} from "@chakra-ui/icons";
const eye = <FontAwesomeIcon bg={"white"} h={'1.7vh'} w={'2vh'} icon={faEye} />;


const AdminLogin = () => {
    const[account, setAccount] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[password, setPassword] = useState('');



    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // localStorage.setItem('')
        axios.post('http://localhost:8080/api/customer', this.state)
            .then(response => {console.log(response)})
        console.log("email  log " + email, "phone log " + phone, "password log  " + password)
    }

    return(
        <Box w="60vw" h="90vh" bg="#E3FBF2">
            <Box>
                <Text mt="7vh" textAlign="center" fontSize="28px" color="#191D34">Create your account</Text>
            </Box>
            <VStack >
            <form onSubmit={onSubmit}>
                <FormControl>
                    <Text mb="2px" color="#9FACA5" fontSize="14px">Account Type</Text>
                    <Input
                        p="0 1vw"
                        isRequired
                        type="text"
                        id="text"
                        w="23vw"
                        h="6vh"
                        rounded="7px"
                        border="unset"
                        value={account}
                        onChange={({target})=>setAccount(target.value)}
                    />

                    <Button h="1vh" w="2vw" border="unset" ml="-2.25vw">
                        <Menu bg="white" border="unset" mb="-5vh">
                            <MenuButton bg="white" border="unset" as={Button} rightIcon={<TriangleDownIcon />}>

                            </MenuButton>
                            <MenuList bg="white" border="unset" p="1vh">
                                <MenuItem mb="2vh" bg="white" fontSize="16" border="unset">Admin</MenuItem>
                                <MenuItem bg="white" fontSize="16" border="unset">Native</MenuItem>
                            </MenuList>
                        </Menu>
                    </Button>
                </FormControl>

                <FormControl mt="3vh">
                    <Text mb="2px" color="#9FACA5" fontSize="14px" >Email</Text>
                    <Input
                        isRequired
                        type="email"
                        id="email"
                        w="23vw"
                        h="6vh"
                        p="0 1vw"
                        rounded="7px"
                        border="unset"
                        value={email} onChange={({target})=>setEmail(target.value)}
                    />
                </FormControl>

                <FormControl mt="3vh">
                    <Text mb="2px" color="#9FACA5" fontSize="14px">Password</Text>
                    <Input
                        isRequired
                        type={passwordShown ? 'text' : 'password'}
                        id="password"
                        autoComplete="off"
                        w="25vw"
                        h="6vh"
                        p="0 1vw"
                        rounded="7px"
                        border="unset"
                        value={password}
                        onChange={({target})=>setPassword(target.value)}
                    />
                    <Button color={"#9FACA5"} ml="-2vw" mt={"0.5vh"} h="4vh" border={"unset"} bg={"white"} onClick={togglePasswordVisibility}>
                        {eye}
                    </Button>
                </FormControl>

            </form>
            </VStack>

    <Box mt={"4vh"} justify="center" align="center" >
        <GeneralButton name={"Sign In"} onSubmit={onSubmit}/>
    </Box>

    <VStack>
        <Box d="flex">
            <Text color="#191D34" fontSize="12px">New to Attendance?
                <Link href="#" color="#00D689" fontSize="12px" ml="4px">Sign Up</Link></Text>
        </Box>
    </VStack>

        </Box>
    );
}

export default AdminLogin;

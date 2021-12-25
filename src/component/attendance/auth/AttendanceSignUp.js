import {
    Box,
    Button,
    FormControl,
    HStack,
    Input,
    Link,
    Menu, MenuButton, MenuItem, MenuList,
    PinInput,
    PinInputField,
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


const AttendanceSignUp = () => {
    const[account, setAccount] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[password, setPassword] = useState('');

    const[first_otp, setFirst_otp] = useState('');
    const[second_otp, setSecond_otp] = useState('');
    const[third_otp, setThird_otp] = useState('');
    const[forth_otp, setForth_otp] = useState('');

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
        <Box w="60vw" h="80vh" bg="#E3FBF2">

            <VStack mt="10vh">
                <form onSubmit={onSubmit}>
                    <FormControl>
                        <Text mb="2px" color="#9FACA5" fontSize="14px">Account Type</Text>
                        <Input
                            isRequired
                            p="0 1vw"
                            type="text"
                            id="text"
                            w="25vw"
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
                            p="0 1vw"
                            isRequired
                            type="email"
                            id="email"
                            w="25vw"
                            h="6vh"
                            rounded="7px"
                            border="unset"
                            value={email} onChange={({target})=>setEmail(target.value)}
                        />
                    </FormControl>

                    <Box w="25" mt="4vh">
                        {/*<HStack w="25vw" mt="4vh">*/}
                            <PinInput type='alphanumeric' mask>
                                <PinInputField rounded="6px" mr="4.75vw" h="6vh" w="5vh" border="unset"
                                value={first_otp} onChange={({target})=>setFirst_otp(target.value)}/>
                                <PinInputField rounded="6px" mr="4.75vw" h="6vh" w="5vh" border="unset"
                                value={second_otp} onChange={({target})=>setSecond_otp(target.value)}/>
                                <PinInputField rounded="6px" mr="4.75vw" h="6vh" w="5vh" border="unset"
                                value={third_otp} onChange={({target})=>setThird_otp(target.value)}/>
                                <PinInputField text="unset" rounded="6px" h="6vh" w="5vh" border="unset"
                                value={forth_otp} onChange={({target})=>setForth_otp(target.value)}/>
                            </PinInput>
                        {/*</HStack>*/}
                    </Box>

                </form>
            </VStack>

            <Box mt={"4vh"} justify="center" align="center" >
                <GeneralButton name={"Sign In"} onSubmit={onSubmit}/>
            </Box>

            <VStack>
                <Box d="flex">
                    <Text color="#191D34" fontSize="12px">New to Attendance?
                        <Link href="#" color="#00D689" fontSize="12px" ml="4px">Sign in</Link></Text>
                </Box>
            </VStack>

        </Box>
    );
}

export default AttendanceSignUp;

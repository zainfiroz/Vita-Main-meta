import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Signup5 = () => {

  const { signup, setSignup } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();
  const submitHandler = () => {
    console.log(signup.height);
    console.log(signup.htInches);
    console.log(signup.currweight);
    console.log(signup.goalweight);

    if(signup.height<2 || signup.height>9){
      toast({
        title: "height(ft): Dont lie about your height bro, we know. It`s okay.",
        description: "",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }

    if(signup.htInches<1 || signup.htInches>11){
      toast({
        title: "height(in): Inches need to be between 1 and 11 as 12 inches = 1 foot.",
        description: "",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }

    if(signup.currweight<15 || signup.currweight>700){
      toast({
        title: "currentWt: We are not Body positive enough to include you, sry. BE BETTER.",
        description: "",
        status: "error",
        duration: 3500,
        position: "top",
        isClosable: true,
      });
    }

    if(signup.goalweight<15 || signup.goalweight>700){
      toast({
        title: "goalWt: We are not Body positive enough to include you, sry. BE BETTER.",
        description: "",
        status: "error",
        duration: 3500,
        position: "top",
        isClosable: true,
      });
    }

    else if (signup.height && signup.currweight && signup.goalweight && signup.htInches) {
      navigate("/signup6");
    } else {
      toast({
        title: "fill all the data",
        description: "",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };

  // const feetCheck = (e) => {
  //   if (e.target.value < 9 && e.target.value > 2)
  //     setSignup({ ...signup, height: e.target.value });
  //   else alert("Dont lie about your height bro, we know. It`s okay.");
  // };

  // const inchCheck = (e) => {
  //   if (e.target.value < 12 && e.target.value > 0)
  //     setSignup({ ...signup, htInches: e.target.value });
  //   else alert("Dont lie about your height bro, we know. It`s okay.");
  // };

  // const currCheck = (e) => {
  //   if (e.target.value < 700 && e.target.value > 15)
  //     setSignup({ ...signup, currweight: e.target.value });
  //   else alert("We are not Body positive enough to include you, sry. BE BETTER.");
  // };

  // const goalCheck = (e) => {
  //   if (e.target.value < 700 && e.target.value > 15)
  //     setSignup({ ...signup, currweight: e.target.value });
  //   else alert("We are not Body positive enough to include you, sry. BE BETTER.");
  // };


  // get users height and weight details
  return (
    <div>
      <Center height={"100vh"}>
        <Box width={"40%"} height={"fit-content"}>
          <Center>
            <Box
              borderRadius="10"
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              padding={"50px 60px"}
              alignContent={"center"}
            >
              <Text overflow={"auto"} fontSize={"18px"} fontWeight={"bold"}>
                How tall are you?
              </Text>

              <Flex gap={5}>
                <InputGroup>
                  <Input
                    type="number"
                    placeholder="Height (feet)"
                    onChange={(e) => setSignup({ ...signup, height: e.target.value })
                    }
                  />
                  <InputRightElement children={"ft"} />
                </InputGroup>
                <InputGroup>
                  <Input
                    type="number"
                    placeholder="Height (inches)" 
                    onChange={(e) => setSignup({ ...signup, htInches: e.target.value })
                  }
                  />
                  < InputRightElement children={"in"} />
                </InputGroup>
              </Flex>

              <Text
                marginTop={10}
                overflow={"auto"}
                fontSize={"18px"}
                fontWeight={"bold"}
              >
                How much do you weight?
              </Text>
              <InputGroup>
                <Input
                  placeholder="Current Weight"
                  onChange={(e) => setSignup({ ...signup, currweight: e.target.value })
                  }
                />
                <InputRightElement children={"kg"} />
              </InputGroup>

              <Text
                marginTop={10}
                overflow={"auto"}
                fontSize={"18px"}
                fontWeight={"bold"}
              >
                What's your goal weight?
              </Text>
              <InputGroup>
                <Input
                  placeholder="Goal Weight"
                  onChange={(e) => setSignup({ ...signup, goalweight: e.target.value })
                  }
                />
                <InputRightElement children={"kg"} />
              </InputGroup>

              <Flex justifyContent={"space-between"} marginTop={7} gap={5}>
                <Box w={"50%"}>
                  <Link to={"/signup4"}>
                    <Button
                      colorScheme="teal"
                      variant="outline"
                      marginBottom="2"
                      w={"100%"}
                    >
                      BACK
                    </Button>
                  </Link>
                </Box>
                <Box w={"50%"}>
                  <Button
                    marginBottom="2"
                    colorScheme={"blue"}
                    w={"100%"}
                    onClick={submitHandler}
                  >
                    NEXT
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default Signup5;

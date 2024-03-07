import React, { useState } from "react";
import { Box, Button, Center, Divider, Flex, FormControl, FormLabel, Heading, Input, Stack, useColorModeValue } from "@chakra-ui/react";
import { FaGoogle, FaApple, FaEnvelope } from "react-icons/fa";

const Index = () => {
  // State for storing email input
  const [email, setEmail] = useState("");

  // Handlers for email input and login
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleLogin = () => {
    // Implement login logic here
    console.log("Logging in with:", email);
  };

  return (
    <Center height="100vh" bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
            </FormControl>
            <Button leftIcon={<FaEnvelope />} colorScheme="blue" variant="solid" onClick={handleLogin}>
              Sign in with Email
            </Button>
            <DividerWithText>or</DividerWithText>
            <Button
              leftIcon={<FaGoogle />}
              colorScheme="red"
              variant="outline"
              onClick={() => {
                // Implement Google login logic here
                console.log("Logging in with Google");
              }}
            >
              Sign in with Google
            </Button>
            <Button
              leftIcon={<FaApple />}
              colorScheme="gray"
              variant="outline"
              onClick={() => {
                // Implement Apple login logic here
                console.log("Logging in with Apple");
              }}
            >
              Sign in with Apple
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Center>
  );
};

// Divider with text in the middle
const DividerWithText = ({ children }) => {
  return (
    <Flex align="center" my={2}>
      <Box flex="1">
        <Divider borderColor={useColorModeValue("gray.300", "gray.600")} />
      </Box>
      <Center w="50px" bg={useColorModeValue("gray.50", "gray.800")} color={useColorModeValue("gray.400", "gray.500")}>
        {children}
      </Center>
      <Box flex="1">
        <Divider borderColor={useColorModeValue("gray.300", "gray.600")} />
      </Box>
    </Flex>
  );
};

export default Index;

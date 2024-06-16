import { useForm } from "react-hook-form";
import { Box, Button, FormControl, FormLabel, Input, Heading, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/login", data);
      if (response.data.success) {
        navigate("/");
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <Heading mb={6}>Login</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl id="username" isInvalid={errors.username}>
            <FormLabel>Username</FormLabel>
            <Input type="text" {...register("username", { required: "Username is required" })} />
            {errors.username && <Text color="red.500">{errors.username.message}</Text>}
          </FormControl>
          <FormControl id="password" isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type="password" {...register("password", { required: "Password is required" })} />
            {errors.password && <Text color="red.500">{errors.password.message}</Text>}
          </FormControl>
          {errorMessage && <Text color="red.500">{errorMessage}</Text>}
          <Button type="submit" colorScheme="blue" width="full">Login</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.900" px={4} py={2} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>ChatUI</Box>
        <Flex alignItems="center">
          <RouterLink to="/">
            <Link px={2}>Home</Link>
          </RouterLink>
          <RouterLink to="/about">
            <Link px={2}>About</Link>
          </RouterLink>
          <RouterLink to="/contact">
            <Link px={2}>Contact</Link>
          </RouterLink>
          <RouterLink to="/login">
            <Button ml={4} colorScheme="blue">Login</Button>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
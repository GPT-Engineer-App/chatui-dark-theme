import { Box, Flex, Link, Button, Input } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box bg="gray.900" px={4} py={2} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <img src="/path/to/logo.png" alt="Logo" style={{ width: "40px", marginRight: "8px", filter: "invert(1)" }} />
          <Box fontWeight="bold" fontSize="xl">AIchat</Box>
        </Box>
        <Flex alignItems="center">
          <Button colorScheme="gray" variant="outline" size="sm" mr={4}>Sync Disabled</Button>
          <Button colorScheme="gray" variant="outline" size="sm">
            <FaPlus />
          </Button>
        </Flex>
      </Flex>
      <Box mt={2}>
        <Input placeholder="Search agents and conversations..." bg="gray.800" border="none" />
      </Box>
    </Box>
  );
};

export default Navbar;
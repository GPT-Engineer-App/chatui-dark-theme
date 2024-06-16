import { Box, VStack, Link, useMediaQuery } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaComments, FaInfoCircle, FaCode, FaList } from "react-icons/fa";

const Sidebar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box bg="gray.800" color="white" w={isLargerThan768 ? "250px" : "100%"} p={4} h={isLargerThan768 ? "100vh" : "auto"}>
      <VStack spacing={4} align="start">
        <RouterLink to="/">
          <Link display="flex" alignItems="center">
            <FaComments />
            <Box ml={2}>Just Chat</Box>
          </Link>
        </RouterLink>
        <RouterLink to="/assistant">
          <Link display="flex" alignItems="center">
            <FaInfoCircle />
            <Box ml={2}>Assistant</Box>
          </Link>
        </RouterLink>
        <RouterLink to="/coding">
          <Link display="flex" alignItems="center">
            <FaCode />
            <Box ml={2}>Coding</Box>
          </Link>
        </RouterLink>
        <RouterLink to="/default-list">
          <Link display="flex" alignItems="center">
            <FaList />
            <Box ml={2}>Default List</Box>
          </Link>
        </RouterLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;
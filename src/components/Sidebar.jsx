import { Box, VStack, Link, useMediaQuery } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box bg="gray.800" color="white" w={isLargerThan768 ? "250px" : "100%"} p={4} h={isLargerThan768 ? "100vh" : "auto"}>
      <VStack spacing={4} align="start">
        <RouterLink to="/">
          <Link display="flex" alignItems="center">
            <FaHome />
            <Box ml={2}>Home</Box>
          </Link>
        </RouterLink>
        <RouterLink to="/about">
          <Link display="flex" alignItems="center">
            <FaInfoCircle />
            <Box ml={2}>About</Box>
          </Link>
        </RouterLink>
        <RouterLink to="/contact">
          <Link display="flex" alignItems="center">
            <FaEnvelope />
            <Box ml={2}>Contact</Box>
          </Link>
        </RouterLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;
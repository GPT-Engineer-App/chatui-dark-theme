import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";

const RightPanel = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box bg="gray.800" color="white" w={isLargerThan768 ? "300px" : "100%"} p={4} h={isLargerThan768 ? "100vh" : "auto"}>
      <Heading size="md" mb={4}>Role Settings</Heading>
      <Text>
        Adjust the settings for different roles and conversation topics to customize your chat experience.
      </Text>
    </Box>
  );
};

export default RightPanel;
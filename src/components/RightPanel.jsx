import { Box, Heading, Text } from "@chakra-ui/react";

const RightPanel = () => {
  return (
    <Box bg="gray.800" color="white" w="300px" p={4} h="100vh">
      <Heading size="md" mb={4}>Role Settings</Heading>
      <Text>
        Adjust the settings for different roles and conversation topics to customize your chat experience.
      </Text>
    </Box>
  );
};

export default RightPanel;
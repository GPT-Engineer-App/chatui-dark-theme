import { Box, Text, Heading } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <Heading mb={4}>About ChatUI</Heading>
    <Text fontSize="lg" mb={6}>
      ChatUI is a versatile chat application designed to facilitate conversations between users and assistants. It features a dark-themed user interface and various conversation topics.
    </Text>
  </Box>
);

export default About;
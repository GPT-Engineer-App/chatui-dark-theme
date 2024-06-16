import { Box, Text, VStack, Code } from "@chakra-ui/react";

const ChatArea = () => {
  return (
    <Box bg="gray.700" color="white" flex="1" p={4}>
      <VStack spacing={4} align="start">
        <Text>User: How do I create a website crawler?</Text>
        <Text>Assistant: You can use Python with libraries like BeautifulSoup and requests.</Text>
        <Code p={4} bg="gray.800" w="100%">
          {`import requests
from bs4 import BeautifulSoup

url = 'http://example.com'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

for link in soup.find_all('a'):
    print(link.get('href'))`}
        </Code>
      </VStack>
    </Box>
  );
};

export default ChatArea;
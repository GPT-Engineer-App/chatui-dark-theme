import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ChatArea from "./components/ChatArea.jsx";
import RightPanel from "./components/RightPanel.jsx";
import { Flex, useMediaQuery, Box, IconButton } from "@chakra-ui/react";
import { FaComments, FaCompass, FaUser } from "react-icons/fa";

function App() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Router>
      <Navbar />
      <Flex direction={isLargerThan768 ? "row" : "column"}>
        <Sidebar />
        <ChatArea />
        <RightPanel />
      </Flex>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      {!isLargerThan768 && (
        <Box position="fixed" bottom="0" width="100%" bg="gray.900" p={2} display="flex" justifyContent="space-around">
          <IconButton icon={<FaComments />} aria-label="Chat" colorScheme="gray" variant="outline" />
          <IconButton icon={<FaCompass />} aria-label="Discover" colorScheme="gray" variant="outline" />
          <IconButton icon={<FaUser />} aria-label="Me" colorScheme="gray" variant="outline" />
        </Box>
      )}
    </Router>
  );
}

export default App;
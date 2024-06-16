import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ChatArea from "./components/ChatArea.jsx";
import RightPanel from "./components/RightPanel.jsx";
import { Flex, useMediaQuery } from "@chakra-ui/react";

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
    </Router>
  );
}

export default App;